import React, { useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredBtech, setHoveredBtech] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileBtechOpen, setMobileBtechOpen] = useState<boolean>(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Faculty", href: "/faculty" },
    {
      name: "Academic",
      dropdown: [
        { name: "Achievement", href: "/academic/achievement" },
        { name: "Notes", href: "/academic/notes" },
        { name: "PYQs", href: "/academic/pyqs" },
      ],
    },
    {
      name: "Students",
      dropdown: [
        { name: "M.Tech", href: "/students/mtech" },
        {
          name: "B.Tech",
          hasSubDropdown: true,
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
    { name: "Sthapna", href: "/sthapna" },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-lg text-white w-full shadow-lg relative z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* 🔹 Logo Section */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Civil Department Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Civil Logo"
                className="w-16 h-16 object-contain"
              />
              <div className="leading-tight ml-2">
                <span className="block font-bold uppercase text-sm sm:text-base">
                  DEPARTMENT OF CIVIL ENGINEERING
                </span>
                <span className="block text-sm">VSSUT, BURLA</span>
              </div>
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

        {/* 🔹 Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 text-white absolute top-full left-0 w-full p-4 shadow-lg">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="mb-2">
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex justify-between w-full py-2 text-left"
                  >
                    {item.name} <ChevronDown className="w-4 h-4" />
                  </button>
                  {mobileDropdown === item.name && (
                    <div className="pl-4">
                      {item.dropdown.map((subItem) =>
                        subItem.hasSubDropdown ? (
                          <div key={subItem.name} className="mb-2">
                            <button
                              onClick={() => setMobileBtechOpen(!mobileBtechOpen)}
                              className="flex justify-between w-full py-2 text-left"
                            >
                              {subItem.name} <ChevronRight className="w-4 h-4" />
                            </button>
                            {mobileBtechOpen && (
                              <div className="pl-4">
                                {subItem.subDropdown.map((year) => (
                                  <a
                                    key={year.name}
                                    href={year.href}
                                    className="block py-1"
                                  >
                                    {year.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a key={subItem.name} href={subItem.href} className="block py-1">
                            {subItem.name}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a key={item.name} href={item.href} className="block py-2">
                  {item.name}
                </a>
              )
            )}
          </div>
        )}

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
                {/* Dropdown Menu */}
                {hoveredDropdown === item.name && (
                  <div className="absolute left-0 bg-white text-black shadow-md rounded-md w-48">
                    {item.dropdown.map((subItem) =>
                      subItem.hasSubDropdown ? (
                        <div
                          key={subItem.name}
                          className="relative"
                          onMouseEnter={() => setHoveredBtech(true)}
                          onMouseLeave={() => setHoveredBtech(false)}
                        >
                          <button className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-gray-200">
                            {subItem.name} <ChevronRight className="w-4 h-4" />
                          </button>
                          {hoveredBtech && (
                            <div className="absolute left-full top-0 ml-1 bg-white text-black shadow-md rounded-md w-40">
                              {subItem.subDropdown.map((year) => (
                                <a key={year.name} href={year.href} className="block px-4 py-2 text-sm hover:bg-gray-200">
                                  {year.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm hover:bg-gray-200">
                          {subItem.name}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <a key={item.name} href={item.href} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase">
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
