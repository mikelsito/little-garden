"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Little Garden
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/" 
              className={`py-4 px-2 ${pathname === '/' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`py-4 px-2 ${pathname === '/about' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`py-4 px-2 ${pathname === '/projects' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Projects
            </Link>
            <Link 
              href="/services" 
              className={`py-4 px-2 ${pathname === '/services' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={`py-4 px-2 ${pathname === '/contact' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>


        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/projects' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Projects
          </Link>
          <Link 
            href="/services" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/services' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}
