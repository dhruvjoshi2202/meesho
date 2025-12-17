"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Full width responsive padding */}
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/meeshoLogo.svg"
                alt="Meesho"
                width={150}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Search Bar (Desktop Only) */}
          <div className="hidden md:flex flex-1 max-w-md mx-2 lg:mx-4">
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Right Menu (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            <Link
              href="/supplier"
              className="hover:text-pink-500 border-r border-gray-300 pr-4"
            >
              Become a Supplier
            </Link>

            <Link
              href="/investor"
              className="hover:text-pink-500 border-r border-gray-300 pr-4"
            >
              Investor Relations
            </Link>

            {/* Profile (Icon Above Text) */}
            <Link
              href="/profile"
              className="hover:text-pink-500 flex flex-col items-center border-r border-gray-300 pr-4"
            >
              <FaUser className="text-lg mb-1" />
              <span>Profile</span>
            </Link>

            {/* Cart (Icon Above Text + Badge) */}
            <Link
              href="/cart"
              className="hover:text-pink-500 flex flex-col items-center relative"
            >
              <div className="relative">
                <FaShoppingCart className="text-lg mb-1" />
                <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs rounded-full px-1">
                  0
                </span>
              </div>
              <span>Cart</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-2 space-y-2 bg-white border-t">
            {/* Mobile Search */}
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm"
              />
            </div>

            <Link href="/supplier" className="block px-3 py-2 text-gray-700 hover:text-pink-500">
              Become a Supplier
            </Link>
            <Link href="/investor" className="block px-3 py-2 text-gray-700 hover:text-pink-500">
              Investor Relations
            </Link>

            {/* Profile */}
            <Link href="/profile" className="flex flex-col items-center px-3 py-2 text-gray-700 hover:text-pink-500">
              <FaUser className="text-lg mb-1" />
              <span>Profile</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="flex flex-col items-center px-3 py-2 text-gray-700 hover:text-pink-500">
              <div className="relative">
                <FaShoppingCart className="text-lg mb-1" />
                <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs rounded-full px-1">
                  0
                </span>
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
