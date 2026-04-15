import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STAGING_USER = "gopondr";
const STAGING_PASS = "stage2026";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;
  const isLocalhost = hostname.includes("localhost") || hostname.includes("127.0.0.1");
  const isStaging = hostname.includes("stage");

  // Block /design-system routes on anything that isn't localhost — show 404
  if (pathname.startsWith("/design-system") && !isLocalhost) {
    const url = request.nextUrl.clone();
    url.pathname = "/_not-found";
    return NextResponse.rewrite(url, { status: 404 });
  }

  // Staging basic auth
  if (isStaging) {
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
        "WWW-Authenticate": 'Basic realm="goPondr Staging"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|footer-bg|.well-known|llms.txt).*)",
  ],
};
