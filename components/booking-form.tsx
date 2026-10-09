"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Info,
  Loader2,
} from "lucide-react";
import { treatmentOptions } from "@/lib/treatments";
import { cn } from "@/lib/utils";

type Fields = {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const emptyFields: Fields = {
  fullName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  treatment: "",
  message: "",
};

const timeSlots = [
  "Morning — 9:00 AM to 12:00 PM",
  "Afternoon — 12:00 PM to 4:00 PM",
  "Evening — 4:00 PM to 7:00 PM",
];

function todayIso() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter at least 2 characters.";
  }

  const digits = values.phone.replace(/[^\d]/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (digits.length < 7 || digits.length > 15) {
    errors.phone = "Enter a valid phone number (7–15 digits).";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address does not look right.";
  }

  if (!values.date) {
    errors.date = "Please choose a preferred date.";
  } else if (values.date < todayIso()) {
    errors.date = "Please choose today or a future date.";
  }

  if (!values.time) errors.time = "Please choose a preferred time.";
  if (!values.treatment) errors.treatment = "Please select a treatment of interest.";

  if (values.message.length > 500) {
    errors.message = "Please keep your message under 500 characters.";
  }

  return errors;
}

type ErrorKeys = keyof Fields;
type Errors = Partial<Record<ErrorKeys, string>>;

const fieldBase =
  "w-full rounded-xl border bg-white px-4 text-[0.95rem] text-charcoal transition-colors duration-200 placeholder:text-charcoal-soft/55 focus:outline-none focus:ring-2 focus:ring-forest/25";

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 flex items-baseline justify-between gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-charcoal-soft"
    >
      <span>{children}</span>
      {optional ? (
        <span className="text-[0.62rem] font-medium tracking-[0.12em] text-charcoal-soft/60">
          Optional
        </span>
      ) : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className="mt-2 flex items-start gap-1.5 text-[0.78rem] font-medium text-alert"
    >
      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}

export function BookingForm({ id }: { id?: string }) {
  const [values, setValues] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [simulateFailure, setSimulateFailure] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);
  const firstErrorRef = useRef<string | null>(null);

  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayIso();
  }, []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => {
        if (!prev[name as ErrorKeys]) return prev;
        const next = { ...prev };
        delete next[name as ErrorKeys];
        return next;
      });
      if (status === "error") setStatus("idle");
    },
    [status],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const found = validate(values);
      setErrors(found);

      const keys = Object.keys(found) as ErrorKeys[];
      if (keys.length > 0) {
        firstErrorRef.current = keys[0];
        document.getElementById(`field-${keys[0]}`)?.focus();
        setStatus("idle");
        return;
      }

      setStatus("submitting");
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus(simulateFailure ? "error" : "success");
    },
    [simulateFailure, values],
  );

  const reset = () => {
    setValues(emptyFields);
    setErrors({});
    setStatus("idle");
    setSimulateFailure(false);
    if (dateRef.current) dateRef.current.min = todayIso();
  };

  const inputName = (name: ErrorKeys) => ({
    id: `field-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `error-${name}` : undefined,
  });

  if (status === "success") {
    return (
      <div
        id={id}
        className="rounded-[1.75rem] border border-line bg-ivory p-8 shadow-lift sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-[1.75rem] leading-tight text-forest sm:text-[2rem]">
          Your demo request was recorded locally.
        </h3>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal-soft">
          Nothing was sent to a server, an email address or a real clinic. On a
          live site, the reception team would confirm your appointment by phone
          or email within one working day.
        </p>

        <dl className="mt-7 grid gap-4 rounded-2xl border border-line bg-white p-6 sm:grid-cols-2">
          <div>
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
              Requested date
            </dt>
            <dd className="mt-1 font-display text-lg text-forest">
              {values.date || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
              Preferred time
            </dt>
            <dd className="mt-1 font-display text-lg text-forest">
              {values.time || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
              Treatment of interest
            </dt>
            <dd className="mt-1 font-display text-lg text-forest">
              {values.treatment || "—"}
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
              Name
            </dt>
            <dd className="mt-1 font-display text-lg text-forest">
              {values.fullName || "—"}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:bg-forest/5"
        >
          Submit another demo request
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      id={id}
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-line bg-ivory p-6 shadow-lift sm:p-9"
    >
      <div className="flex items-start gap-3 rounded-2xl border border-champagne-deep/60 bg-champagne/45 px-4 py-3.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
        <p className="text-[0.8rem] leading-relaxed text-charcoal-soft">
          <strong className="font-semibold text-forest">Demo form.</strong> No
          appointment is actually booked and no data leaves your browser. Please
          do not enter medical or sensitive information.
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="field-fullName">Full name</Label>
          <input
            {...inputName("fullName")}
            type="text"
            autoComplete="name"
            placeholder="e.g. Priya Sharma"
            value={values.fullName}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              fieldBase,
              "h-12",
              errors.fullName ? "border-alert" : "border-line focus:border-forest/40",
            )}
          />
          <FieldError id="error-fullName" message={errors.fullName} />
        </div>

        <div>
          <Label htmlFor="field-phone">Phone number</Label>
          <input
            {...inputName("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            value={values.phone}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              fieldBase,
              "h-12",
              errors.phone ? "border-alert" : "border-line focus:border-forest/40",
            )}
          />
          <FieldError id="error-phone" message={errors.phone} />
        </div>

        <div>
          <Label htmlFor="field-email" optional>
            Email address
          </Label>
          <input
            {...inputName("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              fieldBase,
              "h-12",
              errors.email ? "border-alert" : "border-line focus:border-forest/40",
            )}
          />
          <FieldError id="error-email" message={errors.email} />
        </div>

        <div>
          <Label htmlFor="field-date">Preferred date</Label>
          <input
            {...inputName("date")}
            ref={dateRef}
            type="date"
            value={values.date}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              fieldBase,
              "h-12",
              errors.date ? "border-alert" : "border-line focus:border-forest/40",
            )}
          />
          <FieldError id="error-date" message={errors.date} />
        </div>

        <div>
          <Label htmlFor="field-time">Preferred time</Label>
          <select
            {...inputName("time")}
            value={values.time}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              fieldBase,
              "h-12 appearance-none pr-10",
              errors.time ? "border-alert" : "border-line focus:border-forest/40",
              !values.time && "text-charcoal-soft/70",
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235b625b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="">Select a time window</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <FieldError id="error-time" message={errors.time} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="field-treatment">Treatment of interest</Label>
          <select
            {...inputName("treatment")}
            value={values.treatment}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              fieldBase,
              "h-12 appearance-none pr-10",
              errors.treatment
                ? "border-alert"
                : "border-line focus:border-forest/40",
              !values.treatment && "text-charcoal-soft/70",
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235b625b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="">Select a treatment</option>
            {treatmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="error-treatment" message={errors.treatment} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="field-message" optional>
            Short message
          </Label>
          <textarea
            {...inputName("message")}
            rows={4}
            placeholder="Anything you would like to mention before the visit (no medical details, please)."
            value={values.message}
            onChange={handleChange}
            disabled={status === "submitting"}
            className={cn(
              fieldBase,
              "min-h-28 resize-y py-3 leading-relaxed",
              errors.message ? "border-alert" : "border-line focus:border-forest/40",
            )}
          />
          <div className="flex items-start justify-between gap-4">
            <FieldError id="error-message" message={errors.message} />
            <p className="ml-auto mt-2 shrink-0 text-[0.7rem] tabular-nums text-charcoal-soft/60">
              {values.message.length}/500
            </p>
          </div>
        </div>
      </div>

      <div
        aria-live="polite"
        className="mt-5 min-h-0"
      >
        {status === "error" ? (
          <div
            role="alert"
            className="flex flex-col gap-3 rounded-2xl border border-alert/40 bg-alert-soft px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="flex items-start gap-2 text-[0.85rem] leading-relaxed text-alert">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              The demo submission failed as requested. Nothing was sent anywhere.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="shrink-0 self-start rounded-full border border-alert/40 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-alert transition-colors hover:bg-alert/10 sm:self-auto"
            >
              Try again
            </button>
          </div>
        ) : null}
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-[0.8rem] leading-relaxed text-charcoal-soft">
        <input
          type="checkbox"
          checked={simulateFailure}
          onChange={(event) => setSimulateFailure(event.target.checked)}
          disabled={status === "submitting"}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#183d35]"
        />
        <span>
          Demo control — simulate a failed submission so you can preview the
          error state.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-forest px-8 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-all duration-300 hover:bg-forest-mid active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="spinner h-4 w-4" />
            Sending demo request…
          </>
        ) : (
          <>
            Request this appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="mt-5 text-[0.75rem] leading-relaxed text-charcoal-soft/80">
        <strong className="font-semibold text-forest">Privacy notice:</strong>{" "}
        this concept site has no backend. Submissions are simulated in your
        browser and are not stored, forwarded or viewable by anyone. Do not
        submit real personal or health information.
      </p>
    </form>
  );
}
