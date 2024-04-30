import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href={"/admin"} className="text-2xl font-bold">
        <span className="text-white">B</span>logui
        <span className="text-white">FY</span>
      </Link>
    </div>
  );
}
