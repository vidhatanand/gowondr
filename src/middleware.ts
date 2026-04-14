import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STAGING_USER = "gopondr";
const STAGING_PASS = "stage2026";

export function middleware(request: NextRequest) {
  // Only protect staging — check the hostname
  const hostname = request.headers.get("host") || "";
  const isStaging = hostname.includes("stage");

  if (!isStaging) {
    return NextResponse.next();
  }

  // Check basic auth
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === STAGING_USER && pass === STAGING_PASS) {
        return NextResponse.next();
      }
    }
  }

  // No auth or wrong credentials — prompt for login
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="goPondr Staging"',
    },
  });
}

export const config = {
  matcher: [
    // Protect all routes except static assets
    "/((?!_next/static|_next/image|favicon.ico|images/|footer-bg|.well-known|llms.txt).*)",
  ],
};
