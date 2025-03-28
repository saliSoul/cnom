'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  useEffect(() => {
    // Close the mobile menu when the user navigates to another page
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contacts' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-md dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} className="h-12" alt="Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 dark:text-white p-2 rounded-lg focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-gray-900 dark:text-white hover:underline decoration-4 underline-offset-8 decoration-green-600 ${
                    pathname === link.path ? 'font-bold text-green-500' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (Slide In/Out) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-50 w-3/4 h-full bg-white shadow-lg dark:bg-gray-800 z-40 p-6"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-900 dark:text-white">
              <X size={24} />
            </button>
            <ul className="mt-10 space-y-6">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`text-lg text-gray-900 dark:text-white hover:text-green-500 ${
                      pathname === link.path ? 'font-bold text-green-500' : ''
                    }`}
                    onClick={() => setIsOpen(false)} // Close menu after link click
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      
      
      
    </>
  );
}
