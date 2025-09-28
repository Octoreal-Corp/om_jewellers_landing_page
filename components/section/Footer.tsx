import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        {/* Left Section - Logo and Navigation */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Image
              src={'/logo.png'}
              alt='logo'
              height={40}
              width={30}
              className='object-contain'
            />
            <Image
              src={'/logo1.png'}
              alt='logo'
              height={40}
              width={90}
              className='object-contain'
            />
          </div>
          
          {/* Navigation below logo */}
          <nav className="flex flex-col gap-3 text-gray-700 md:flex-row md:gap-6">
            <a href="#jewelry" className="font-gilda-display hover:underline">
              Collections
            </a>
            <a href="#message" className="font-gilda-display hover:underline">
              Gallery
            </a>
            <a href="#contact" className="font-gilda-display hover:underline">
              Contact
            </a>
          </nav>
        </div>

        {/* Right Section - Subscribe */}
        <div className="w-full md:max-w-sm">
          <h3 className="mb-3 font-gilda-display font-medium text-gray-900">Subscribe</h3>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none font-gilda-display"
            />
            <button
              type="submit"
              className=" cursor-pointer rounded-md bg-gray-100 px-5 py-2 font-gilda-display font-medium hover:bg-gray-200 transition-colors"
            >
              Send
            </button>
          </form>
          <p className="mt-2 text-sm text-gray-600 font-gilda-display">
            Subscribe to receive exclusive jewellery updates and offers on WhatsApp
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 md:flex-row md:items-center">
        <div className="flex gap-6">
          <a href="#" className="font-gilda-display hover:underline">
            Privacy policy
          </a>
          <a href="#" className="font-gilda-display hover:underline">
            Terms of service
          </a>
        </div>
        <p className="font-gilda-display">©2024 Om Jewellers. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;