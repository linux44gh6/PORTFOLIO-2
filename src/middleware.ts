/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./services";

const authRoutes = ["/login", "/register"];
const adminOnlyRoutes = ["/admin", "/dashboard"]; // add dashboard or admin routes here

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getUser();

  // User not logged in
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirectPath=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  // User is logged in, check admin-only access
  if (adminOnlyRoutes.some(route => pathname.startsWith(route))) {
    if ((userInfo as any)?.role !== "admin") {
      // Redirect non-admin users trying to access admin routes to some page, e.g. home or unauthorized
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Allow everything else
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/user/:path*",
    "/admin/:path*",
    "/dashboard/:path*",
    "/all-product/:path*",
    "/checkout",
  ],
};
