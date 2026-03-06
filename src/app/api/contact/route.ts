import { NextResponse } from "next/server";
import { insertContactSubmission } from "@/lib/db";
import { publicDbConfig } from "@/lib/public-db-config";
import { validateContactSubmission } from "@/lib/validators";

export const runtime = "nodejs";

function hasValidFrontendCredentials(request: Request) {
  return (
    request.headers.get("x-db-user") === publicDbConfig.username &&
    request.headers.get("x-db-password") === publicDbConfig.password
  );
}

export async function POST(request: Request) {
  if (!hasValidFrontendCredentials(request)) {
    return NextResponse.json(
      { message: "Invalid frontend database access values." },
      { status: 401 },
    );
  }

  try {
    const payload = await request.json();
    const validated = validateContactSubmission(payload);

    if (!validated.ok) {
      return NextResponse.json(
        { message: validated.message },
        { status: 400 },
      );
    }

    insertContactSubmission(validated.data);

    return NextResponse.json(
      { message: "Thanks. Your message has been received." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact submission failed", error);

    return NextResponse.json(
      { message: "Unable to save your message right now." },
      { status: 500 },
    );
  }
}
