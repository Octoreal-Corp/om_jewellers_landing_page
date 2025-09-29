import Link from "next/link";
import React from "react";
import Logo from "../ui/logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        {/* Left Section - Logo and Navigation */}
        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>

          {/* Navigation below logo */}
          <nav className="flex flex-col gap-3 text-gray-700 md:flex-row md:gap-6">
            <Link
              href="#jewelry"
              className="font-gilda-display hover:underline"
            >
              Collections
            </Link>
            <Link
              href="#message"
              className="font-gilda-display hover:underline"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="font-gilda-display hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Right Section - Subscribe */}
        {/* <div className="w-full md:max-w-sm">
          <h3 className="font-gilda-display mb-3 font-medium text-gray-900">
            Subscribe
          </h3>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="font-gilda-display w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            />
            <Button
              type="submit"
              className="font-gilda-display cursor-pointer rounded-md bg-[#F2ECDF] px-5 py-2 font-medium transition-colors hover:bg-gray-200"
            >
              Send
            </Button>
          </form>
          <p className="font-gilda-display mt-2 text-sm text-gray-600">
            Subscribe to receive exclusive jewellery updates and offers on
            WhatsApp
          </p>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 text-sm md:items-center lg:flex-row">
        <div className="flex gap-6">
          <a href="#" className="font-gilda-display hover:underline">
            Privacy policy
          </a>
          <a href="#" className="font-gilda-display hover:underline">
            Terms of service
          </a>
        </div>
        <div>
          <span>
            © 2025 Om Jewellers. All rights reserved. Contact no. 9753392000
          </span>
          <span className="ml-4">Powered by Manish Parekh</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
