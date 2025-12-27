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
  Search,
  Users
} from 'lucide-react';
import React, { useEffect, useState } from "react";

const RootLayoutDashboard: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <header className="w-full bg-white dark:bg-[#010409] border-b border-[#d8dee4] dark:border-[#30363d] shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="px-4 py-3 flex md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left section - Logo and Navigation */ }
          <div className="flex flex-col md:flex-row flex-1 items-start md:items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#24292f] dark:bg-[#e6edf3] flex items-center justify-center">
                <span className="text-white dark:text-[#0d1117] font-semibold text-sm">B</span>
              </div>
              <span className="font-semibold md:inline text-[#24292f] dark:text-[#e6edf3]">BanSimplified567</span>
            </div>

            <nav className="flex flex-wrap items-center gap-4">
              <Link to="/" className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">Overview</Link>
              <Link to="/repositories" className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">
                Repositories <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-2 py-0.5 rounded-full">47</span>
              </Link>
              <Link to="/projects" className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">Projects</Link>
              <Link to="/packages" className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">Packages</Link>
              <Link to="/stars" className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">
                Stars <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-2 py-0.5 rounded-full">27</span>
              </Link>
            </nav>
          </div>

          {/* Middle section - Search */ }
          <div className="w-full md:flex-1 md:max-w-2xl md:mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#57606a] dark:text-[#7d8590] h-4 w-4" />
              <input
                type="text"
                placeholder="Do search..."
                className="w-full pl-10 pr-4 py-2 bg-[#f6f8fa] dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-sm text-[#24292f] dark:text-[#e6edf3] focus:outline-none focus:ring-2 focus:ring-[#0969da] focus:border-transparent transition-colors"
              />
            </div>
          </div>


        </div>

        {/* Mobile navigation */ }
        <div className="md:hidden border-t border-[#f6f8fa] dark:border-[#21262d] px-4 py-2 transition-colors">
          <div className="flex items-center justify-between overflow-x-auto">
            <a href="/" className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">Overview</a>
            <a href="/repository" className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">
              Repositories <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-1.5 py-0.5 rounded">47</span>
            </a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">Projects</a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">Packages</a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] transition-colors">
              Stars <span className="ml-1 bg-[#f6f8fa] dark:bg-[#21262d] text-[#57606a] dark:text-[#7d8590] text-xs px-1.5 py-0.5 rounded">27</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */ }
      <main className="flex-1 flex lg:flex-row gap-6 p-4 md:p-6">
        {/* Left Sidebar - Profile Section */ }
        <div className="lg:w-1/3 xl:w-1/4">
          <div className="bg-white dark:bg-[#0d1117] rounded-xl border border-[#d8dee4] dark:border-[#30363d] shadow-sm p-5 sticky top-24 transition-colors duration-300">
            {/* Profile Header */ }
            <div className="mb-6">
              <div className="flex flex-col items-center text-center gap-2">
                <img
                  src={ Bansimplified }
                  alt="Bansimplified"
                  className="
                    w-32 h-32
                    sm:w-40 sm:h-40
                    md:w-48 md:h-48
                    lg:w-56 lg:h-56
                    object-cover
                    mx-auto
                    rounded-full
                    border border-[#d8dee4]
                    dark:border-[#30363d]
                  "
                />
                <p className="text-xl font-semibold text-[#24292f] dark:text-[#e6edf3]">HisBannie . <span className="text-sm text-[#57606a] dark:text-[#7d8590] bg-[#f6f8fa] dark:bg-[#21262d] px-2 py-0.5 rounded">he/him</span></p>
                <div className="mt-2 text-[#57606a] dark:text-[#7d8590]">
                  <div className="font-medium">BanSimplified567</div>
                  <div className="mt-1 text-sm">Full-stack Developer | Frontend-Enthusiast</div>
                </div>
              </div>
            </div>

            {/* Stats */ }
            <div className="mb-6 p-3 bg-[#f6f8fa] dark:bg-[#21262d] rounded-lg transition-colors">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="font-medium text-sm">41 followers · 39 following</span>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-[#57606a] dark:text-[#7d8590] text-sm">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 flex-shrink-0" /> Bagacay-Sibonga/Cebu</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 flex-shrink-0" /> bansimplified567@gmail.com</div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 flex-shrink-0" /><a href="https://bansimplified567.vercel.app/" className="text-[#0969da] dark:text-[#58a6ff] hover:underline truncate">https://bansimplified567.vercel.app/</a></div>
            </div>

            {/* Social Links */ }
            <div className="space-y-2">
              <div className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3]">Social Links:</div>
              <div className="flex flex-wrap gap-2">
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
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#f6f8fa] dark:bg-[#21262d] hover:bg-[#eaeef2] dark:hover:bg-[#30363d] text-[#24292f] dark:text-[#e6edf3] text-sm rounded-lg transition-colors"
                  >
                    { social.icon }
                    <span>{ social.name }</span>
                  </a>
                )) }
              </div>
            </div>
          </div>
        </div>

        {/* Outlet / Main Content */ }
        <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0d1117] rounded-xl border border-[#d8dee4] dark:border-[#30363d] shadow-sm">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayoutDashboard;
