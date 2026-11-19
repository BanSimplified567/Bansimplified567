"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Repositories", href: "#repositories" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const searchSections = [
  { name: "Home", href: "#home", description: "Hero section" },
  { name: "About", href: "#about", description: "Bio, education, how I work" },
  { name: "Skills", href: "#skills", description: "Tech stack by category" },
  { name: "Projects", href: "#projects", description: "Capstone projects carousel" },
  { name: "Repositories", href: "#repositories", description: "Public GitHub repos" },
  { name: "Experience", href: "#experience", description: "Work history & internships" },
  { name: "Contact", href: "#contact", description: "Email & social links" },
];

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.id.charAt(0).toUpperCase() + section.id.slice(1);
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setActiveLink(targetId.charAt(0).toUpperCase() + targetId.slice(1));
    }
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const filteredSections = searchSections.filter((section) =>
    section.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav
        className={`relative z-50 w-full border-b py-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 sticky top-0 ${
          isScrolled
            ? isDarkMode
              ? "border-slate-800 bg-slate-950/95 backdrop-blur-md shadow-lg"
              : "border-gray-100 bg-white/95 backdrop-blur-md shadow-lg"
            : isDarkMode
            ? "border-slate-800 bg-slate-950/80 backdrop-blur-md"
            : "border-gray-100 bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-baseline gap-1 group"
          >
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
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative flex flex-col items-center py-2 text-[15px] transition-all duration-300 ${
                      isActive
                        ? "text-[#4ea0e6] font-medium"
                        : isDarkMode
                        ? "text-slate-400 hover:text-slate-100"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                    {/* Active Underline Animation */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#4ea0e6] rounded-full transform transition-all duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0 origin-center"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <button
              onClick={() => setIsSearchOpen(true)}
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
                    ? "right-1 bg-slate-950"
                    : "right-8 bg-orange-400"
                }`}
              >
                {isDarkMode ? (
                  <svg className="w-3 h-3 text-slate-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
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
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4ea0e6] to-[#4f46e5] rounded-xl hover:opacity-90 transition-opacity"
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
              isDarkMode ? "bg-slate-950/80" : "bg-white/80"
            }`}
            aria-hidden="true"
          />

          {/* Search Panel */}
          <div
            className={`relative w-full max-w-lg mx-auto mt-16 md:mt-24 px-4 animate-slide-down ${
              isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-200"
                : "bg-white border-gray-200 text-gray-900"
            } rounded-2xl border shadow-2xl`}
          >
            {/* Search Input */}
            <div className="p-6 border-b border-slate-800/50 dark:border-slate-700/50">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4ea0e6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sections..."
                  className={`w-full pl-12 pr-4 py-3 text-lg rounded-xl border bg-transparent outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500 ${
                    isDarkMode
                      ? "border-slate-700 text-slate-100"
                      : "border-gray-300 text-gray-900"
                  }`}
                  autoFocus
                  aria-label="Search sections"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label="Clear search"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center">
                Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded border border-slate-300 dark:border-slate-600">Esc</kbd> to close
              </p>
            </div>

            {/* Results */}
            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {filteredSections.length > 0 ? (
                <ul className="space-y-1" role="listbox">
                  {filteredSections.map((section) => (
                    <li key={section.name}>
                      <button
                        onClick={(e) => handleNavClick(e as any, section.href)}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                          isDarkMode
                            ? "hover:bg-slate-800/50 text-slate-100"
                            : "hover:bg-gray-100 text-gray-900"
                        }`}
                        role="option"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-[#4ea0e6]/10 text-[#4ea0e6]">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 01-1 1H8a1 1 0 01-1-1V4z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h8" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{section.name}</p>
                          <p className="text-sm truncate text-slate-500 dark:text-slate-400">{section.description}</p>
                        </div>
                        <kbd className="flex-shrink-0 px-2 py-1 text-[10px] font-mono rounded border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                          Enter
                        </kbd>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                  <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-medium">No sections found</p>
                  <p className="text-sm mt-1">Try a different search term</p>
                </div>
              )}
            </div>

            {/* Shortcuts hint */}
            <div className="border-t border-slate-800/50 dark:border-slate-700/50 p-4">
              <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 rounded border border-slate-300 dark:border-slate-600">⌘K</kbd>
                  <span>Open search</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 rounded border border-slate-300 dark:border-slate-600">Esc</kbd>
                  <span>Close</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 rounded border border-slate-300 dark:border-slate-600">↑↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 rounded border border-slate-300 dark:border-slate-600">Enter</kbd>
                  <span>Select</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </>
  );
}
