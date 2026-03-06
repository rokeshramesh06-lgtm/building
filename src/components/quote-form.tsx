"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { publicDbConfig } from "@/lib/public-db-config";
import styles from "./forms.module.css";

type QuoteFormValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  builtUpArea: string;
  budget: string;
  message: string;
};

type SubmissionState = {
  tone: "idle" | "success" | "error";
  message: string;
};

const initialValues: QuoteFormValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "House Construction",
  location: "",
  builtUpArea: "",
  budget: "₹50L - ₹1Cr",
  message: "",
};

const initialState: SubmissionState = {
  tone: "idle",
  message: "",
};

export function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [submissionState, setSubmissionState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionState(initialState);

    try {
      const response = await fetch("/api/quote", {
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
        throw new Error(payload.message ?? "Unable to request a quotation.");
      }

      setValues(initialValues);
      setSubmissionState({
        tone: "success",
        message:
          payload.message ?? "Your quotation request has been sent successfully.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to request a quotation.";

      setSubmissionState({
        tone: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.card} aria-labelledby="quote-form-heading">
      <div className={styles.header}>
        <h3 id="quote-form-heading">Quotation request</h3>
        <p>
          Customers can request a building cost estimate by sharing the project
          type, location, and expected budget range.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.twoColumn}>
          <div className={styles.field}>
            <label htmlFor="quote-name">Customer name</label>
            <input
              id="quote-name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="quote-phone">Phone number</label>
            <input
              id="quote-phone"
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

        <div className={styles.twoColumn}>
          <div className={styles.field}>
            <label htmlFor="quote-email">Email</label>
            <input
              id="quote-email"
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
            <label htmlFor="quote-project-type">Project type</label>
            <select
              id="quote-project-type"
              name="projectType"
              value={values.projectType}
              onChange={handleChange}
            >
              <option>House Construction</option>
              <option>Interior Design</option>
              <option>Architecture</option>
              <option>Renovation</option>
              <option>Commercial Project</option>
            </select>
          </div>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.field}>
            <label htmlFor="quote-location">Project location</label>
            <input
              id="quote-location"
              name="location"
              value={values.location}
              onChange={handleChange}
              placeholder="City / area"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="quote-built-up-area">Built-up area</label>
            <input
              id="quote-built-up-area"
              name="builtUpArea"
              value={values.builtUpArea}
              onChange={handleChange}
              placeholder="e.g. 3,200 sq ft"
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-budget">Estimated budget</label>
          <select
            id="quote-budget"
            name="budget"
            value={values.budget}
            onChange={handleChange}
          >
            <option>Below ₹50L</option>
            <option>₹50L - ₹1Cr</option>
            <option>₹1Cr - ₹2Cr</option>
            <option>₹2Cr and above</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-message">Project brief</label>
          <textarea
            id="quote-message"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Share the site size, design goals, or timeline expectations."
            required
          />
        </div>

        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Request Estimate"}
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
          Demo frontend access values are hardcoded in the browser bundle to
          match the requested SQLite setup.
        </p>
      </form>
    </section>
  );
}
