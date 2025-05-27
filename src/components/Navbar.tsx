"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-coral-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Little Garden
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link 
              href="/" 
              className={`py-6 px-4 ${pathname === '/' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
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
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none transition-all duration-500 ease-in-out"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <g className="transform transition-transform duration-500 ease-in-out">
                    <path className="origin-top-left translate-x-0 -translate-y-6 rotate-45" d="M4 6h16" />
                    <path className="origin-top-left translate-x-0 -translate-y-6 rotate-45" d="M4 12h16" />
                    <path className="origin-top-left translate-x-0 -translate-y-6 rotate-45" d="M4 18h16" />
                  </g>
                ) : (
                  <g className="transform transition-transform duration-500 ease-in-out">
                    <path className="origin-top-left" d="M4 6h16" />
                    <path className="origin-center" d="M4 12h16" />
                    <path className="origin-bottom-left" d="M4 18h16" />
                  </g>
                )}
              </svg>
            </button>
          </div>


        </div>

          {/* Mobile menu */}
          <div className={`md:hidden fixed inset-0 bg-coral-50 z-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col h-full">
              <div className="h-20 flex items-center px-4 border-b border-gray-200">
                <div className="flex justify-between items-center w-full">
                  <span className="text-xl font-bold text-gray-800">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 pt-4 space-y-1 h-screen overflow-y-auto">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${pathname === '/' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${pathname === '/about' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  About
                </Link>
                <Link 
                  href="/projects" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${pathname === '/projects' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Projects
                </Link>
                <Link 
                  href="/services" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${pathname === '/services' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Services
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${pathname === '/contact' ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
}
