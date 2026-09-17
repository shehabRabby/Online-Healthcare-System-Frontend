import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logo from "@/assets/svg/Logo";
const routes = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
];

const Header = () => {
  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-2">
              <Logo></Logo>
              <span> HealthCare</span>
            </div>
          </Link>
        </div>
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>
        <div>
          <Button
            render={<Link href="/login">Login</Link>}
            nativeButton={false}
          >
            login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
