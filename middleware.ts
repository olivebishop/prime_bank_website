import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks/clerk'
]);

const isAdminRoute = createRouteMatcher([
  '/admin(.*)'
]);

const isDashboardRoute = createRouteMatcher([
  '/dashboard(.*)'
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  
  // Protect all routes except public ones
  if (!isPublicRoute(request)) {
    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }
  
  // For admin routes, we'll check the role in the page component
  // since we need to query the database
  if (isAdminRoute(request) && !userId) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  
  // For dashboard routes, ensure user is authenticated
  if (isDashboardRoute(request) && !userId) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};