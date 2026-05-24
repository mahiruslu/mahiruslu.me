"use client";

import { FormEvent, useRef, useState } from "react";
import {
  buildWhatsAppUrl,
  ContactFormValues,
  validateContactForm,
} from "@/lib/contact";

const fields: Array<{
  name: keyof ContactFormValues;
  label: string;
  type?: string;
  placeholder: string;
  autoComplete: string;
  inputMode?: "email" | "tel" | "text";
  required?: boolean;
}> = [
  {
    name: "name",
    label: "Name",
    placeholder: "Mahir Uslu…",
    autoComplete: "name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "hello@example.com…",
    autoComplete: "email",
    inputMode: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+90 555 123 4567…",
    autoComplete: "tel",
    inputMode: "tel",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "React Native product work…",
    autoComplete: "off",
    required: true,
  },
];

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const inputRefs = useRef<Partial<Record<keyof ContactFormValues, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  function updateValue(name: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0] as keyof ContactFormValues | undefined;
    if (firstError) {
      inputRefs.current[firstError]?.focus();
      return;
    }

    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="border-2 border-ink bg-paper p-4 shadow-[10px_10px_0_#0b0f10] sm:p-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="block font-black" htmlFor={field.name}>
              {field.label}
              {field.required ? <span aria-hidden="true"> *</span> : null}
            </label>
            <input
              ref={(node) => {
                inputRefs.current[field.name] = node;
              }}
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              value={values[field.name]}
              onChange={(event) => updateValue(field.name, event.target.value)}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              inputMode={field.inputMode}
              spellCheck={field.name === "email" ? false : undefined}
              aria-invalid={errors[field.name] ? "true" : "false"}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              className="min-h-12 w-full border-2 border-ink bg-white px-3 py-2 font-medium text-ink placeholder:text-steel"
            />
            {errors[field.name] ? (
              <p
                id={`${field.name}-error`}
                className="font-bold text-signal"
                aria-live="polite"
              >
                {errors[field.name]}
              </p>
            ) : null}
          </div>
        ))}

        <div className="space-y-2 md:col-span-2">
          <label className="block font-black" htmlFor="message">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            ref={(node) => {
              inputRefs.current.message = node;
            }}
            id="message"
            name="message"
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            placeholder="A few details about the product, timeline, and platform…"
            autoComplete="off"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="min-h-40 w-full resize-y border-2 border-ink bg-white px-3 py-2 font-medium text-ink placeholder:text-steel"
          />
          {errors.message ? (
            <p id="message-error" className="font-bold text-signal" aria-live="polite">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <button
        className="mt-6 min-h-12 border-2 border-ink bg-ink px-5 py-3 font-black text-paper shadow-[5px_5px_0_#ff4f3f] transition hover:-translate-y-0.5 hover:bg-signal"
        type="submit"
      >
        Open WhatsApp
      </button>
    </form>
  );
}
