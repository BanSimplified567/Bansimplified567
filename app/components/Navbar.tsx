"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Repositories", href: "/repositories" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [activeLink, setActiveLink] = useState("About");

  return (
    <nav
      className={`relative z-50 w-full border-b py-3 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode
          ? "border-slate-800 bg-slate-950/80 backdrop-blur-md"
          : "border-gray-100 bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-baseline gap-1 group">
          <span
            className={`text-2xl font-bold tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            I'm
          </span>
          <span className="text-4xl font-serif italic text-[#4ea0e6] pr-2 transition-transform group-hover:scale-105">
            Kaizen
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative flex flex-col items-center py-2 text-[15px] transition-colors ${
                    isActive
                      ? "text-[#4ea0e6] font-medium"
                      : isDarkMode
                      ? "text-slate-400 hover:text-slate-100"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                  {/* Active Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 h-[2px] w-full bg-[#4ea0e6] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <button
            className={`hidden md:flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border transition-colors ${
              isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
          >
            <svg
              className="w-4 h-4 text-[#4ea0e6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
            <kbd
              className={`ml-2 px-1.5 py-0.5 text-[10px] font-sans font-medium rounded-md border ${
                isDarkMode
                  ? "bg-slate-800 border-slate-700 text-slate-400"
                  : "bg-gray-50 border-gray-200 text-gray-400"
              }`}
            >
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center w-14 h-7 rounded-full p-1 border transition-colors relative ${
              isDarkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-gray-100 border-gray-200"
            }`}
            aria-label="Toggle Dark Mode"
          >
            <div
              className={`flex items-center justify-center w-5 h-5 rounded-full absolute shadow-sm transition-all duration-300 ${
                isDarkMode
                  ? "right-1 bg-slate-950" // Dark mode knob
                  : "right-8 bg-orange-400" // Light mode knob
              }`}
            >
              {/* Icon changes based on theme */}
              {isDarkMode ? (
                // Moon Icon
                <svg
                  className="w-3 h-3 text-slate-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                // Sun Icon
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>

          {/* Let's Talk Button */}
          <Link
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4ea0e6] to-[#4f46e5] rounded-xl hover:opacity-90 transition-opacity"
          >
            Let&#39;s Talk
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
