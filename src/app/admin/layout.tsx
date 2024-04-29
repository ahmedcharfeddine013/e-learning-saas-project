import Logo from "@/components/Logo";
import Nav from "../../components/Nav";
import { NavLink } from "../../components/Nav";

export const dynamic = "force-dynamic";
export default function InstructorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav>
          <Logo />
          <div className="flex items-center">
            <NavLink href={"/admin/users"}>Users</NavLink>
            <NavLink href={"admin/blogs"}>Blogs</NavLink>
          </div>
        </Nav>
        {children}
      </body>
    </html>
  );
}
