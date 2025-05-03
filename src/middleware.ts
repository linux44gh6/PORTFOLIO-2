export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"], // add more protected routes as needed
};
