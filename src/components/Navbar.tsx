"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Little Garden
              </Link>
            </div>
            <div className="flex items-center space-x-4">
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
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
