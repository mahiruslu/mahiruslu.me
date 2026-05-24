import { describe, expect, it } from "bun:test";
import {
  buildWhatsAppUrl,
  formatWhatsAppMessage,
  validateContactForm,
  WHATSAPP_NUMBER,
} from "./contact.ts";

const validInput = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  phone: "+90 555 123 4567",
  subject: "Product work",
  message: "Can we talk about a React Native app?",
};

describe("contact utilities", () => {
  it("formats a WhatsApp message with submitted contact fields", () => {
    const message = formatWhatsAppMessage(validInput);

    expect(message).toMatch(/Hello Mahir/);
    expect(message).toMatch(/Name: Ada Lovelace/);
    expect(message).toMatch(/Email: ada@example.com/);
    expect(message).toMatch(/Subject: Product work/);
  });

  it("builds the expected wa.me URL", () => {
    const url = buildWhatsAppUrl(validInput);

    expect(url.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`)).toBe(true);
    expect(decodeURIComponent(url)).toMatch(/React Native app/);
  });

  it("returns client-side validation errors for invalid input", () => {
    const errors = validateContactForm({
      name: "",
      email: "not-email",
      phone: "abc",
      subject: "",
      message: "",
    });

    expect(Object.keys(errors)).toEqual([
      "name",
      "email",
      "phone",
      "subject",
      "message",
    ]);
  });
});
