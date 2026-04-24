import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
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
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isStaffRoute = createRouteMatcher(["/staff(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId, sessionClaims } = auth();

  // 1. Protect non-public routes
  if (!userId && !isPublicRoute(req)) {
    return auth().protect();
  }

  // 2. If signed in, check roles for specific paths
  if (userId) {
    const role = (sessionClaims?.metadata as any)?.role || "CLIENT";
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
