import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.QA_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.QA_OUT || "C:/Users/Lenovo/AppData/Local/Temp/opencode/qa";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "375", width: 375, height: 812 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1440", width: 1440, height: 900 },
];

const routes = [
  ["/", "home"],
  ["/treatments", "treatments"],
  ["/treatments/cosmetic-dentistry", "treatment-detail"],
  ["/treatments/clear-aligners", "treatment-detail-2"],
  ["/doctors", "doctors"],
  ["/contact", "contact"],
  ["/privacy", "privacy"],
  ["/does-not-exist", "404"],
];

const issues = [];
const log = console.log;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--disable-gpu", "--no-sandbox", "--hide-scrollbars"],
});

const page = await browser.newPage();

const consoleLog = [];
page.on("console", (msg) => {
  if (msg.type() === "error" || msg.type() === "warning") {
    consoleLog.push(`${msg.type()}: ${msg.text()}`);
  }
});
page.on("pageerror", (err) => consoleLog.push(`pageerror: ${err.message}`));

/** Overflow + clipping-aware bleed detector. */
async function inspect(label) {
  const result = await page.evaluate(() => {
    const de = document.documentElement;
    const vw = de.clientWidth;
    const clipped = (el) => {
      let node = el.parentElement;
      while (node && node !== document.body) {
        const s = getComputedStyle(node);
        if (
          s.overflow !== "visible" ||
          s.overflowX !== "visible" ||
          s.overflowY !== "visible"
        ) {
          return true;
        }
        node = node.parentElement;
      }
      return false;
    };
    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const s = getComputedStyle(el);
      if (s.position === "fixed") continue;
      if (r.right > vw + 1.5 || r.left < -1.5) {
        if (clipped(el)) continue;
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 80),
          left: Math.round(r.left),
          right: Math.round(r.right),
        });
      }
      if (offenders.length > 6) break;
    }
    return {
      scrollWidth: de.scrollWidth,
      clientWidth: de.clientWidth,
      offenders,
    };
  });

  if (result.scrollWidth > result.clientWidth + 1) {
    issues.push(
      `[overflow] ${label}: scrollWidth ${result.scrollWidth} > clientWidth ${result.clientWidth} ${JSON.stringify(result.offenders)}`,
    );
  } else if (result.offenders.length) {
    issues.push(
      `[bleed] ${label}: ${JSON.stringify(result.offenders)}`,
    );
  }
}

async function slowScroll() {
  await page.evaluate(() => {
    document.documentElement.dataset.prevScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
  });
  await page.evaluate(
    () =>
      new Promise((res) => {
        let y = 0;
        const step = () => {
          y += window.innerHeight * 0.6;
          window.scrollTo(0, y);
          if (y < document.body.scrollHeight) {
            setTimeout(() => requestAnimationFrame(step), 110);
          } else {
            window.scrollTo(0, 0);
            setTimeout(res, 700);
          }
        };
        step();
      }),
  );
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior =
      document.documentElement.dataset.prevScrollBehavior || "";
    delete document.documentElement.dataset.prevScrollBehavior;
  });
  await new Promise((r) => setTimeout(r, 700));
}

// ---------------------------------------------------------------- pass 1
// Reduced-motion capture => static layout screenshots for visual review.
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);

for (const viewport of viewports) {
  await page.setViewport({
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
  });

  for (const [route, name] of routes) {
    const label = `${name}@${viewport.name}`;
    consoleLog.length = 0;
    const response = await page.goto(BASE + route, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    await new Promise((r) => setTimeout(r, 400));

    const status = response ? response.status() : 0;
    const ok = name === "404" ? status === 404 : status === 200 || status === 304;
    if (!ok) {
      issues.push(`[status] ${label}: ${status}`);
    }

    await inspect(label);

    const relevant = consoleLog.filter(
      (m) => !(name === "404" && m.includes("404 (Not Found)")),
    );
    if (relevant.length) {
      issues.push(`[console] ${label}: ${relevant.slice(0, 5).join(" | ")}`);
    }

    if (
      (viewport.name === "1440" && name !== "404") ||
      (name === "home" && ["375", "768", "1024"].includes(viewport.name)) ||
      (name === "treatment-detail" && viewport.name === "375") ||
      (name === "contact" && viewport.name === "768")
    ) {
      await page.screenshot({
        path: path.join(OUT, `${name}-${viewport.name}.png`),
        fullPage: true,
      });
    }
  }
}

// ---------------------------------------------------------------- pass 2
// Motion enabled: confirm reveal-on-scroll actually resolves to opacity 1.
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "no-preference" },
]);
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

for (const [route, name] of routes.filter((r) => r[1] !== "404")) {
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
  await slowScroll();

  const hidden = await page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll("main *")) {
      const s = getComputedStyle(el);
      if (s.opacity === "0" && s.display !== "none") {
        out.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 70),
        });
      }
      if (out.length > 5) break;
    }
    return out;
  });
  if (hidden.length) {
    issues.push(`[reveal] ${name}: elements still hidden after scroll ${JSON.stringify(hidden)}`);
  }

  if (name === "home") {
    await page.screenshot({
      path: path.join(OUT, "home-1440-motion.png"),
      fullPage: true,
    });
  }
}

// ---------------------------------------------------------------- pass 3
// Interactions.
consoleLog.length = 0;
await page.goto(BASE + "/", { waitUntil: "networkidle0" });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});

// FAQ accordion
await page.evaluate(() => document.querySelector("#faq")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 800));
const faqButtons = await page.$$("#faq button[aria-expanded]");
if (faqButtons.length < 6) {
  issues.push(`[faq] expected >=6 triggers, got ${faqButtons.length}`);
}
await faqButtons[2].click();
await new Promise((r) => setTimeout(r, 700));
const expanded = await page.evaluate(
  () => document.querySelectorAll("#faq button[aria-expanded='true']").length,
);
if (expanded !== 1) issues.push(`[faq] expected 1 expanded, got ${expanded}`);
const panelOpen = await page.evaluate(() => {
  const panels = [...document.querySelectorAll("#faq .accordion-panel")];
  return panels.some((p) => p.getBoundingClientRect().height > 20);
});
if (!panelOpen) issues.push(`[faq] open panel has no height`);
await page.screenshot({ path: path.join(OUT, "state-faq-open.png") });

// Form validation
await page.evaluate(() => document.querySelector("#book")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 600));
await page.evaluate(() =>
  document.querySelector('#book form button[type="submit"]')?.click(),
);
await new Promise((r) => setTimeout(r, 500));
const errCount = await page.evaluate(
  () => document.querySelectorAll('#book [role="alert"]').length,
);
if (errCount < 4) {
  issues.push(`[form] expected >=4 validation errors, got ${errCount}`);
}
const focusOnInvalid = await page.evaluate(
  () => document.activeElement && document.activeElement.id,
);
if (!String(focusOnInvalid).startsWith("field-")) {
  issues.push(`[form] focus not moved to first error (got ${focusOnInvalid})`);
}
await page.screenshot({ path: path.join(OUT, "state-form-errors.png") });

// Form success
const fill = () => {
  const set = (sel, value) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const setter = Object.getOwnPropertyDescriptor(
      el.constructor.prototype,
      "value",
    ).set;
    setter.call(el, value);
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  };
  set("#field-fullName", "Priya Sharma");
  set("#field-phone", "9876543210");
  set("#field-email", "priya@example.com");
  const d = new Date();
  d.setDate(d.getDate() + 3);
  set("#field-date", d.toISOString().slice(0, 10));
  set("#field-time", "Morning — 9:00 AM to 12:00 PM");
  set("#field-treatment", "Cosmetic Dentistry");
  set("#field-message", "I would like to discuss whitening options.");
};
await page.evaluate(fill);
await new Promise((r) => setTimeout(r, 300));
await page.evaluate(() =>
  document.querySelector('#book form button[type="submit"]')?.click(),
);
await new Promise((r) => setTimeout(r, 2400));
const successShown = await page.evaluate(
  () => !!document.querySelector('#book [role="status"]'),
);
if (!successShown) issues.push(`[form] success state did not appear`);
await page.screenshot({ path: path.join(OUT, "state-form-success.png") });

// Form failure (demo control)
await page.evaluate(() =>
  document.querySelector('#book button[type="button"]')?.click(),
);
await new Promise((r) => setTimeout(r, 500));
await page.evaluate(() => {
  const cb = document.querySelector('#book input[type="checkbox"]');
  if (cb && !cb.checked) cb.click();
});
await page.evaluate(fill);
await new Promise((r) => setTimeout(r, 300));
await page.evaluate(() =>
  document.querySelector('#book form button[type="submit"]')?.click(),
);
await new Promise((r) => setTimeout(r, 2400));
const failShown = await page.evaluate(
  () => !!document.querySelector('#book [role="alert"]'),
);
if (!failShown) issues.push(`[form] failure state did not appear`);
await page.screenshot({ path: path.join(OUT, "state-form-failed.png") });

// Mobile drawer
await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 1 });
await page.goto(BASE + "/", { waitUntil: "networkidle0" });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});
await page.evaluate(() => window.scrollTo(0, 500));
await new Promise((r) => setTimeout(r, 500));
await page.evaluate(() =>
  document.querySelector("header button[aria-controls]")?.click(),
);
await new Promise((r) => setTimeout(r, 700));
const drawerOpen = await page.evaluate(
  () => !!document.querySelector('[role="dialog"][aria-modal="true"]'),
);
if (!drawerOpen) issues.push(`[drawer] did not open`);
const drawerOverflow = await page.evaluate(
  () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
);
if (drawerOverflow) issues.push(`[drawer] horizontal overflow while open`);
const bodyLocked = await page.evaluate(
  () => document.body.style.overflow === "hidden",
);
if (!bodyLocked) issues.push(`[drawer] body scroll not locked`);
await page.screenshot({ path: path.join(OUT, "state-mobile-drawer.png") });

await page.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 500));
const drawerClosed = await page.evaluate(
  () => !document.querySelector('[role="dialog"][aria-modal="true"]'),
);
if (!drawerClosed) issues.push(`[drawer] Escape did not close`);

// Mobile sticky CTA + scrolled header
await page.evaluate(() => window.scrollTo(0, 1200));
await new Promise((r) => setTimeout(r, 600));
const sticky = await page.evaluate(() => {
  const header = document.querySelector("header");
  const bar = [...document.querySelectorAll('a[href="/#book"]')].find((a) =>
    a.getBoundingClientRect().height > 30 &&
    a.getBoundingClientRect().top > window.innerHeight - 80,
  );
  return {
    headerTop: header ? Math.round(header.getBoundingClientRect().top) : null,
    barVisible: !!bar,
  };
});
if (sticky.headerTop !== 0) {
  issues.push(`[header] not sticky, top=${sticky.headerTop}`);
}
if (!sticky.barVisible) issues.push(`[mobile bar] not visible on scroll`);
await page.screenshot({ path: path.join(OUT, "state-mobile-scrolled.png") });

// Keyboard focus visibility check
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(BASE + "/", { waitUntil: "networkidle0" });
for (let i = 0; i < 6; i++) await page.keyboard.press("Tab");
const focused = await page.evaluate(() => {
  const el = document.activeElement;
  if (!el || el === document.body) return null;
  const s = getComputedStyle(el);
  return { tag: el.tagName, outline: s.outlineStyle, width: s.outlineWidth };
});
if (!focused) issues.push(`[a11y] keyboard focus did not move to a control`);
else if (focused.outline === "none") {
  issues.push(`[a11y] no focus outline on ${focused.tag}`);
}

const interactionConsole = consoleLog.filter(
  (m) => !m.includes("404 (Not Found)"),
);
if (interactionConsole.length) {
  issues.push(`[console] interactions: ${interactionConsole.slice(0, 5).join(" | ")}`);
}

await page.close();
await browser.close();

fs.writeFileSync(
  path.join(OUT, "issues.txt"),
  issues.length ? issues.join("\n") : "NO ISSUES",
);

log("\n===== QA SUMMARY =====");
log(issues.length ? issues.join("\n") : "NO ISSUES FOUND");
