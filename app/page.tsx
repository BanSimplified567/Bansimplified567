"use client";

import Navbar from "@components/Navbar";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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
    status: "CURRENTLY WORKING",
    title: "MADAC Staff (Data Encoder) | IT Support | HR Staff",
    subtitle: "Local Government Unit of Sibonga, Cebu",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    iconBg: "bg-emerald-400/10",
  },
  {
    status: "GRADUATED 2026",
    title: "Bachelor of Science in Information Technology (BSIT)",
    subtitle: "Sibonga Community College, Sibonga, Cebu",
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    iconBg: "bg-sky-400/10",
  },
  {
    status: "SOLO CAPSTONE PROJECT",
    title: "Full-Stack Web Developer",
    subtitle: "Isla del Cafe Carcar | Web-Based Ordering and Sales Management System (2026)",
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
    tech: [ "TypeScript", "Laravel", "PHP", "MySQL", "PostgreSQL", "Docker"],
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
    tech: [ "Linux", "Nginx", "Git", "Playwright", "PHPUnit", "Vitest"],
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

// ✅ FIX: Typed GitHub repo shape
type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  fork: boolean;
};

// ✅ FIX: Static, literal Tailwind gradient classes (JIT needs full strings)
const LANGUAGE_GRADIENTS: Record<string, string> = {
  TypeScript: "from-blue-500 to-blue-700",
  JavaScript: "from-yellow-400 to-yellow-600",
  Python: "from-blue-500 to-indigo-600",
  PHP: "from-purple-500 to-purple-700",
  Go: "from-cyan-400 to-cyan-600",
  Rust: "from-orange-500 to-orange-700",
  Java: "from-red-500 to-red-700",
  C: "from-blue-600 to-blue-800",
  "C++": "from-blue-600 to-blue-800",
  "C#": "from-purple-500 to-purple-700",
  Ruby: "from-red-500 to-red-700",
  Swift: "from-orange-400 to-orange-600",
  Kotlin: "from-purple-400 to-purple-600",
  Dart: "from-blue-400 to-blue-600",
  HTML: "from-orange-400 to-orange-600",
  CSS: "from-blue-400 to-blue-600",
  SCSS: "from-pink-500 to-pink-700",
  Vue: "from-green-400 to-green-600",
  Svelte: "from-orange-400 to-orange-600",
  Shell: "from-green-500 to-green-700",
  PowerShell: "from-blue-500 to-blue-700",
  Dockerfile: "from-blue-400 to-blue-600",
  SQL: "from-orange-500 to-orange-700",
};

// ✅ FIX: Replaced getColorFromLanguage with a static class resolver
function getGradientClass(lang: string | null): string {
  return LANGUAGE_GRADIENTS[lang || ""] || "from-slate-500 to-slate-700";
}

function getIconFromLanguage(lang: string | null): string {
  const icons: Record<string, string> = {
    TypeScript: "<TS/>",
    JavaScript: "<JS/>",
    Python: "<PY/>",
    PHP: "<PHP/>",
    Go: "<GO/>",
    Rust: "<RS/>",
    Java: "<JV/>",
    C: "<C/>",
    "C++": "<CPP/>",
    "C#": "<CS/>",
    Ruby: "<RB/>",
    Swift: "<SW/>",
    Kotlin: "<KT/>",
    Dart: "<DT/>",
    HTML: "<HTML/>",
    CSS: "<CSS/>",
    Vue: "<VU/>",
    Svelte: "<SV/>",
    Dockerfile: "<DK/>",
    SQL: "<SQL/>",
  };
  return icons[lang || ""] || "<> </>";
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  // ✅ FIX: typed state
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [repoFilter, setRepoFilter] = useState("All");
  const [repoSearch, setRepoSearch] = useState("");

  // Filter repos for GitHub section
  const filteredRepos = useMemo(
    () =>
      githubRepos.filter((repo) => {
        const matchesFilter = repoFilter === "All" || repo.language === repoFilter;
        const matchesSearch =
          repo.name.toLowerCase().includes(repoSearch.toLowerCase()) ||
          (repo.description || "").toLowerCase().includes(repoSearch.toLowerCase());
        return matchesFilter && matchesSearch;
      }),
    [githubRepos, repoFilter, repoSearch]
  );

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

  // Handle responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Fetch GitHub repos
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/bansimplified567/repos?sort=updated&direction=desc&per_page=100"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        // ✅ FIX: typed response
        const data: GitHubRepo[] = await response.json();
        // Exclude forked repositories
        const nonForked = data.filter((repo) => !repo.fork);

        // Filter to only show main portfolio projects (exclude small learning/exercise repos)
        const portfolioRepos = [
          "bansimplified-boilerplete-using-react",
          "bansimplified-boilerplete-using-php-native",
          "Birthday-Gift",
          "SibongaBuilderHouse",
          "Bansimplified567",
          "Hotel-Reservation-Management--HRM-",
          "MotorStart-Website",
          "Barangay_Management",
          "Student-System-Management",
          "Practice-TanstackTSX",
        ];

        setGithubRepos(nonForked.filter((repo) => portfolioRepos.includes(repo.name)));
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
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

  // ✅ FIX: derive projects/categories/filteredProjects BEFORE effects that reference them
  const projects = useMemo(
    () =>
      githubRepos.map((repo) => ({
        title: repo.name,
        category: repo.language || "Project",
        description: repo.description || "No description available.",
        // ✅ FIX: static gradient class string (Tailwind can see these)
        gradient: `bg-gradient-to-br ${getGradientClass(repo.language)}`,
        icon: getIconFromLanguage(repo.language),
        highlights: [
          `${repo.stargazers_count} stars`,
          `${repo.forks_count} forks`,
          repo.language && `${repo.language}`,
        ].filter(Boolean) as string[],
        tech: repo.language ? [repo.language] : ([] as string[]),
        html_url: repo.html_url,
      })),
    [githubRepos]
  );

  const categories = useMemo(
    () => ["All", ...new Set(githubRepos.map((r) => r.language).filter(Boolean) as string[])],
    [githubRepos]
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [projects, activeCategory]
  );

  // ✅ FIX: this effect now runs after filteredProjects is defined
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCategory, filteredProjects.length]);

  // ✅ FIX: clamp index when data/viewport shrinks
  const maxIndex = Math.max(0, filteredProjects.length - itemsPerView);
  useEffect(() => {
    setCarouselIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const visibleProjects = filteredProjects.slice(
    carouselIndex,
    carouselIndex + itemsPerView
  );

  const nextSlide = () => setCarouselIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCarouselIndex((prev) => Math.max(prev - 1, 0));

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50 dark:bg-slate-950" />;
  }

  return (
    <main
      className={`relative min-h-screen w-full transition-colors duration-300 ${
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
      <section id="home" className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-24">
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
                bansimplified567@gmail.com
              </div>
            </div>

            {/* Title */}
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tight ${
                isDarkMode ? "text-white" : "text-[#0f172a]"
              }`}
            >
              Hello, I&#39;m
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
    Full-Stack Software Engineer, Former SCC Student &amp; Filipino Martial Artist.
  </strong>{" "}
  I build capstone-level systems with ReactJS (JSX, TSX), Next.js, Laravel, and
  GraphQL. Currently, I&#39;m a freelance developer and an LGU worker assigned to
  the Municipal Health Office of Sibonga, Cebu. I&#39;m also a MADAC Staff
  (Encoder), IT Support, and HR Staff. I find joy in learning technology.
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
                href="/bansimplified.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
                <p className="text-3xl font-bold">5</p>
                <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}> Capstone Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">3+</p>
                <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>Live apps</p>
              </div>
              <div>
                <p className="text-3xl font-bold">3+</p>
                <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>Freelance Web Developer exp.</p>
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
              poster={isDarkMode ? "/components/kaizenremovereverse.webp" : "/components/kaizenwear.webp"}
              autoPlay
              muted
              playsInline
              className="relative z-10 object-cover object-top w-full max-w-md h-auto rounded-t-full"
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
      <section id="about" className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
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
            Developer from Sibonga Cebu City. I work best on systems people rely on every day at work.
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
    <p
      className={`text-lg leading-relaxed mb-5 ${
        isDarkMode ? "text-slate-300" : "text-gray-700"
      }`}
    >
      My journey started with building PHP-based systems
      during my IT studies at{" "}
      <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
        Sibonga Community College of the Philippines
      </strong>
      . Along the way, I developed a passion for web development
      and continued expanding my skills through hands-on projects
      and continuous learning. In 2025, I earned my first income
      from software development by building and delivering a
      capstone-level system for a student client, completing the
      project on time with a focus on quality and accuracy.
      I'm continuously improving my skills and looking forward
      to new opportunities where I can contribute, gain experience,
      and grow as a developer.
    </p>

    <p
      className={`text-lg leading-relaxed ${
        isDarkMode ? "text-slate-300" : "text-gray-700"
      }`}
    >
      Beyond technology, I enjoy training in Filipino martial arts
      and staying active through fitness. I'm also a fan of comics,
      anime, manga, manhwa, and manhua. I believe in continuous
      self-improvement, staying curious, and learning something
      new every day.
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
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}
        >
          {item.icon}
        </div>

        <div className="flex flex-col">
          <span className="text-[11px] font-semibold tracking-wider text-emerald-500 uppercase mb-1">
            {item.status}
          </span>

          <span
            className={`font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {item.title}
          </span>

          <span
            className={`text-sm ${
              isDarkMode ? "text-slate-400" : "text-gray-500"
            }`}
          >
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
      <section id="skills" className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-[#4ea0e6] tracking-wide mb-2">
            03 / WORK
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight font-serif mb-3 ${
              isDarkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            Projects
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>
            Capstone systems from college and side projects that are live today.
          </p>
        </div>

        {loadingRepos ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-2xl border overflow-hidden shadow-sm">
                  <div className={`h-48 w-full animate-pulse ${isDarkMode ? "bg-slate-800" : "bg-gray-200"}`} />
                  <div className="p-6 space-y-4">
                    <div className={`h-6 w-3/4 animate-pulse ${isDarkMode ? "bg-slate-700" : "bg-gray-200"}`} />
                    <div className={`h-4 w-full animate-pulse ${isDarkMode ? "bg-slate-700" : "bg-gray-200"}`} />
                    <div className={`h-4 w-2/3 animate-pulse ${isDarkMode ? "bg-slate-700" : "bg-gray-200"}`} />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors border ${
                    activeCategory === cat
                      ? "bg-[#5a8ff5] text-white border-[#5a8ff5]"
                      : isDarkMode
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results Info */}
            <div className={`flex justify-between items-center text-sm mb-6 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>
              <span>
                Showing
                <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                  {visibleProjects.length}
                </strong>
                of
                <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                  {filteredProjects.length}
                </strong>
                projects
              </span>
              <span>
                {filteredProjects.length === 0
                  ? "0 of 0"
                  : `${carouselIndex + 1}–${Math.min(
                      carouselIndex + itemsPerView,
                      filteredProjects.length
                    )} of ${filteredProjects.length}`}
              </span>
            </div>

            {/* Projects Carousel */}
            <div className="relative">
              {/* Carousel Viewport */}
              <div className="overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(-${carouselIndex} * (100% + 24px) / ${itemsPerView}))`,
                  }}
                >
                  {filteredProjects.map((project) => (
                    <div
                      key={project.html_url}
                      className={`rounded-2xl border overflow-hidden shadow-sm flex flex-col transition-transform hover:-translate-y-1 flex-shrink-0 ${
                        isDarkMode
                          ? "bg-slate-900/60 border-slate-800"
                          : "bg-white border-gray-200"
                      }`}
                      style={{
                        width: `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})`,
                      }}
                    >
                      {/* Card Image Area */}
                      {/* ✅ FIX: use project.gradient (static Tailwind classes) */}
                      <div className={`relative h-48 w-full flex items-center justify-center ${project.gradient}`}>
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm rounded-full">
                          {project.category}
                        </div>

                        {/* Visual Content */}
                        <span className="text-5xl font-mono text-white/90 font-bold tracking-tighter">
                          {project.icon}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className={`text-xl font-bold font-serif mb-3 ${isDarkMode ? "text-white" : "text-[#0f172a]"}`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-col gap-2 mb-6">
                          {project.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <span className="text-xs font-medium px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 text-xs font-medium rounded border ${
                                isDarkMode
                                  ? "bg-slate-800 border-slate-700 text-slate-300"
                                  : "bg-gray-50 border-gray-200 text-gray-600"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Footer Link */}
                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800">
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#5a8ff5] hover:text-[#4a7fe5] transition-colors"
                          >
                            View on GitHub
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

{/* Navigation Controls - Prev, 1, 2, 3, Next */}
              {filteredProjects.length > itemsPerView && (
                <div className="flex justify-center items-center gap-2 mt-6">
                  {/* Previous Button */}
                  <button
                    onClick={prevSlide}
                    disabled={carouselIndex === 0}
                    className={`p-2 rounded-lg border transition-all ${
                      isDarkMode
                        ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                    aria-label="Previous project"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Page Number Buttons (max 3) */}
                  {Array.from({ length: Math.min(maxIndex + 1, 3) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIndex(i)}
                      className={`w-10 h-10 rounded-lg border font-medium flex items-center justify-center transition-all ${
                        i === carouselIndex
                          ? "bg-[#5a8ff5] text-white border-[#5a8ff5] shadow-sm"
                          : isDarkMode
                          ? "border-slate-800 text-slate-300 hover:bg-slate-800"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={nextSlide}
                    disabled={carouselIndex >= maxIndex}
                    className={`p-2 rounded-lg border transition-all ${
                      isDarkMode
                        ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                        : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                    } disabled:opacity-30 disabled:cursor-not-allowed`}
                    aria-label="Next project"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </section>
{/* 04 / GITHUB SECTION */}
      <section id="repositories" className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
        <div className="mb-10">
          <p className="text-sm font-medium text-[#4ea0e6] tracking-wide mb-2">
            04 / GITHUB
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight font-serif mb-3 ${
              isDarkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            Public repositories
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}>
            Starter kits and learning notes. Most of my work code lives in private company repos.
          </p>
        </div>

        {/* Profile Card */}
        <div
          className={`rounded-2xl border p-6 md:p-8 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
            isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-inner">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className={`text-2xl font-bold font-serif ${isDarkMode ? "text-white" : "text-[#0f172a]"}`}>
                  @Bansimplified567
                </h3>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                  Active
                </span>
              </div>
              <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>
                Full-Stack Software Engineer • Cebu City, Philippines
              </p>
            </div>
          </div>
          <a
            href="https://github.com/BanSimplified567"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border shadow-sm transition-colors ${
              isDarkMode
                ? "bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                : "bg-[#0f172a] border-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Follow on GitHub
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Filter Pills & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {["All", ...new Set(githubRepos.map((r) => r.language).filter(Boolean) as string[])].map((tag) => (
              <button
                key={tag}
                onClick={() => setRepoFilter(tag)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors border ${
                  repoFilter === tag
                    ? "bg-[#5a8ff5] text-white border-[#5a8ff5]"
                    : isDarkMode
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={repoSearch}
              onChange={(e) => setRepoSearch(e.target.value)}
              placeholder="Search repositories..."
              className={`w-full md:w-64 pl-10 pr-4 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#5a8ff5] ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
              }`}
            />
          </div>
        </div>

        {/* Repo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl border p-4 flex flex-col justify-between transition-colors hover:shadow-lg ${
                isDarkMode ? "bg-[#0d1117] border-[#30363d] hover:border-[#8b949e]" : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {/* Repo Icon */}
                    <svg className={`w-4 h-4 ${isDarkMode ? "text-[#8b949e]" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    {/* Repo Name */}
                    <h4 className={`text-sm font-bold truncate ${isDarkMode ? "text-[#58a6ff]" : "text-blue-600"}`}>
                      {repo.name}
                    </h4>
                    {/* Public Badge */}
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${isDarkMode ? "border-[#30363d] text-[#8b949e]" : "border-gray-300 text-gray-500"}`}>
                      Public
                    </span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${isDarkMode ? "text-[#8b949e]" : "text-gray-600"}`}>
                  {repo.description || "No description"}
                </p>
              </div>

              <div className={`flex items-center gap-4 text-xs ${isDarkMode ? "text-[#8b949e]" : "text-gray-500"}`}>
                {/* Language */}
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-full ${getGradientClass(repo.language).replace("from-", "bg-").replace(" to-", " ")}`}></span>
                    <span>{repo.language}</span>
                  </div>
                )}
                {/* Stars */}
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span>{repo.stargazers_count}</span>
                  </div>
                )}
                {/* Forks */}
                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    <span>{repo.forks_count}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
          {filteredRepos.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
              <p className="font-medium">No repositories found</p>
              <p className="text-sm mt-1">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>

      {/* 05 / EXPERIENCE SECTION */}
      <section id="experience" className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
        <div className="mb-10">
          <p className="text-sm font-medium text-[#4ea0e6] tracking-wide mb-2">
            05 / EXPERIENCE
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight font-serif mb-3 ${
              isDarkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            Where I&#39;ve worked
          </h2>
        </div>

  <div className="relative border-l-2 border-gray-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12 pb-4">

  {/* Job 1 */}
  <div className="relative pl-8 md:pl-12">
    <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-[#5a8ff5]"></div>
    <div className={`rounded-2xl border p-6 md:p-8 shadow-sm ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-gray-200"}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
            AA
          </div>
          <div>
            <h3 className={`text-xl font-bold font-serif ${isDarkMode ? "text-white" : "text-[#0f172a]"}`}>
              Freelance — Full-Stack Developer
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mt-1">
              <span className="text-[#4ea0e6] font-medium">Ascendens Asia</span>
              <span className="text-gray-400">•</span>
              <span className={isDarkMode ? "text-slate-400" : "text-gray-500"}>Cebu City, PH</span>
            </div>
          </div>
        </div>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${isDarkMode ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          2026 – Present
        </div>
      </div>
      <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-gray-600"}`}>
        Engaged as the sole full-stack developer on a freelance basis to build the company&#39;s enterprise HRIS platform, owning it from architecture through deployment.
      </p>
      <ul className="space-y-2 mb-6">
        {[
          "Architected and deployed the HRIS portal end to end, automating onboarding workflows and requirement tracking",
          "Built modular UI features and type-safe schemas with Angular, Laravel, and GraphQL to improve query latency",
          "Engineered a biometric attendance module with Docker, Python face verification, and device camera integration",
          "Managing containerized deployments on AWS"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className={isDarkMode ? "text-slate-400" : "text-gray-600"}>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {[ "TypeScript", "Laravel", "PostgreSQL", "Python", "Docker",  "Supabase", "TanStack Query"].map((tech) => (
          <span key={tech} className={`px-2.5 py-1 text-xs font-medium rounded-md border ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Job 2 */}
  <div className="relative pl-8 md:pl-12">
    <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-[#5a8ff5]"></div>
    <div className={`rounded-2xl border p-6 md:p-8 shadow-sm ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-gray-200"}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-xl">
            SI
          </div>
          <div>
            <h3 className={`text-xl font-bold font-serif ${isDarkMode ? "text-white" : "text-[#0f172a]"}`}>
              Intern — Fullstack Developer / IT Support
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mt-1">
              <span className="text-[#4ea0e6] font-medium">Socia I.T Solutions</span>
              <span className="text-gray-400">•</span>
              <span className={isDarkMode ? "text-slate-400" : "text-gray-500"}>Carcar Cebu City, PH</span>
            </div>
          </div>
        </div>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${isDarkMode ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          May 2026 – June 2026
        </div>
      </div>
      <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-gray-600"}`}>
        Backend development, QA, and IT support during internship. Built internal tools and maintained PHP-based systems.
      </p>
      <ul className="space-y-2 mb-6">
        {[
          "Developed backend APIs using native PHP and MySQL following modular component standards (PHP_Framecore pattern)",
          "Built and maintained internal management systems (Barangay Management, Hotel Reservation HRM)",
          "Streamlined deployment, debugging, and Git/GitHub version control workflows",
          "Reviewed commits from a QA perspective, catching functional bugs before integration"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className={isDarkMode ? "text-slate-400" : "text-gray-600"}>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {["PHP", "MySQL", "Git", "QA", "Laravel Patterns", "REST APIs"].map((tech) => (
          <span key={tech} className={`px-2.5 py-1 text-xs font-medium rounded-md border ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Job 3 */}
  <div className="relative pl-8 md:pl-12">
    <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-[#5a8ff5]"></div>
    <div className={`rounded-2xl border p-6 md:p-8 shadow-sm ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-gray-200"}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold text-xl">
            TC
          </div>
          <div>
            <h3 className={`text-xl font-bold font-serif ${isDarkMode ? "text-white" : "text-[#0f172a]"}`}>
              Intern — Fullstack Developer
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mt-1">
              <span className="text-[#4ea0e6] font-medium">Trend Company</span>
              <span className="text-gray-400">•</span>
              <span className={isDarkMode ? "text-slate-400" : "text-gray-500"}>Carcar Cebu City, PH</span>
            </div>
          </div>
        </div>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${isDarkMode ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          March 2026 – April 2026
        </div>
      </div>
      <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-gray-600"}`}>
        Full-stack development for customer-facing web applications, with a backend focus during internship. Worked on e-commerce and booking platforms.
      </p>
      <ul className="space-y-2 mb-6">
        {[
          "Designed database tables and built backend endpoints in PHP for MotorStart and BanHotel projects",
          "Developed frontend components with vanilla JavaScript and CSS for responsive UIs",
          "Took part in peer code reviews following SDLC best practices"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className={isDarkMode ? "text-slate-400" : "text-gray-600"}>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {["PHP", "MySQL", "JavaScript", "CSS", "Code Review", "E-commerce"].map((tech) => (
          <span key={tech} className={`px-2.5 py-1 text-xs font-medium rounded-md border ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>

</div>
      </section>

      {/* 06 / CONTACT SECTION */}
      <section id="contact" className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-[#4ea0e6] tracking-wide mb-2">
            06 / CONTACT
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight font-serif mb-3 ${
              isDarkMode ? "text-white" : "text-[#0f172a]"
            }`}
          >
            Let&#39;s work together
          </h2>
          <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-gray-600"} max-w-2xl mx-auto`}>
            I&#39;m currently available for full-stack and web engineering roles. If you have a project in mind or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`rounded-2xl border p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 ${isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-gray-200"}`}>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className={`text-sm font-medium ${isDarkMode ? "text-slate-400" : "text-gray-500"}`}>Email me at</span>
              <a href="mailto:bansimplified567@gmail.com" className="text-xl font-bold text-[#4ea0e6] hover:underline">
                bansimplified567@gmail.com
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/BanSimplified567"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-black"}`}
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a
                href="mailto:bansimplified567@gmail.com"
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-black"}`}
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 border-t py-10 mt-8 ${isDarkMode ? "border-slate-800 bg-slate-950/50" : "border-gray-200 bg-white/50"}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${isDarkMode ? "text-slate-500" : "text-gray-500"}`}>
            © {new Date().getFullYear()} Jade Ivan V. Bringcola. All rights reserved.
          </p>
          <p className={`text-sm flex items-center gap-1.5 ${isDarkMode ? "text-slate-500" : "text-gray-500"}`}>
            Built with <span className="font-serif italic font-bold text-[#4ea0e6]">Next.js</span> & <span className="font-serif italic font-bold text-[#4ea0e6]">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
