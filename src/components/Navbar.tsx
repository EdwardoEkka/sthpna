import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Students', href: '/students' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'About', href: '/about' },
    { name: 'Sthapna', href: '/sthapna' },
  ];

  return (
    <nav className="bg-secondary text-white w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Department Info */}
          <div className="flex items-center">
            <img src="/logo.png" alt="cilvil logo" className='w-16'/>
            <div className="leading-tight">
              <span className="block font-bold uppercase text-sm sm:text-base">DEPARTMENT OF CIVIL ENGINEERING</span>
              <span className="block text-sm">VSSUT, BURLA</span>
            </div>
          </div>



          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
                  {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 justify-end">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
