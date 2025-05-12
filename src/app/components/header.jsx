"use client";

import {  useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenu = (category) => {
    setOpenSubmenu(openSubmenu === category ? null : category);
  };
 

  const navItems = [
    {
      title: "Ready-to-Wear",
      submenu: [
        { title: "Tops", href: "/ready-to-wear/tops" },
        { title: "Bottoms", href: "/ready-to-wear/bottoms" },
        { title: "Dresses", href: "/ready-to-wear/dresses" },
      ],
    },
    {
      title: "Accessories",
      submenu: [
        { title: "Bags", href: "/accessories/bags" },
        { title: "Jewellery", href: "/accessories/jewellery" },
        { title: "Shoes", href: "/accessories/shoes" },
      ],
    },
    {
      title: "Discover",
      submenu: [
        { title: "Our Story", href: "/discover/our-story" },
        { title: "Sustainability", href: "/discover/sustainability" },
        { title: "Campaigns", href: "/discover/campaigns" },
      ],
    },
  ];

  return (
    <div>
      {/* Top banner */}
      <div className="w-full bg-[#a6215c] text-right py-1 px-4 text-sm text-white">
        Free shipping to India on all orders
      </div>

      {/* Navigation */}
      <header  className="w-full bg-white border-b border-gray-200 relative">
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
                  <ul className="absolute top-full left-0 bg-white shadow-md mt-2 py-2 w-52 z-20">
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
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <div className="font-serif text-2xl italic text-gray-800">
                <Image src="/logo.png" alt="Logo" width={100} height={50} />
              </div>
            </Link>
          </div>

          {/* Right navigation (Desktop) */}
          <nav className="hidden md:flex space-x-6 items-center">
            <button className="text-gray-800 hover:text-gray-600">
              Search
            </button>
            <button className="text-gray-800 hover:text-gray-600">
              Customer Care
            </button>
            <button className="text-gray-800 hover:text-gray-600">
              Sign In
            </button>
            <button className="text-gray-800 hover:text-gray-600">Bag</button>
          </nav>

          {/* Right icons (Mobile) */}
          <div className="flex md:hidden space-x-4">
            <button className="text-gray-800">Search</button>
            <button className="text-gray-800">Bag</button>
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
              <button className="block text-gray-800">Bag</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
