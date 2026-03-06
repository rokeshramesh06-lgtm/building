import { NextResponse } from "next/server";
import { insertQuoteSubmission } from "@/lib/db";
import { publicDbConfig } from "@/lib/public-db-config";
import { validateQuoteSubmission } from "@/lib/validators";

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
    const validated = validateQuoteSubmission(payload);

    if (!validated.ok) {
      return NextResponse.json(
        { message: validated.message },
        { status: 400 },
      );
    }

    insertQuoteSubmission(validated.data);

    return NextResponse.json(
      { message: "Quotation request received. We will contact you shortly." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Quotation submission failed", error);

    return NextResponse.json(
      { message: "Unable to save your quotation request right now." },
      { status: 500 },
    );
  }
}
