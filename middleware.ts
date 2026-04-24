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
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)"
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isStaffRoute = createRouteMatcher(["/staff(.*)"]);

export default clerkMiddleware((auth, req) => {
  // 1. Skip check for public routes
  if (isPublicRoute(req)) return;

  // 2. Protect protected routes
  const { sessionClaims } = auth().protect();
  
  // 3. Role-based logic
  const role = (sessionClaims?.metadata as any)?.role || "CLIENT";
  const { pathname } = req.nextUrl;

  if (isAdminRoute(req) && role !== "ADMIN" && role !== "SUPER_ADMIN") {
    return Response.redirect(new URL("/", req.url));
  }

  if (isStaffRoute(req) && role !== "STAFF" && role !== "ADMIN" && role !== "SUPER_ADMIN") {
    return Response.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
