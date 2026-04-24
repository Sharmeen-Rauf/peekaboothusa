import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/pricing",
    "/gallery",
    "/events",
    "/weddings",
    "/brand-corporate",
    "/parties",
    "/open-air-photo-booth-rental",
    "/360-photo-booth-rental",
    "/vogue-magazine-photo-booth-box",
    "/digital-photo-booth-rental",
    "/ai-studio",
    "/get-a-quote",
    "/terms-and-conditions",
    "/privacy-policy",
    "/api/webhooks(.*)"
  ],
  afterAuth(auth, req) {
    // Handle users who aren't logged in
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/sign-in", req.url);
      return Response.redirect(signInUrl);
    }

    // Role-based protection
    const role = (auth.sessionClaims?.metadata as any)?.role || "CLIENT";
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/admin") && role !== "ADMIN" && role !== "SUPER_ADMIN") {
      return Response.redirect(new URL("/", req.url));
    }

    if (pathname.startsWith("/staff") && role !== "STAFF" && role !== "ADMIN" && role !== "SUPER_ADMIN") {
      return Response.redirect(new URL("/", req.url));
    }
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
