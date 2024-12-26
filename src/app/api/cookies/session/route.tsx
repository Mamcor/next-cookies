import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { cookieName, cookieValue } = await request.json();

  const response = NextResponse.json({ message: "Cookies Session Created" });

  response.cookies.set(cookieName, cookieValue, {
    path: "/",
  });

  return response;
}
