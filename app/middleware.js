import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("merchant_token");

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
