import Nav, { NavLink } from "@/components/Nav";


export default function InstructorLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body >
            <Nav>
                <NavLink href={'/home'}>Azeby</NavLink>
            </Nav>
            {children}</body>
      </html>
    );
  }
  