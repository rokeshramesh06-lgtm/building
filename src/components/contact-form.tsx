"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { publicDbConfig } from "@/lib/public-db-config";
import styles from "./forms.module.css";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type SubmissionState = {
  tone: "idle" | "success" | "error";
  message: string;
};

const initialValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const initialState: SubmissionState = {
  tone: "idle",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [submissionState, setSubmissionState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionState(initialState);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-db-user": publicDbConfig.username,
          "x-db-password": publicDbConfig.password,
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to submit your message.");
      }

      setValues(initialValues);
      setSubmissionState({
        tone: "success",
        message: payload.message ?? "Your message has been sent successfully.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit your message.";

      setSubmissionState({
        tone: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.card} aria-labelledby="contact-form-heading">
      <div className={styles.header}>
        <h3 id="contact-form-heading">Contact form</h3>
        <p>
          Leave your customer name, phone number, email, and message. We will
          get back with the right team member.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.twoColumn}>
          <div className={styles.field}>
            <label htmlFor="contact-name">Customer name</label>
            <input
              id="contact-name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-phone">Phone number</label>
            <input
              id="contact-phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              autoComplete="tel"
              inputMode="tel"
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="name@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us about your building, renovation, or design requirement."
            required
          />
        </div>

        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        <p
          className={`${styles.status} ${
            submissionState.tone === "success"
              ? styles.success
              : submissionState.tone === "error"
                ? styles.error
                : ""
          }`}
          aria-live="polite"
        >
          {submissionState.message}
        </p>

        <p className={styles.note}>
          Frontend-configured data capture: {publicDbConfig.provider.toUpperCase()} local
          file at <code>{publicDbConfig.databaseFile}</code>.
        </p>
      </form>
    </section>
  );
}
