"use client";

import Navbar from "@components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

const skills = [
  {
    title: "Performance-Minded",
    description: "Lean page loads, indexed queries, and profiling before optimizing.",
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-amber-400/10",
  },
  {
    title: "Security First",
    description: "Input validation, proper authentication, and role-based access control by default.",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-emerald-400/10",
  },
  {
    title: "Thoughtful UI",
    description: "Responsive, accessible interfaces with consistent design systems and purposeful motion.",
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    iconBg: "bg-sky-400/10",
  },
  {
    title: "Maintainable Code",
    description: "Modular, readable code that the next developer can pick up and extend.",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iconBg: "bg-indigo-400/10",
  },
];

const timeline = [
  {
    status: "IN PROGRESS",
    title: "MS in Information Technology",
    subtitle: "University of the People (UoPeople)",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    iconBg: "bg-emerald-400/10",
  },
  {
    status: "GRADUATED 2025",
    title: "BS in Information Technology",
    subtitle: "Bestlink College of the Philippines",
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    iconBg: "bg-sky-400/10",
  },
  {
    status: "RECOGNITION (MAY 2026)",
    title: "Top Case Analysis & Presenter",
    subtitle: "Ascendens Asia",
    icon: (
      <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    iconBg: "bg-violet-400/10",
  },
];

const stackCategories = [
  {
    title: "Daily at work",
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    iconBg: "bg-sky-500/10",
    tech: ["Angular", "TypeScript", "Laravel", "PHP", "GraphQL", "MySQL", "PostgreSQL", "Docker"],
  },
  {
    title: "Side projects",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iconBg: "bg-indigo-500/10",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Node.js", "WebSockets", "Vite"],
  },
  {
    title: "Infra & testing",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4zm0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
      </svg>
    ),
    iconBg: "bg-emerald-500/10",
    tech: ["AWS", "Linux", "Nginx", "Git", "Playwright", "PHPUnit", "Vitest"],
  },
  {
    title: "AI & automation",
    icon: (
      <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    iconBg: "bg-amber-500/10",
    tech: ["Claude & Antigravity", "Agent tooling", "Python scripting", "n8n"],
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50 dark:bg-slate-950" />;
  }

  return (
    <main
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-slate-950 text-slate-200" : "bg-[#f8f9fa] text-gray-900"
      }`}
    >
      {/* BACKGROUND PATTERNS LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isDarkMode ? (
          <div className="relative h-full w-full bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#10b98133_1px,transparent_1px),linear-gradient(to_bottom,#10b98133_1px,transparent_1px)] [&>div]:bg-[size:14px_24px] [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
            <div></div>
          </div>
        ) : (
          <div className="relative h-full w-full bg-[#f8f9fa] [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:24px_24px] [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div></div>
          </div>
        )}
      </div>

      {/* NAVBAR */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Top Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div
                className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full border shadow-sm ${
                  isDarkMode
                    ? "bg-slate-900 border-slate-800 text-slate-300"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Available for Full-Stack & Web Engineering roles
              </div>
              <div
                className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full border shadow-sm ${
                  isDarkMode
                    ? "bg-slate-900 border-slate-800 text-slate-300"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                kier.salise.dev@gmail.com
              </div>
            </div>

            {/* Title */}
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              Hello, I&#39;m{" "}
              <span className="font-serif italic text-[#4ea0e6] font-normal tracking-normal pr-2">
                Kaizen
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg md:text-xl leading-relaxed max-w-xl ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              <strong className={isDarkMode ? "text-slate-200" : "text-gray-900"}>
                Full-Stack Software Engineer, MSIT Student at UoPeople & Filipino Martial Artist.
              </strong>{" "}
              I build internal business systems with Angular, Laravel, and GraphQL.
              Right now I&#39;m the only developer on an HR platform at Ascendens Asia.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="#work"
                className="flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#5a8ff5] hover:bg-[#4a7fe5] rounded-xl shadow-sm transition-colors"
              >
                View Featured Work
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/cv"
                className={`flex items-center gap-2 px-6 py-3 text-base font-medium rounded-xl border shadow-sm transition-colors ${
                  isDarkMode
                    ? "bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800"
                    : "bg-white border-gray-200 text-gray-800 hover:bg-gray-50"
                }`}
              >
                <svg className="w-5 h-5 text-[#4ea0e6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View & Download CV
              </Link>
            </div>

            {/* Stats Row */}
            <div
              className={`flex items-center gap-12 mt-8 pt-8 border-t ${
                isDarkMode ? "border-slate-800" : "border-gray-200"
              }`}
            >
              <div>
                <p className="text-3xl font-bold">9</p>
                <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">3</p>
                <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>Live apps</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1+</p>
                <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>Year professional exp.</p>
              </div>
            </div>
          </div>

          {/* Right Content (Image Area) */}
          <div className="relative flex justify-center lg:justify-end h-full min-h-[500px]">
            {/* The Fade effect at the bottom of the image */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none bg-gradient-to-t ${
                isDarkMode ? "from-slate-950" : "from-[#f8f9fa]"
              } to-transparent`}
            ></div>

            <video
              key={isDarkMode ? "dark" : "light"}
              src={isDarkMode ? "/components/kaizenremovereverse.mp4" : "/components/kaizenwear.mp4"}
              autoPlay
              muted
              playsInline
              className="relative z-10 object-cover object-top w-full max-w-md h-auto rounded-t-full transition-all duration-500 ease-in-out"
              style={{
                maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              }}
            />

            {/* Bottom Floating Pill */}
            <div
              className={`absolute -bottom-6 z-30 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border shadow-md whitespace-nowrap ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800 text-slate-300"
                  : "bg-white border-gray-200 text-gray-700"
              }`}
            >
              <span className="w-2.5 h-2.5 bg-[#4ea0e6] rounded-full"></span>
              Toggle theme to animate character
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-[#4ea0e6] tracking-wide mb-2">
            01 / ABOUT
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight font-serif mb-3 ${
              isDarkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            A bit about me
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>
            Developer from Quezon City. I work best on systems people rely on every day at work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 items-start">
          {/* Left Column: Bio + Timeline */}
          <div className="flex flex-col gap-6">
            {/* Bio Card */}
            <div
              className={`rounded-2xl border p-8 shadow-sm ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <p className={`text-lg leading-relaxed mb-5 ${isDarkMode ? "text-slate-300" : "text-gray-700"}`}>
                I started out building PHP systems for my IT degree at{" "}
                <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Bestlink College of the Philippines
                </strong>
                , then interned at two Quezon City software shops before joining{" "}
                <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Ascendens Asia
                </strong>{" "}
                in 2025. These days I own an HRIS end to end, from the Angular screens to the Laravel GraphQL API to the Docker deployment on AWS.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-gray-700"}`}>
                I&#39;m also taking a{" "}
                <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Master of Science in Information Technology
                </strong>{" "}
                at the{" "}
                <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                  University of the People
                </strong>
                , and outside of work I train in Filipino martial arts. On the side I build small things I actually use, like a CODM loadout site and a Tongits game.
              </p>
            </div>

            {/* Timeline / Education Row */}
            <div className="flex flex-col gap-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 rounded-2xl border p-5 shadow-sm transition-colors ${
                    isDarkMode
                      ? "bg-slate-900/60 border-slate-800"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold tracking-wider text-emerald-500 uppercase mb-1">
                      {item.status}
                    </span>
                    <span className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {item.title}
                    </span>
                    <span className={`text-sm ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How I work */}
          <div
            className={`rounded-2xl border p-8 shadow-sm h-full ${
              isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-serif font-bold mb-8 ${
                isDarkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              How I work
            </h3>
            <div className="flex flex-col gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${skill.iconBg}`}>
                    {skill.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {skill.title}
                    </span>
                    <span className={`text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>
                      {skill.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK SECTION */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-[#4ea0e6] tracking-wide mb-2">
            02 / STACK
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight font-serif mb-3 ${
              isDarkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            What I work with
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>
            Grouped by how I use them, not by how many logos I can fit.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 shadow-sm flex flex-col ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${category.iconBg}`}>
                  {category.icon}
                </div>
                <h3 className={`text-lg font-serif font-bold ${isDarkMode ? "text-white" : "text-[#0f172a]"}`}>
                  {category.title}
                </h3>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${
                      isDarkMode
                        ? "bg-slate-800/80 border-slate-700/50 text-slate-300"
                        : "bg-gray-50 border-gray-200 text-gray-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
