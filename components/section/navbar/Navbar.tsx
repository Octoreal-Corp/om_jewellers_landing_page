import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import React from "react";
import ClientMenuWrapper from "./Client-menu-wrapper";

const Navbar = () => {
  const navMenu = [
    { text: "Collections", href: "#" },
    { text: "Gallery", href: "#" },
  ];

  return (
    <nav
      id="navbar"
      className="bg-background z-50 flex h-[72px] w-full items-center-safe justify-center-safe pr-3 pl-5 md:px-16"
      aria-label="Main navigation"
    >
      <div className="flex w-full max-w-[1536px] items-center justify-between">
        <div className="z-60 flex items-center">
          <Link href="/" aria-label="Om Jewellers - Back to homepage">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-8">
          {/* desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8" role="list">
            {navMenu.map((item, index) => (
              <div key={index} role="listitem">
                <Link
                  href={item.href}
                  className="transition-all duration-900 hover:underline hover:underline-offset-4"
                  aria-label={`Go to ${item.text} section`}
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href={"#contact"} aria-label="">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>

        {/* mobile menu */}
        <ClientMenuWrapper />
      </div>
    </nav>
  );
};

export default Navbar;
