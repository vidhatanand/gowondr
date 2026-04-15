import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STAGING_USER = "gopondr";
const STAGING_PASS = "stage2026";

// This file is DELETED at prod build time by .github/workflows/deploy-prod.yml
// before `opennextjs-cloudflare build` runs, so the prod Cloudflare Worker
// ships with no middleware at all — prerendered pages are served directly
// from the asset cache without invoking the Next runtime, which is what
// keeps prod under the 10 ms Workers free-plan CPU budget (was causing
// intermittent error 1102).
//
// On staging this file is kept so the basic-auth gate below runs.
// Design-system blocking lives in app/design-system/layout.tsx via
// notFound() + NODE_ENV === "production" — so it works in both prod and
// staging builds without any middleware help.
export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
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

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="goPondr Staging (${hostname})"`,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|footer-bg|.well-known|llms.txt).*)",
  ],
};
