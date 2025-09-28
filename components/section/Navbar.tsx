'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
              <nav className="bg-white shadow-sm w-full">
        <div className=" w-full  mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer">
             <Image
              src={'/logo.png'}
              alt='logo'
              height={40}
              width={80}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Collections
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="bg-[#800000] hover:bg-red-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Gray bar below navbar */}
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 "
            onClick={toggleMobileMenu}
          ></div>
          
          {/* Menu content */}
          <div className="relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-lg mx-4 mt-20 p-6 shadow-xl">
            {/* Close button */}
            
            {/* Menu items */}
            <div className="space-y-6">
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors"
                onClick={toggleMobileMenu}
              >
                Collections
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors"
                onClick={toggleMobileMenu}
              >
                Gallery
              </a>
              <a
                href="#"
                className="inline-block bg-[#800000] hover:bg-red-900 text-white px-4 py-3 rounded-md text-lg font-medium transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;