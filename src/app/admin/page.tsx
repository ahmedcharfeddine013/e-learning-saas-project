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

async function getUsers() {
  return db.user.count();
}

async function getBlogs() {
  return db.blog.count();
}

async function getRecentUsers() {
  return db.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });
}

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
      <div></div>
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

function ResentDashboardCard() {
  return <div>
    
  </div>;
}
