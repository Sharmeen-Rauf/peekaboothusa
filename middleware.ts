import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

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
  if (!isPublicRoute(req)) {
    auth().protect();
  }

  const role = (auth().sessionClaims?.metadata as any)?.role || "CLIENT";

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
