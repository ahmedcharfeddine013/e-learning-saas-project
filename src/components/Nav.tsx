"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode } from "react";

export default function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="w-full bg-secondary flex px-10 text-primary gap-4 items-center justify-between fixed">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <div
      className={`link relative p-4 ${pathname == props.href && "bg-background"}`}
    >
      <Link {...props} />
      <span
        className={`absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-30`}
      ></span>
    </div>
  );
}
