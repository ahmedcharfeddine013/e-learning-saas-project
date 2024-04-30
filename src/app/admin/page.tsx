import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import React from "react";
import PageHeader from "./_components/PageHeader";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@prisma/client";
import Link from "next/link";

async function getUsers() {
  return db.user.count();
}

async function getBlogs() {
  return db.blog.count();
}

// async function getRecentUsers() {
//   return db.user.findMany({
//     orderBy: { createdAt: "desc" },
//     take: 6,
//   });
// }

async function getRecentBlogs() {
  return db.blog.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });
}

export default async function AdminHomePage() {
  const userCount = await getUsers();
  const blogsCount = await getBlogs();
  return (
    <div className="space-y-10">
      <PageHeader>Dashboard</PageHeader>
      <div className="grid grid-cols-2 gap-4 ">
        <DashboardCard
          title="Users"
          description=""
          body={userCount.toString()}
        />
        <DashboardCard
          title="Blogs"
          description=""
          body={blogsCount.toString()}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ResentUsersTable />
        <ResentBlogsTable />
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  description: string;
  body: string;
}

function DashboardCard({ title, description, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
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

async function ResentBlogsTable() {
  const blogs = await db.blog.findMany({
    select: {
      id: true,
      title: true,
      user: true,
    },
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  if (blogs.length === 0) return <p>No blogs found</p>;

  return (
    <div>
      <TableCaption>A list of your recent Users </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Published By</TableHead>
        </TableRow>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <Link href={`/admin/blogs/${blog.id}`}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.user.name}</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </TableHeader>
    </div>
  );
}
