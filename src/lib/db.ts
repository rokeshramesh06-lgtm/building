import "server-only";

import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { ContactSubmission, QuoteSubmission } from "@/lib/validators";

const DATABASE_DIRECTORY = join(process.cwd(), "data");
const DATABASE_PATH = join(DATABASE_DIRECTORY, "building-site.sqlite");

let database: DatabaseSync | null = null;

function getDatabase() {
  if (database) {
    return database;
  }

  mkdirSync(DATABASE_DIRECTORY, { recursive: true });

  const instance = new DatabaseSync(DATABASE_PATH);
  instance.exec(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS contact_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS quotation_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      project_type TEXT NOT NULL,
      location TEXT NOT NULL,
      built_up_area TEXT NOT NULL,
      budget TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  database = instance;
  return instance;
}

export function insertContactSubmission(payload: ContactSubmission) {
  const statement = getDatabase().prepare(`
    INSERT INTO contact_requests (name, phone, email, message)
    VALUES (?, ?, ?, ?)
  `);

  statement.run(payload.name, payload.phone, payload.email, payload.message);
}

export function insertQuoteSubmission(payload: QuoteSubmission) {
  const statement = getDatabase().prepare(`
    INSERT INTO quotation_requests (
      name,
      phone,
      email,
      project_type,
      location,
      built_up_area,
      budget,
      message
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  statement.run(
    payload.name,
    payload.phone,
    payload.email,
    payload.projectType,
    payload.location,
    payload.builtUpArea,
    payload.budget,
    payload.message,
  );
}
