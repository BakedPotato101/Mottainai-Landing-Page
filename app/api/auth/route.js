import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const res = await fetch("http://localhost:5000/api/merchants/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { message: data.message || "Login failed" },
      { status: res.status }
    );
  }

  const response = NextResponse.json({ success: true });

  // Store token in httpOnly cookie
  response.cookies.set("merchant_token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}
