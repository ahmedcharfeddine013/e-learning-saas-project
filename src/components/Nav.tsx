import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

export default function Nav({ children }: { children: ReactNode }) {
  return <nav>{children}</nav>;
}

export function NavLink({ children }: { children: LinkProps }) {
  return <Link {...children} />;
}
