"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    placeholder: "Your name",
    autoComplete: "name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    inputMode: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+90 555 123 4567",
    autoComplete: "tel",
    inputMode: "tel",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "What is it about?",
    autoComplete: "off",
    required: true,
  },
];

const labelClass = "block font-mono text-xs uppercase tracking-[0.12em] text-muted";
const inputClass =
  "mt-1 min-h-12 w-full border-0 border-b border-line-strong bg-transparent px-0 py-2 text-lg text-ink outline-none transition-colors duration-150 placeholder:text-muted/70 focus:border-accent aria-[invalid=true]:border-accent";

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <div aria-live="polite">
      <AnimatePresence initial={false}>
        {message ? (
          <motion.p
            key="error"
            id={id}
            className="mt-2 text-sm text-accent"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            {message}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

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
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label className={labelClass} htmlFor={field.name}>
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
              className={inputClass}
            />
            <FieldError id={`${field.name}-error`} message={errors[field.name]} />
          </div>
        ))}

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="message">
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
            placeholder="A few details: the product, the timeline, the platform."
            autoComplete="off"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass} min-h-36 resize-y`}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>
      </div>

      <button
        className="press group mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 font-medium text-paper transition-[background-color,transform] duration-150 hover:bg-accent"
        type="submit"
      >
        Send via WhatsApp
        <span
          aria-hidden="true"
          className="transition-[translate] duration-200 ease-out group-hover:translate-x-0.5"
        >
          →
        </span>
      </button>
    </form>
  );
}
