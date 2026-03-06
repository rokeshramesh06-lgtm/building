export type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type QuoteSubmission = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  builtUpArea: string;
  budget: string;
  message: string;
};

type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; message: string };

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[0-9+\-()\s]{7,20}$/.test(phone);
}

export function validateContactSubmission(
  payload: unknown,
): ValidationResult<ContactSubmission> {
  const record = (payload ?? {}) as Record<string, unknown>;
  const name = normalizeText(record.name);
  const phone = normalizeText(record.phone);
  const email = normalizeText(record.email).toLowerCase();
  const message = normalizeText(record.message);

  if (!name || !phone || !email || !message) {
    return { ok: false, message: "All contact form fields are required." };
  }

  if (!isValidPhone(phone)) {
    return { ok: false, message: "Enter a valid phone number." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, message: "Enter a valid email address." };
  }

  return {
    ok: true,
    data: {
      name: name.slice(0, 80),
      phone: phone.slice(0, 24),
      email: email.slice(0, 120),
      message: message.slice(0, 1200),
    },
  };
}

export function validateQuoteSubmission(
  payload: unknown,
): ValidationResult<QuoteSubmission> {
  const record = (payload ?? {}) as Record<string, unknown>;
  const name = normalizeText(record.name);
  const phone = normalizeText(record.phone);
  const email = normalizeText(record.email).toLowerCase();
  const projectType = normalizeText(record.projectType);
  const location = normalizeText(record.location);
  const builtUpArea = normalizeText(record.builtUpArea);
  const budget = normalizeText(record.budget);
  const message = normalizeText(record.message);

  if (
    !name ||
    !phone ||
    !email ||
    !projectType ||
    !location ||
    !builtUpArea ||
    !budget ||
    !message
  ) {
    return { ok: false, message: "All quotation request fields are required." };
  }

  if (!isValidPhone(phone)) {
    return { ok: false, message: "Enter a valid phone number." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, message: "Enter a valid email address." };
  }

  return {
    ok: true,
    data: {
      name: name.slice(0, 80),
      phone: phone.slice(0, 24),
      email: email.slice(0, 120),
      projectType: projectType.slice(0, 80),
      location: location.slice(0, 160),
      builtUpArea: builtUpArea.slice(0, 80),
      budget: budget.slice(0, 40),
      message: message.slice(0, 1200),
    },
  };
}
