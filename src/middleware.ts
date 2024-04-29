import { NextRequest, NextResponse } from "next/server"
import { clerkMiddleware } from "@clerk/nextjs/server";


export async function middleware(req: NextRequest) {
  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    })
  }
}

async function isAuthenticated(req: NextRequest) {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization")

  if (authHeader == null) return false

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":")

  return (
    username === process.env.ADMIN_USERNAME && password === process.env.HASHED_ADMIN_PASSWORD
  )
}

export const adminConfig = {
  matcher: "/admin/:path*",
}


export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};