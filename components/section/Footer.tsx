import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Logo from "../ui/logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        {/* Left Section - Logo and Navigation */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>

          {/* Navigation below logo */}
          <nav className="flex flex-col gap-3 md:flex-row md:gap-6">
            <Link href="#jewelry" className="hover:underline">
              Collections
            </Link>
            <Link href="#message" className="hover:underline">
              Gallery
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right Section - Subscribe */}
        <div className="w-full md:max-w-sm">
          <h3 className="mb-3">Subscribe</h3>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            />
            <Button
              type="submit"
              className="text-foreground cursor-pointer rounded-md bg-[#F2ECDF] px-5 py-2 font-medium transition-colors hover:bg-gray-200"
            >
              Send
            </Button>
          </form>
          <p className="mt-2 text-sm text-gray-600">
            Subscribe to receive exclusive jewellery updates and offers on
            WhatsApp
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 text-sm md:items-center lg:flex-row">
        <div className="flex">
          <span>
            Created by{" "}
            <a
              href="https://octoreal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {" "}
              Octoreal
            </a>
          </span>
        </div>
        <div>
          <span>© 2025 Om Jewellers. All rights reserved.</span>
        </div>
        <div>
          <span className="mr-4">Powered by Manish Parekh</span>
          <span>Contact no. 9753392000</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
