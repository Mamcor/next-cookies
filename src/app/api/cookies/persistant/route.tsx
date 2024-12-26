import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { cookieName, cookieValue } = await request.json();

  const response = NextResponse.json({ message: "Cookies Persistant Created" });

  response.cookies.set(cookieName, cookieValue, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
