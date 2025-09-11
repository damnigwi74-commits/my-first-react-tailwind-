import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Define your nav items here (easy to add/remove)
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/tours", label: "Tours" },
    { path: "/problems", label: "Problems" }, // 👈 new tab
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">DK Touring</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

/*
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">DK Touring</h1>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
  */
