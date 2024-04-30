// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { AuthOptions, Session } from "next-auth";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import db from "@/db/db";

// export const authOptions: AuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   adapter: PrismaAdapter(db),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       profile(profile) {
//         return {
//           id: profile.sub,
//           name: `${profile.given_name} ${profile.family_name}`,
//           email: profile.email,
//           image: profile.picture,
//           role: profile.role ? profile.role : "user",
//         };
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },
//     async session({ session, token }) {
//       // Perform null check before accessing session.user
//       if (session && token && token.role) {
//         // Create a new session user object with the role property
//         const newUser = {
//           ...(session.user || {}),
//           role: token.role,
//         };
//         // Assign the new session user object to session.user
//         session.user = newUser;
//       }
//       return session;
//     },
//   },

//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error", // Error code passed in query string as ?error=
//     verifyRequest: "/auth/verify-request", // (used for check email message)
//     newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
//   },

// };
