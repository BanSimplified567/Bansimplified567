import Bansimplified from '@/assets/BanBan/bansimplified.png';
import { Link, Outlet } from "@tanstack/react-router";
import {
  ChevronDown,
  Edit,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Link as LinkIcon,
  Mail,
  MapPin,
  Moon,
  Plus,
  Search,
  Sun,
  Users
} from 'lucide-react';
import React, { useEffect, useState } from "react";


type ThemeMode = 'light' | 'dark';

const RootLayoutDashboard: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeMode;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
    setMounted(true);
  }, []);

  // Apply theme to document when theme changes
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    if (theme === 'dark') {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light');
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

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
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Left section - Logo and Navigation */ }
          <div className="flex flex-col flex-1 items- gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#24292f] dark:bg-[#e6edf3] flex items-center justify-center">
                <span className="text-white dark:text-[#0d1117] font-semibold text-sm">B</span>
              </div>
              <span className="font-semibold md:inline text-[#24292f] dark:text-[#e6edf3]">BanSimplified567</span>
            </div>

            <nav className=" md:flex items-center gap-4">
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
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#57606a] dark:text-[#7d8590] h-4 w-4" />
              <input
                type="text"
                placeholder="Do search..."
                className="w-full pl-10 pr-4 py-2 bg-[#f6f8fa] dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-sm text-[#24292f] dark:text-[#e6edf3] focus:outline-none focus:ring-2 focus:ring-[#0969da] focus:border-transparent transition-colors"
              />
            </div>
          </div>

          {/* Right section - User actions */ }
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-[#1f883d] text-white text-sm font-medium rounded-md hover:bg-[#1a7f37] transition-colors">
              <Plus className="h-4 w-4" />
              New
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            <button
              onClick={ toggleTheme }
              className="p-2 rounded-md bg-[#f6f8fa] dark:bg-[#21262d] hover:bg-[#eaeef2] dark:hover:bg-[#30363d] transition-colors"
              aria-label={ `Switch to ${theme === 'light' ? 'dark' : 'light'} mode` }
            >
              { theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" /> }
            </button>

            {/* User dropdown */ }
            <button className="flex items-center gap-2 p-1 rounded-full hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#d0d7de] dark:bg-[#30363d] flex items-center justify-center">
                <span className="text-[#24292f] dark:text-[#e6edf3] font-medium text-sm">U</span>
              </div>
              <ChevronDown className="h-4 w-4 text-[#57606a] dark:text-[#7d8590] hidden md:block" />
            </button>
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
      <main className="flex min-w-screen sm:flex-col lg:flex-row gap-6 p-4 md:p-6">
        {/* Left Sidebar - Profile Section */ }
        <div className="lg:w-1/3 xl:w-1/4">
          <div className="shadow-sm p-5 sticky top-24 transition-colors duration-300">
            {/* Profile Header */ }
            <div className="mb-6">
              <div className="flex flex-col items- gap-2">
              <img
  src={Bansimplified}
  alt="Bansimplified"
  className="
    w-32 h-32
    sm:w-50 sm:h-50
    md:w-68 md:h-68
    lg:w-74 lg:h-74
    object-cover
    mx-auto
    rounded-full
    border border-[#d8dee4]
    dark:border-[#30363d]
  "
/>


                <p className="text-xl font-semibold text-[#24292f] dark:text-[#e6edf3]">HisBannie . <span className="text-sm text-[#fefefe] dark:text-[#fefefe] bg-[#f6f8fa] dark:bg-[#21262d] px-2 py-0.5 rounded"> he/him</span></p>
                <div className="mt-2 text-[#57606a] dark:text-[#7d8590] text-start">
                  <div className="font-medium">BanSimplified567</div>
                  <div className="mt-1 text-sm">Full-stack Developer | Frontend-Enthusiast</div>
                </div>
              </div>

            </div>

            {/* Edit profile */ }
            <div className="mb-2">
              <button className="w-full mt-3 px-4 py-2 bg-[#f6f8fa] dark:bg-[#21262d] hover:bg-[#eaeef2] dark:hover:bg-[#30363d] text-[#24292f] dark:text-[#e6edf3] font-medium rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                <Edit className="h-4 w-4" />
                Edit profile
              </button>
            </div>

            {/* Stats */ }
            <div className=" rounded-lg transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4" />
                <span className="font-medium">A: 41 followers - 39 following</span>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-[#57606a] dark:text-[#7d8590]">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 flex-shrink-0" /> Bagacay-Sibonga/Cebu</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 flex-shrink-0" /> bansimplified567@gmail.com</div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 flex-shrink-0" /><a href="https://bansimplified567.vercel.app/" className="text-[#0969da] dark:text-[#58a6ff] hover:underline">https://bansimplified567.vercel.app/</a></div>
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
                    name: 'LinkedIn',
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
        <div className="flex-auto overflow-y-auto bg-white dark:bg-[#0d1117] rounded-xl border border-[#d8dee4] dark:border-[#30363d] ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayoutDashboard;
