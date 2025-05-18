import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    // Protect /dashboard for admins only
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      if (token?.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Match routes
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
