import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true"
  const { pathname } = request.nextUrl

  // Exclude static assets, public files, and Next.js internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|pdf|ico)$/)
  ) {
    return NextResponse.next()
  }

  // If maintenance mode is ENABLED
  if (isMaintenanceMode) {
    if (pathname !== "/maintenance") {
      const url = request.nextUrl.clone()
      url.pathname = "/maintenance"
      const response = NextResponse.rewrite(url, { status: 503 })
      response.headers.set("Retry-After", "3600") // 1 hour for SEO crawlers
      return response
    }
  } else {
    // If maintenance mode is DISABLED, prevent direct access to /maintenance page
    if (pathname === "/maintenance") {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
