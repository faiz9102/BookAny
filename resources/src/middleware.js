import { NextResponse } from "next/server";
import createSession from "./lib/createSession";
import { CookieVerifier } from "./lib/CookieVerifier";
import { CsrfTokenGenerator, VerifyCsrfToken } from "./lib/CsrfToken";

export async function middleware(req) {
  if (!req.nextUrl.pathname.includes("/api")) {
    const hasSession = req.cookies.get("_session_pad");
    const crsfToken = req.cookies.get("_crsf_token");
    if (hasSession && crsfToken) {
      return NextResponse.next();
    } else {
      const response = NextResponse.next();
      const sessionID = await createSession(response);
      await CsrfTokenGenerator(sessionID, response);
      return response;
    }
  } else {
    const reqToken = req.cookies.get("_session_pad");
    const crsfToken = req.headers.get("x-csrf-token");
    if (reqToken && crsfToken) {
      const isVerified = await CookieVerifier(reqToken.value);
      const isCRSFverified = await VerifyCsrfToken(crsfToken, isVerified);
      if (isVerified && isCRSFverified) {
        return NextResponse.next();
      } else {
        return NextResponse.json(
          { message: "Not Authorized" },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json({ message: "Not Authorized" }, { status: 401 });
    }
  }
}

export const config = {
  matcher: ["/", "/((?!login).*)"],
};
