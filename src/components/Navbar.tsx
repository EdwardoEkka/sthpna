import React, { useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredSubDropdown, setHoveredSubDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Students",
      dropdown: [
        { name: "M.Tech", href: "/students/mtech" },
        {
          name: "B.Tech",
          subDropdown: [
            { name: "2025", href: "/students/btech/2025" },
            { name: "2026", href: "/students/btech/2026" },
            { name: "2027", href: "/students/btech/2027" },
            { name: "2028", href: "/students/btech/2028" },
          ],
        },
        { name: "PhD", href: "/students/phd" },
        { name: "LEAD", href: "/students/lead" },
      ],
    },
    { name: "Faculty", href: "/faculty" },
    { name: "About", href: "/about" },
    { name: "Sthapna", href: "/sthapna" },
  ];

  return (
    <nav className="bg-secondary/95 text-white w-full shadow-lg backdrop-blur-sm relative z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* 🔹 Logo and Department Info */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Civil Logo" className="w-16" />
            <div className="leading-tight">
              <span className="block font-bold uppercase text-sm sm:text-base">
                DEPARTMENT OF CIVIL ENGINEERING
              </span>
              <span className="block text-sm">VSSUT, BURLA</span>
            </div>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* 🔹 Desktop Navigation */}
        <div className="hidden md:flex space-x-6 justify-end">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredDropdown(item.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase hover:text-primary">
                  {item.name} <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown Menu (Visible on Hover) */}
                {hoveredDropdown === item.name && (
                  <div className="absolute left-0  bg-white text-black shadow-md rounded-md w-48">
                    {item.dropdown.map((subItem) =>
                      subItem.subDropdown ? (
                        <div
                          key={subItem.name}
                          className="relative"
                          onMouseEnter={() => setHoveredSubDropdown(subItem.name)}
                          onMouseLeave={() => setHoveredSubDropdown(null)}
                        >
                          <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-gray-200">
                            {subItem.name} <ChevronRight className="w-4 h-4" />
                          </button>
                          {/* Sub-dropdown for B.Tech Years */}
                          {hoveredSubDropdown === subItem.name && (
                            <div className="absolute left-full top-0 ml-1 bg-white text-black shadow-md rounded-md w-40">
                              {subItem.subDropdown.map((year) => (
                                <a
                                  key={year.name}
                                  href={year.href}
                                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                                >
                                  {year.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          {subItem.name}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>

      {/* 🔹 Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button className="flex justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary">
                    {item.name} <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Mobile Dropdown Menu */}
                  <div className="ml-4 border-l border-gray-600">
                    {item.dropdown.map((subItem) =>
                      subItem.subDropdown ? (
                        <div key={subItem.name}>
                          <button className="flex justify-between w-full px-4 py-2 text-sm hover:bg-gray-200">
                            {subItem.name} <ChevronRight className="w-4 h-4" />
                          </button>
                          {/* Sub-dropdown for B.Tech Years */}
                          <div className="ml-6 border-l border-gray-600">
                            {subItem.subDropdown.map((year) => (
                              <a
                                key={year.name}
                                href={year.href}
                                className="block px-4 py-2 text-sm hover:bg-gray-800"
                              >
                                {year.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-800"
                        >
                          {subItem.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
