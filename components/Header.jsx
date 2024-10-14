'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button'; // Import ShadCN Button component
import ThemeToogler from './ThemeToogler'; // Assuming you have this component
import { Menu } from './ui/navbar-menu'; // Assuming you're using this custom Menu component
import { cn } from '@/utils/cn';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close the mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn("fixed top-7 inset-x-0 z-50 flex flex-none flex-col mx-auto")}>
      <div className="w-full">
        <div className="relative sm:px-8 container mx-auto">
          <div className="relative flex gap-4 items-center justify-between hidden md:block">
            {/* Logo */}
            <Link href="/" className="flex items-center pointer-events-auto">
              <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                <Image
                  src="/Ammar Yasir.jpeg" 
                  alt="Logo"
                  width={50}
                  height={50}
                  className="cursor-pointer mr-4 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                />
              </div>
            </Link>
            <div className="flex flex-1 justify-end md:justify-center">
              {/* Desktop Menu */}
              <nav className="pointer-events-auto hidden md:block">
                <Menu>
                  <Link href="/" className="hover:text-primary transition-colors duration-200 px-4 py-2 rounded-md">Home</Link>
                  <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors duration-200 px-4 py-2 rounded-md">About</button>
                  <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors duration-200 px-4 py-2 rounded-md">Services</button>
                  <button onClick={() => scrollToSection('work')} className="hover:text-primary transition-colors duration-200 px-4 py-2 rounded-md">Projects</button>
                  <Link href="/contact" onClick={toggleMobileMenu} className="block px-4 py-2">Contact</Link>
                </Menu>
              </nav>
            </div>
            {/* Desktop Theme Toggler */}
            <div className="hidden md:block absolute top-0 right-0 mx-4 lg:mx-16 pointer-events-auto">
              <ThemeToogler /> {/* Dark/Light mode toggle button */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu and Theme Toggler */}
      <div className="container relative flex gap-4 items-center justify-between md:hidden">
      <Link href="/" className="flex items-center pointer-events-auto">
        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
          <Image
            src="/Ammar Yasir.jpeg" 
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer mr-4 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
          />
        </div>
      </Link>
      <div className="flex flex-1 justify-end md:justify-center">
        <Button
          onClick={toggleMobileMenu}
          className="group flex items-center rounded-full bg-white/90 hover:bg-[#14b8a6] hover:text-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded={isMobileMenuOpen}
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-white hover:text-white dark:group-hover:stroke-zinc-400"
            >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <div className="ml-4">
          <ThemeToogler /> {/* Dark/Light mode toggle button */}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900 dark:ring-zinc-800">
          <div className="flex flex-row-reverse items-center justify-between">
            <button
              aria-label="Close menu"
              onClick={toggleMobileMenu}
              className="-m-1 p-1"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
              >
                <path
                  d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Navigation
            </h2>
          </div>
          <nav className="mt-6">
            <ul className="text-base text-zinc-800 dark:text-zinc-300">
              <li>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 hover:text-primary transition-colors duration-200">Home</Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="block py-2 hover:text-primary transition-colors duration-200">About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors duration-200 py-2 rounded-md">Services</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="block py-2 hover:text-primary transition-colors duration-200">Projects</button>
              </li>
              <li>
              <Link href="/contact" onClick={toggleMobileMenu} className="block py-2">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
