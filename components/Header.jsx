'use client';

import React, { useState } from 'react';
import ThemeToogler from './ThemeToogler';
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button'; // Import ShadCN Button component

const Header = () => {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={cn("fixed top-7 inset-x-0 z-50 flex flex-none flex-col mx-auto")}>
        <div className="w-full">
            <div className="relative sm:px-8 container mx-auto">
                <div className="relative flex gap-4 items-center justify-between"> 
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
                        <nav className="pointer-events-auto hidden md:block">
                            <Menu setActive={setActive}>
                                <MenuItem setActive={setActive} active={active} item="Home">
                                    <HoveredLink href="/">Home</HoveredLink>
                                </MenuItem>
                                <MenuItem setActive={setActive} active={active} item="About">
                                    <HoveredLink href="/about">About</HoveredLink>
                                </MenuItem>
                                <MenuItem setActive={setActive} active={active} item="Projects">
                                    <ProductItem 
                                        title="Project 1" 
                                        description="A cool project" 
                                        href="/projects/project1" 
                                        src="/path/to/project1-image.jpg" 
                                    />
                                </MenuItem>
                                <MenuItem setActive={setActive} active={active} item="Contact">
                                    <HoveredLink href="/contact">Contact</HoveredLink>
                                </MenuItem>
                            </Menu>
                        </nav>

                        {/* Mobile Menu and Theme Toggler */}
                        <div className="flex items-center md:hidden"> {/* Adjusted flex container */}
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
                                    <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                            <div className="ml-4">
                                <ThemeToogler />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Theme Toggler for Desktop */}
                <div className="hidden md:block absolute top-0 right-0 mx-4 lg:mx-16 pointer-events-auto"> {/* Added this line */}
                    <ThemeToogler />
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="fixed inset-x-4 top-20 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900 dark:ring-zinc-800">
                <div className="flex flex-row-reverse items-center justify-between">
                    <button
                        aria-label="Close menu"
                        onClick={toggleMobileMenu}
                        className="-m-1 p-1"
                    >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-zinc-500 dark:text-zinc-400">
                        <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </button>
                    <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
                </div>
                <nav className="mt-6">
                    <ul className="text-base text-zinc-800 dark:text-zinc-300">
                    <li>
                        <Link href="/" onClick={toggleMobileMenu} className="block py-2">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={toggleMobileMenu} className="block py-2">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" onClick={toggleMobileMenu} className="block py-2">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={toggleMobileMenu} className="block py-2">Contact</Link>
                    </li>
                    {/* Add more menu items as needed */}
                    </ul>
                </nav>
            </div>
        )}

    </header>
  );
};

export default Header;