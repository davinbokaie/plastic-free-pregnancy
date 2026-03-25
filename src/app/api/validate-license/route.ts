import { NextResponse } from "next/server";

const PAYHIP_VERIFY_URL = "https://payhip.com/api/v1/license/verify";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { valid: false, error: "Invalid license key" },
      { status: 400 }
    );
  }

  const licenseKey =
    typeof body === "object" &&
    body !== null &&
    "licenseKey" in body &&
    typeof (body as { licenseKey: unknown }).licenseKey === "string"
      ? (body as { licenseKey: string }).licenseKey.trim()
      : "";

  if (!licenseKey) {
    return NextResponse.json(
      { valid: false, error: "Invalid license key" },
      { status: 400 }
    );
  }

  const apiKey = process.env.PAYHIP_API_KEY;
  const productLink = process.env.PAYHIP_PRODUCT_LINK;

  if (!apiKey || !productLink) {
    const ok = licenseKey.length >= 10;
    if (ok) {
      return NextResponse.json({ valid: true });
    }
    return NextResponse.json({ valid: false, error: "Invalid license key" });
  }

  // Payhip documents GET with query params and payhip-api-key header (v1).
  const url = new URL(PAYHIP_VERIFY_URL);
  url.searchParams.set("product_link", productLink);
  url.searchParams.set("license_key", licenseKey);

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "payhip-api-key": apiKey,
      },
      cache: "no-store",
    });

    const text = await res.text();
    let data: unknown = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }

    const record =
      data &&
      typeof data === "object" &&
      data !== null &&
      "data" in data &&
      (data as { data: unknown }).data &&
      typeof (data as { data: unknown }).data === "object"
        ? (data as { data: Record<string, unknown> }).data
        : null;

    const enabled = record?.enabled === true;

    if (res.ok && enabled) {
      return NextResponse.json({ valid: true });
    }

    return NextResponse.json({ valid: false, error: "Invalid license key" });
  } catch {
    return NextResponse.json(
      { valid: false, error: "Invalid license key" },
      { status: 502 }
    );
  }
}
