"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { cartItems } = useCart();

  const handleSubmenu = (category) => {
    setOpenSubmenu(openSubmenu === category ? null : category);
  };

  const navItems = [
    {
      title: "Proteins",
      submenu: [
        { title: "Whey Protein", href: "/product" },
        { title: "Mass Gainers", href: "/product" },
        { title: "Protein Bars", href: "/product" },
      ],
    },
    {
      title: "Performance",
      submenu: [
        { title: "Pre-Workout", href: "/product" },
        { title: "BCAAs", href: "/product" },
        { title: "Creatine", href: "/product" },
      ],
    },
    {
      title: "Wellness",
      submenu: [
        { title: "Vitamins", href: "/product" },
        { title: "Fish Oil", href: "/product" },
        { title: "Health Drinks", href: "/product" },
      ],
    },
  ];

  return (
    <div>
          
      <div className="w-full  fixed top-0 z-50 bg-[#a6215c] text-right py-1 px-4 text-sm text-white">
        Free shipping on orders above ₹999
      </div>

      {/* Navigation */}
      <header className="w-full bg-white border-b  fixed top-7 z-40  border-gray-200 ">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4 relative">
          {/* Left navigation (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleSubmenu(item.title)}
              >
                <button className="text-gray-800 hover:text-gray-600">
                  {item.title}
                </button>

                {/* Submenu */}
                {openSubmenu === item.title && (
                  <ul className="absolute top-full left-0 bg-white rounded-lg shadow-md  py-2 w-72   z-20">
                    {item.submenu.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* Logo (centered) */}
          <div className="absolute left-1/2 px-6 lg:px-0 transform -translate-x-1/2">
            <Link href="/">
              <div className="font-serif text-2xl italic text-gray-800">
                <Image src="/logo.png" alt="Logo" width={100} height={50} />
              </div>
            </Link>
          </div>

          {/* Right navigation (Desktop) */}
          <nav className="hidden md:flex space-x-6   items-center ">
            <button className="text-gray-800  hover:text-gray-600">
              Search
            </button>
            <button className="text-gray-800 hover:text-gray-600">
              Customer Care
            </button>
            <button className="text-gray-800 hover:text-gray-600">
              Sign In
            </button>{" "}
            <Link href="/cart" className="text-gray-800 hover:text-gray-600">
              Cart {cartItems?.length > 0 && `(${cartItems.length})`}
            </Link>
          </nav>

          {/* Right icons (Mobile) */}
          <div className="flex md:hidden items-center space-x-0 lg:space-x-6">
            {/* <FaSearch className="text-gray-800 ">Search</FaSearch> */}
            <Link href="/cart" className="text-gray-800 ">
              Cart {cartItems?.length > 0 && `(${cartItems.length})`}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 py-4 border-t bg-white space-y-4">
            {navItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => handleSubmenu(item.title)}
                  className="w-full text-left text-gray-800 font-medium"
                >
                  {item.title}
                </button>
                {/* Submenu */}
                {openSubmenu === item.title && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="block text-gray-700 py-1 hover:text-gray-900"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="pt-4 border-t space-y-2">
              <button className="block text-gray-800">Customer Care</button>
              <button className="block text-gray-800">Sign In</button>

              <Link href="/cart" className="block text-gray-800">
                {" "}
                Cart
                {cartItems.length > 0 && `(${cartItems.length})`}
              </Link>
              <FaSearch className="text-gray-800 ">Search</FaSearch>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
