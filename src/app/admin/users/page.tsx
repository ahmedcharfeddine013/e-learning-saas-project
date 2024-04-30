import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import React from "react";
import PageHeader from "../_components/PageHeader";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div className="space-y-5">
      <PageHeader>Users</PageHeader>
      <ResentUsersTable />
    </div>
  );
}

async function ResentUsersTable() {
  const users = await db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    // orderBy: { createdAt: "desc" },
    take: 6,
  });

  if (users.length === 0) return <p>No Users found</p>;

  return (
    <div>
      <TableCaption>A list of your recent Users </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <Link href={`/admin/users/${user.id}`}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </TableHeader>
    </div>
  );
}
