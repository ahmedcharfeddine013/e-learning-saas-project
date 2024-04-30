// import React from "react";
// import type {
//   GetServerSidePropsContext,
//   InferGetServerSidePropsType,
// } from "next";
// import {  getProviders, signIn } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { useRouter } from "next/router";

// export default function SignInPage({
//   providers,
//   session,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   const router = useRouter();

//   // If the user is already authenticated, redirect to the home page
//   if (session) {
//     router.replace("/");
//     return null; // Return null to avoid rendering the sign-in page
//   }

//   return (
//     <>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   // If the user is already logged in, redirect.

//   if (session) {
//     return { redirect: { destination: "/" } };
//   }

//   const providers = await getProviders();

//   return {
//     props: { providers: providers ?? [], session },
//   };
// }
