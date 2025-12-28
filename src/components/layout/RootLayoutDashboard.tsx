import Bansimplified from '@/assets/BanBan/bansimplified.png';
import { Link, Outlet } from "@tanstack/react-router";
import {
  Facebook,
  Globe,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Users,
  X
} from 'lucide-react';
import React, { useEffect, useState } from "react";

import { useIsMobile } from '@/hooks/use-mobile';

const RootLayoutDashboard: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close sidebar when switching to desktop
  useEffect(() => {
    if (!isMobile && sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [isMobile, sidebarOpen]);

  // Prevent hydration mismatch by showing a loader or empty div
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0d1117]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1119] text-[#24292f] dark:text-[#e6edf3] transition-colors duration-300">
      <header className="w-full bg-white dark:bg-[#010409] border-b border-[#d8dee4] dark:border-[#30363d] shadow-sm sticky top-0 z-1 transition-colors duration-300 z-50">
        <div className="px-4 py-3 flex items-center justify-between relative z-50">
          {/* Mobile Menu Button - Only visible on mobile */ }
          { isMobile && (
            <button
              onClick={ () => setSidebarOpen(!sidebarOpen) }
              className="p-2 rounded-md hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-colors"
              aria-label="Toggle sidebar"
            >
              { sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" /> }
            </button>
          ) }

          {/* Desktop Header - Only visible on desktop */ }
          { !isMobile && (
            <div className="flex items-center justify-between w-full">
              {/* Left side: Logo/Profile */ }
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#24292f] dark:bg-[#e6edf3] flex items-center justify-center">
                  <span className="text-white dark:text-[#0d1117] font-semibold text-sm">B</span>
                </div>
                <span className="font-semibold text-[#24292f] dark:text-[#e6edf3]">BanSimplified567</span>
              </div>

              {/* Center: Navigation Links */ }
              <nav className="flex items-center gap-6 mx-8 flex-1 justify-center">
                <Link
                  to="/"
                  className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors whitespace-nowrap"
                >
                  Overview
                </Link>
                <Link
                  to="/repositories"
                  className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors whitespace-nowrap"
                >
                  Repositories <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-2 py-0.5 rounded-full">47</span>
                </Link>
                <Link
                  to="/projects"
                  className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors whitespace-nowrap"
                >
                  Projects
                </Link>
                <Link
                  to="/packages"
                  className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors whitespace-nowrap"
                >
                  Packages
                </Link>
                <Link
                  to="/stars"
                  className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors whitespace-nowrap"
                >
                  Stars <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-2 py-0.5 rounded-full">27</span>
                </Link>
              </nav>

              {/* Right side: Search/Spacer - This creates balanced spacing */ }
              <div className="w-8" /> {/* Empty spacer for symmetry */ }
            </div>
          ) }
        </div>

        {/* Mobile navigation tabs - Only visible on mobile */ }
        { isMobile && (
          <div className="md:hidden border-t border-[#d8dee4] dark:border-[#30363d] px-4 py-3 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#24292f] dark:bg-[#e6edf3] flex items-center justify-center">
                <span className="text-white dark:text-[#0d1117] font-semibold text-sm">B</span>
              </div>
              <span className="font-semibold text-[#24292f] dark:text-[#e6edf3]">BanSimplified567</span>
            </div>

            <div className="flex flex-wrap items-center overflow-x-auto gap-1 sm:gap-4">
              <Link
                to="/"
                className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors"
              >
                Overview
              </Link>
              <Link
                to="/repositories"
                className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors"
              >
                Repositories <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-1.5 py-0.5 rounded">47</span>
              </Link>
              <Link
                to="/projects"
                className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/packages"
                className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors"
              >
                Packages
              </Link>
              <Link
                to="/stars"
                className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors"
              >
                Stars <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-1.5 py-0.5 rounded">27</span>
              </Link>
            </div>
          </div>
        ) }
      </header>

      {/* Main Content */ }
      <main className="flex-1 flex lg:flex-row gap-4 md:gap-6 p-4 md:p-6 relative">
        {/* Mobile Sidebar Overlay */ }
        { sidebarOpen && isMobile && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
            onClick={ () => setSidebarOpen(false) }
          />
        ) }

        {/* Left Sidebar - Profile Section */ }
        <div className={ `
  ${isMobile ? 'fixed top-0' : 'sticky top-[4rem]'}
  ${isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : ''}
  left-0 h-full
  lg:w-80 xl:w-96
  transition-transform duration-300 ease-in-out
  ${isMobile ? 'w-11/12 max-w-sm' : 'h-[calc(100vh-4rem)]'}
`}>

          <div className="
  bg-white dark:bg-[#0d1117]
  rounded-xl border border-[#d8dee4] dark:border-[#30363d]
  shadow-sm
  p-4 md:p-5
  h-full
  overflow-y-auto
  transition-colors duration-300
  ${isMobile ? 'm-4 rounded-xl h-[calc(100%-2rem)]' : ''}
">

            {/* Close button for mobile - Only visible on mobile */ }
            { isMobile && (
              <div className="flex justify-end mb-4 md:hidden">
                <button
                  onClick={ () => setSidebarOpen(false) }
                  className="p-2 rounded-md hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) }

            {/* Profile Header */ }
            <div className="mb-6">
              <div className="flex flex-col items-center text-center gap-2">
                <img
                  src={ Bansimplified }
                  alt="Bansimplified"
                  className="
    w-24 h-24
    sm:w-28 sm:h-28
    md:w-32 md:h-32
    lg:w-40 lg:h-40
    xl:w-48 xl:h-48
    2xl:w-56 2xl:h-56
    object-cover
    mx-auto
    rounded-full
    border-4 border-[#f6f8fa] dark:border-[#21262d]
  "
                />

                <p className="text-lg md:text-xl font-semibold text-[#24292f] dark:text-[#e6edf3]">
                  HisBannie . <span className="text-xs md:text-sm text-[#57606a] dark:text-[#7d8590] bg-[#f6f8fa] dark:bg-[#21262d] px-2 py-0.5 rounded">he/him</span>
                </p>
                <div className="mt-2 text-[#57606a] dark:text-[#7d8590]">
                  <div className="font-medium text-sm md:text-base">BanSimplified567</div>
                  <div className="mt-1 text-xs md:text-sm">Full-stack Developer | Frontend-Enthusiast</div>
                </div>
              </div>
            </div>

            {/* Stats */ }
            <div className="mb-6 p-3 bg-[#f6f8fa] dark:bg-[#21262d] rounded-lg transition-colors">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium text-sm">41 followers · 39 following</span>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-[#57606a] dark:text-[#7d8590] text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">Bagacay-Sibonga/Cebu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">bansimplified567@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <a
                  href="https://bansimplified567.vercel.app/"
                  className="text-[#0969da] dark:text-[#58a6ff] hover:underline truncate block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://bansimplified567.vercel.app/
                </a>
              </div>
            </div>

            {/* Social Links */ }
            <div className="space-y-2">
              <div className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3]">Social Links:</div>
              <div className="grid grid-cols-2 gap-2">
                { [
                  {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/his.bannie',
                    icon: <Facebook className="h-4 w-4" />
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/jadeivanbringcola567/',
                    icon: <Linkedin className="h-4 w-4" />
                  },
                  {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/his.bannie',
                    icon: <Instagram className="h-4 w-4" />
                  },
                  {
                    name: 'Portfolio',
                    url: 'https://www.linkedin.com/in/jadeivanbringcola567/',
                    icon: <LinkIcon className="h-4 w-4" />
                  }
                ].map((social, index) => (
                  <a
                    key={ index }
                    href={ social.url }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-[#f6f8fa] dark:bg-[#21262d] hover:bg-[#eaeef2] dark:hover:bg-[#30363d] text-[#24292f] dark:text-[#e6edf3] text-sm rounded-lg transition-colors"
                  >
                    { social.icon }
                    <span className="truncate">{ social.name }</span>
                  </a>
                )) }
              </div>
            </div>
          </div>
        </div>

        {/* Outlet / Main Content */ }
        <div className={ `
          flex-1
          overflow-y-auto
          bg-white dark:bg-[#0d1117]
          rounded-xl border border-[#d8dee4] dark:border-[#30363d]
          shadow-sm
          transition-all duration-300
          ${isMobile ? 'min-h-[calc(100vh-12rem)]' : ''}
          ${sidebarOpen && isMobile ? 'opacity-50 pointer-events-none' : 'opacity-100'}
        `}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayoutDashboard;
