export const WHATSAPP_NUMBER = "905556030033";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s().-]{7,20}$/;

export function formatWhatsAppMessage(values: ContactFormValues) {
  const phone = values.phone.trim() || "Not provided";

  return [
    "Hello Mahir,",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${phone}`,
    `Subject: ${values.subject.trim()}`,
    "",
    values.message.trim(),
  ].join("\n");
}

export function buildWhatsAppUrl(values: ContactFormValues) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    formatWhatsAppMessage(values),
  )}`;
}

export function validateContactForm(values: ContactFormValues) {
  const errors: ContactFormErrors = {};
  const trimmed = {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  };

  if (!trimmed.name) {
    errors.name = "Name is required.";
  }

  if (!trimmed.email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(trimmed.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (trimmed.phone && !phonePattern.test(trimmed.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!trimmed.subject) {
    errors.subject = "Subject is required.";
  } else if (trimmed.subject.length > 75) {
    errors.subject = "Subject must be 75 characters or fewer.";
  }

  if (!trimmed.message) {
    errors.message = "Message is required.";
  } else if (trimmed.message.length > 500) {
    errors.message = "Message must be 500 characters or fewer.";
  }

  return errors;
}
