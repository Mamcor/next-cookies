import { NextResponse } from "next/server";

export async function DELETE() {
  const response = NextResponse.json({ message: "Cookies Deleted" });
  response.cookies.delete("CookiePersistantName");
  response.cookies.delete("CookieSessionName");
  return response;
}
