// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const pathname = req.nextUrl.pathname;

  // If user IS logged in and tries to access /login
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //common routes that require login (like pyqs,tutorials etc..)
  const isCommonPath =
    pathname.includes("/pyqs") ||
    pathname.includes("/tutorials") ||
    pathname.includes("/assignments");

  // EXtra buttons that require profile completion + login(like sheets solutions,mannuals etc..)
  const isExtraPath =
    pathname.includes("-sol") || pathname.includes("ws-manual");

  const isProfilePage = pathname === "/profile";
  const isSetProfilePage = pathname === "/profile/setProfile";

  // EXTRA CONTENT RULE
  if (isExtraPath) {
    // Not logged in
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Logged in but profile incomplete
    if (!token.profileCompleted) {
      return NextResponse.redirect(new URL("/profile/setProfile", req.url));
    }
  }

  // COMMON CONTENT RULE
  if (isCommonPath) {
    if (!token) {
      console.log("Redirecting to login from common path:", pathname);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Profile pages → login required
  if ((isProfilePage || isSetProfilePage) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Prevent profile setup access after completion
  if (isSetProfilePage && token?.profileCompleted) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 3️⃣ Otherwise allow
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};

// --------------What i learned -----------

// 1. Middleware runs before the request is processed.
// 2. We cannot use getServerSession here directly.
// 3. String path matching using includes(ex., '-sol') for route protection.
