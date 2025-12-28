import AnimatedFlame from "@/assets/assets/animated-flame-01.gif";
import BorderSeparator from "@/assets/assets/borderseparator.gif";
import PixelNeon from "@/assets/assets/pixel-neon.gif";
import PixelNightBanner from "@/assets/assets/pixel-night-banner.gif";
import VaporwaveAesthetic from "@/assets/assets/vaporwave-aesthetic.gif";
import { useEffect, useState } from "react";

// Type definitions
interface ContributionDay {
  date: string;
  count: number;
  formattedDate: string;
  weekday: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface FallbackData {
  grid: ContributionDay[];
  total: number;
}

interface MonthLabel {
  month: string;
  week: number;
}

interface GitHubAPIResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              contributionCount: number;
              date: string;
              weekday: number;
            }>;
          }>;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
}

// Utility function to format dates
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Group flat days into weeks
const groupIntoWeeks = (flat: ContributionDay[]): Week[] => {
  const weeks: Week[] = [];
  let currentWeek: ContributionDay[] = [];

  // Find the first Sunday
  let firstDay = new Date(flat[0].date);
  let firstWeekday = firstDay.getDay();

  // Add empty days for the first week if it doesn't start on Sunday
  if (firstWeekday !== 0) {
    for (let i = 0; i < firstWeekday; i++) {
      const emptyDate = new Date(firstDay);
      emptyDate.setDate(emptyDate.getDate() - (firstWeekday - i));
      currentWeek.push({
        date: emptyDate.toISOString().split('T')[0],
        count: 0,
        formattedDate: formatDate(emptyDate.toISOString().split('T')[0]),
        weekday: i
      });
    }
  }

  flat.forEach((day) => {
    currentWeek.push(day);
    if (day.weekday === 6 || currentWeek.length === 7) {
      weeks.push({ contributionDays: [...currentWeek] });
      currentWeek = [];
    }
  });

  // Fill the last week if incomplete
  if (currentWeek.length > 0 && currentWeek.length < 7) {
    while (currentWeek.length < 7) {
      const lastDate = new Date(currentWeek[currentWeek.length - 1].date);
      const nextDate = new Date(lastDate);
      nextDate.setDate(nextDate.getDate() + 1);
      currentWeek.push({
        date: nextDate.toISOString().split('T')[0],
        count: 0,
        formattedDate: formatDate(nextDate.toISOString().split('T')[0]),
        weekday: currentWeek.length
      });
    }
    weeks.push({ contributionDays: [...currentWeek] });
  }

  return weeks;
};

// Contribution Graph Component with full GitHub API integration
const ContributionGraph = () => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState<boolean>(false);

  // Get environment variables
  const username = import.meta.env.VITE_GITHUB_USERNAME || "BanSimplified567";
  const apiToken = import.meta.env.VITE_GITHUB_API_TOKEN;

  // Your actual contribution data extracted from HTML (fallback)
  const fallbackData2025: FallbackData = {
    grid: [
      // Week 0: December 22-28, 2024
      { date: "2024-12-22", count: 0, formattedDate: "December 22, 2024", weekday: 0 },
      { date: "2024-12-23", count: 0, formattedDate: "December 23, 2024", weekday: 1 },
      { date: "2024-12-24", count: 2, formattedDate: "December 24, 2024", weekday: 2 },
      { date: "2024-12-25", count: 0, formattedDate: "December 25, 2024", weekday: 3 },
      { date: "2024-12-26", count: 1, formattedDate: "December 26, 2024", weekday: 4 },
      { date: "2024-12-27", count: 2, formattedDate: "December 27, 2024", weekday: 5 },
      { date: "2024-12-28", count: 8, formattedDate: "December 28, 2024", weekday: 6 },
      // Add more data as needed...
      { date: "2025-12-20", count: 0, formattedDate: "December 20, 2025", weekday: 6 },
      { date: "2025-12-21", count: 0, formattedDate: "December 21, 2025", weekday: 0 },
    ],
    total: 364
  };

  useEffect(() => {
    const fetchData = async () => {
      if (apiToken) {
        await fetchGitHubContributions();
      } else {
        // Use fallback data if no API token
        console.log("No GitHub API token found. Using fallback data.");
        setUsingFallback(true);
        loadFallbackData();
      }
    };

    fetchData();
  }, [selectedYear]);

  // GitHub GraphQL API Query
  const fetchGitHubContributions = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    setUsingFallback(false);

    try {
      const fromDate = `${selectedYear}-01-01T00:00:00Z`;
      const toDate = `${selectedYear}-12-31T23:59:59Z`;

      const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    weekday
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: {
            username,
            from: fromDate,
            to: toDate
          }
        })
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const result: GitHubAPIResponse = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      const data = result.data.user.contributionsCollection.contributionCalendar;
      setTotalContributions(data.totalContributions);

      // Transform and organize the data properly
      const transformedWeeks: Week[] = data.weeks.map(week => ({
        contributionDays: week.contributionDays.map(day => ({
          date: day.date,
          count: day.contributionCount,
          formattedDate: formatDate(day.date),
          weekday: day.weekday
        }))
      }));

      setWeeks(transformedWeeks);

    } catch (err) {
      console.error("Error fetching GitHub data:", err);
      setError(`Using fallback data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setUsingFallback(true);
      loadFallbackData();
    } finally {
      setIsLoading(false);
    }
  };

  const loadFallbackData = (): void => {
    let grid: ContributionDay[];
    let total: number;
    if (selectedYear === 2025) {
      ({ grid, total } = fallbackData2025);
    } else {
      ({ grid, total } = generateRealisticData(selectedYear));
    }
    const groupedWeeks = groupIntoWeeks(grid);
    setWeeks(groupedWeeks);
    setTotalContributions(total);
    setIsLoading(false);
  };

  const generateRealisticData = (year: number): { grid: ContributionDay[], total: number } => {
    const grid: ContributionDay[] = [];
    let total = 0;
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    // Adjust start date to nearest Sunday
    const startDay = startDate.getDay();
    const adjustedStartDate = new Date(startDate);
    adjustedStartDate.setDate(startDate.getDate() - startDay);

    // Generate 371 days (53 weeks * 7 days) to cover the entire year
    for (let d = 0; d < 371; d++) {
      const date = new Date(adjustedStartDate);
      date.setDate(date.getDate() + d);
      const dateStr = date.toISOString().split('T')[0];
      const weekday = date.getDay();

      // Only count contributions for the actual year
      let count = 0;
      if (date >= startDate && date <= endDate) {
        const rand = Math.random();
        if (rand > 0.9) count = Math.floor(Math.random() * 5) + 5;
        else if (rand > 0.7) count = Math.floor(Math.random() * 4) + 1;
        else if (rand > 0.4) count = 1;
        else count = 0;
      }

      grid.push({
        date: dateStr,
        count,
        formattedDate: formatDate(dateStr),
        weekday
      });
      total += count;
    }
    return { grid, total };
  };

  const getContributionColor = (count: number): string => {
    if (count === 0) return "bg-[#161b22] hover:bg-[#0d1117]";
    if (count < 3) return "bg-[#0e4429] hover:bg-[#006d32]";
    if (count < 6) return "bg-[#006d32] hover:bg-[#26a641]";
    if (count < 10) return "bg-[#26a641] hover:bg-[#39d353]";
    return "bg-[#39d353] hover:bg-[#56d364]";
  };

  const getMonthLabels = (weeks: Week[]): MonthLabel[] => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const labels: MonthLabel[] = [];
    const seen = new Set<number>();

    weeks.forEach((week, weekIndex) => {
      const firstDay = week.contributionDays[0];
      if (firstDay) {
        const month = new Date(firstDay.date).getMonth();
        if (!seen.has(month) || (weekIndex % 4 === 0 && labels.length < months.length)) {
          seen.add(month);
          labels.push({ month: months[month], week: weekIndex });
        }
      }
    });

    return labels;
  };

  const monthLabels = getMonthLabels(weeks);
  const numWeeks = weeks.length;

  return (
    <div className="mt-8 p-6 border border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">
            { isLoading ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></span>
                Loading contributions...
              </span>
            ) : (
              <span>
                { totalContributions.toLocaleString() } contributions in { selectedYear }
              </span>
            ) }
          </h3>

          {/* Contribution Legend */ }
          <div className="flex items-center gap-3 mt-2">
            <span className="text-sm text-gray-400">Less</span>
            <div className="flex gap-1">
              { [0, 1, 3, 6, 10].map((count, idx) => (
                <div
                  key={ idx }
                  className={ `w-4 h-4 rounded-sm ${getContributionColor(count)} border border-gray-800` }
                  title={ `${count} ${count === 1 ? 'contribution' : 'contributions'}` }
                  aria-label={ `${count} contributions color` }
                ></div>
              )) }
            </div>
            <span className="text-sm text-gray-400">More</span>
          </div>

          {/* Status Messages */ }
          <div className="mt-2 space-y-1">
            { usingFallback && (
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-yellow-400">
                  Using fallback data { apiToken ? '(API error)' : '(no API token configured)' }
                </span>
              </div>
            ) }
            { error && (
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-red-400">{ error }</span>
              </div>
            ) }
            { !isLoading && !usingFallback && apiToken && (
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400">Live GitHub data</span>
              </div>
            ) }
          </div>
        </div>

        {/* Year Selector */ }
        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={ selectedYear }
              onChange={ (e) => setSelectedYear(parseInt(e.target.value)) }
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8"
              disabled={ isLoading }
            >
              { [2025, 2024, 2023, 2022].map(year => (
                <option key={ year } value={ year }>{ year }</option>
              )) }
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          { apiToken && !usingFallback && !isLoading && (
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Live
            </span>
          ) }
        </div>
      </div>

      { isLoading ? (
        <div className="bg-gray-800 p-6 rounded-lg animate-pulse">
          <div className="flex gap-6 mb-4">
            {/* Day labels skeleton */ }
            <div className="flex flex-col gap-1 w-8">
              { Array.from({ length: 7 }).map((_, i) => (
                <div key={ i } className="h-4 bg-gray-700 rounded w-6"></div>
              )) }
            </div>
            {/* Grid skeleton */ }
            <div className="grid grid-flow-col grid-rows-7 gap-1 flex-1">
              { Array.from({ length: 371 }).map((_, i) => (
                <div key={ i } className="w-4 h-4 bg-gray-700 rounded-sm"></div>
              )) }
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg">
          {/* Month Labels */ }
          <div className="flex gap-6 mb-2 ml-8">
            { monthLabels.map((label, index) => {
              // Calculate approximate column position
              const colStart = label.week + 1;
              return (
                <div
                  key={ index }
                  className="text-xs text-gray-400 min-w-[16px]"
                  style={ { gridColumn: colStart } }
                >
                  { label.month }
                </div>
              );
            }) }
          </div>

          {/* Contribution Grid */ }
          <div className="flex gap-6">
            {/* Day of week labels */ }
            <div className="flex flex-col gap-1 text-xs text-gray-400 w-8">
              <div className="h-4"></div>
              { ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'].map((day, i) => (
                <div key={ i } className="h-4 flex items-center justify-end pr-1">
                  { day }
                </div>
              )) }
            </div>

            {/* Contribution squares */ }
            <div className="flex-1 overflow-x-auto">
              <div className="inline-flex gap-1">
                { weeks.map((w, i) => (
                  <div key={ i } className="flex flex-col gap-1">
                    { w.contributionDays.map((d, j) => (
                      <div key={ `${i}-${j}` } className={ `h-4 w-4 rounded-sm ${getContributionColor(d.count)} cursor-pointer transition-colors duration-200` } title={ `${d.count} ${d.count === 1 ? 'contribution' : 'contributions'} on ${d.formattedDate}` } />
                    )) }
                  </div>
                )) }
              </div>
            </div>
          </div>
        </div>
      ) }

      {/* Activity Overview */ }
      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
        <h4 className="font-semibold mb-3 text-lg">Activity overview</h4>
        <p className="text-sm text-gray-300 mb-2">
          <strong>Contributed to</strong> BanSimplified567/bansimplified-boilerplate-using-react,
          BanSimplified567/BanHotel, BanSimplified567/BanSimplified567 and 23 other repositories
        </p>
        <div className="mt-3 text-xs text-gray-400 flex items-center gap-2">
          { apiToken ? (
            <>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Data source: GitHub API</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span>
                Add VITE_GITHUB_API_TOKEN to .env.local for live data
              </span>
            </>
          ) }
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="font-sans p-5 max-w-6xl mx-auto">
      <div className="">
        {/* Separator */ }
        <img src={ BorderSeparator } className="w-full" alt="separator" />

        {/* Title Section */ }
        <div className="text-center my-5">
          <h2 className="flex items-center justify-center gap-2.5">
            <img src={ AnimatedFlame } className="w-[14px]" alt="flame" />
            Full-Stack Developer • Frontend-Enthusiast
            <img src={ AnimatedFlame } className="w-[14px]" alt="flame" />
          </h2>
          {/* Wakatime Badge */ }
          <div className="text-center mb-5">
            <img
              src="https://wakatime.com/badge/user/018c974d-1366-4d7f-9b95-0e80821d2165.svg"
              alt="wakatime"
              className="inline-block"
            />
          </div>
        </div>

        <img src={ BorderSeparator } className="w-full" alt="separator" />
      </div>

      {/* Banner */ }
      <div className="mb-5">
        <img src={ PixelNightBanner } alt="Banner" className="w-full block" />
      </div>

      {/* About Me Section */ }
      <div className="my-10 p-5 flex max-w-sm:flex-col md:flex-row gap-6 items-center">

        {/* Text Container */ }
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">👨‍💻 About Me</h3>
          <ul className="list-disc list-outside ml-5 leading-relaxed space-y-2 text-sm md:text-base">
            <li>
              I'm <strong>Jade Ivan (Bansimplified)</strong> — an IT (Programming) student from the Philippines.
            </li>
            <li>
              Actively enhancing my software engineering foundation across <strong>frontend, backend, and full-stack workflows</strong>.
            </li>
            <li>Passionate about building scalable web systems, UI engineering, and modern development tooling.</li>
            <li>
              <strong>Decade Goal:</strong> Become a full-fledged Software Engineer.
            </li>
            <li>
              <strong>Interests include:</strong> Coffee, learning new frameworks, and creative coding.
            </li>
            <li>
              <strong>Hobbies: </strong> Reading manga/manhwa, drawing, and exploring digital storytelling.
            </li>
          </ul>

          <p className="mt-5 text-sm md:text-base">
            <strong>📄 Resume:</strong>{ ' ' }
            <a href="/resume.pdf" className="text-[#FE428E] hover:underline">
              Download Resume
            </a>
          </p>
        </div>
        {/* Image Container */ }
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">
          <img
            src={ VaporwaveAesthetic }
            alt="pixel city image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>


      {/* Education and Connection Section */ }
      <div className="text-center my-10">
        <img src={ BorderSeparator } className="w-full" alt="separator" />
        <h2 className="my-5">
          <img src={ AnimatedFlame } className="w-4 mx-2.5 inline" alt="flame" />
          <strong>📚 Education and Connection</strong>
          <img src={ AnimatedFlame } className="w-4 mx-2.5 inline" alt="flame" />
        </h2>

        <div className="flex justify-center flex-wrap gap-2.5 my-5">
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=naviedaj567@gmail.com&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="gmail logo" />
          </a>
          <a href="https://www.facebook.com/his.bannie" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=Facebook&logo=facebook&label=&color=1877F2&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="facebook logo" />
          </a>
          <a href="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="linkedin logo" />
          </a>
          <a href="https://www.instagram.com/his.bannie/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=his.bannie&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="instagram logo" />
          </a>
          <a href="https://www.youtube.com/@KnownAsBanBan" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=Youtube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="youtube logo" />
          </a>
          <a href="https://twitter.com/JBringcola" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=Twitter&logo=twitter&label=&color=1DA1F2&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="twitter logo" />
          </a>
        </div>
      </div>

      {/* Pixel Image */ }
      <div className="text-center my-5">
        <img src={ PixelNeon } alt="pixel guy using computer" className="w-full" />
      </div>

      {/* Technologies and Skills Section */ }
      <div className="my-10">
        <div className="text-center">
          <img src={ BorderSeparator } className="w-full" alt="separator" />
          <h2 className="my-5">
            <img src={ AnimatedFlame } className="w-4 mx-2.5 inline" alt="flame" />
            <strong>⚙️ Technologies and Skills</strong>
            <img src={ AnimatedFlame } className="w-4 mx-2.5 inline" alt="flame" />

          </h2>
          <img src={ BorderSeparator } className="w-full" alt="separator" />
        </div>

        <div className="my-5">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="p-[10px] font-bold">Frontend</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,vite,tailwind,bootstrap,jquery&theme=dark" alt="frontend icons" />
                </td>
              </tr>
              <tr>
                <td className="p-[10px] font-bold">Backend & Tools</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=php,mysql,laravel,postgres,supabase&theme=dark" alt="backend icons" />
                </td>
              </tr>
              <tr>
                <td className="p-[10px] font-bold">Dev Tools & Others</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=git,github,docker,vscode,npm,ai&theme=dark" alt="dev tools icons" />
                </td>
              </tr>
              <tr>
                <td className="p-[10px] font-bold">Operating Systems</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=windows,debian,linux,mint,ubuntu&theme=dark" alt="os icons" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <img src={ BorderSeparator } className="w-full" alt="separator" />

      {/* Github Stats Section */ }
      <div className="text-center">
        <h2 className="my-6 flex items-center justify-center gap-2 text-xl font-bold">
          <img src={ AnimatedFlame } className="w-5" alt="flame" />
          <span>🏆 My GitHub Stats</span>
          <img src={ AnimatedFlame } className="w-5" alt="flame" />
        </h2>

        <img
          src={ BorderSeparator }
          className="mx-auto my-4 w-full max-w-3xl"
          alt="separator"
        />

        {/* 2-column layout: stacked on mobile, side-by-side on md+ */ }
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 my-6 max-w-5xl mx-auto">
          <a
            href="https://wakatime.com/@BanBan"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <embed
              src="https://wakatime.com/share/@BanBan/b59981cd-bda4-4e6a-a565-42222452b114.svg"
              className="w-full h-auto"
              title="Wakatime Language Stats"
            />
          </a>

          <a
            href="https://wakatime.com/@BanBan"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="https://wakatime.com/share/@BanBan/3fd3ecfd-d242-4382-b6bf-a8d9ec737103.png"
              alt="Wakatime Weekly Coding Activity"
              className="w-full h-auto"
            />
          </a>
        </div>
        <div className="mt-6">
          <a
            href="https://wakatime.com/@BanBan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=BanSimplified567&custom_title=BanSimplified567's%20GitHub%20Activity%20Graph&bg_color=141321&color=A9FEF7&line=626069&point=F8D847&area_color=FE428E&title_color=FE428E&area=true"
              alt="GitHub Activity Graph"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://wakatime.com/@BanBan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://wakatime.com/share/@BanBan/382532ff-5057-45a2-b975-14ab938e7e7c.png"
              alt="Wakatime coding stats"
              className="w-full h-auto"
            />
          </a>
        </div>
      </div>



      {/* Pinned Repositories Section */ }
      <div className="my-10">
        <div className="text-center">
          <img src={ BorderSeparator } className="w-full" alt="separator" />
          <h2 className="my-5 flex items-center justify-center gap-4">
            <img src={ AnimatedFlame } className="w-4" alt="flame" />
            📌 Pinned Repositories
            <img src={ AnimatedFlame } className="w-4" alt="flame" />
          </h2>
          <img src={ BorderSeparator } className="w-full" alt="separator" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {/* Repository 1 */ }
          <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <a
                href="https://github.com/BanSimplified567/bansimplified-boilerplate-using-react"
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                bansimplified-boilerplate-using-react
              </a>
              <span className="text-xs border border-gray-600 px-2 py-1 rounded-full">Public</span>
            </div>
            <p className="text-gray-300 text-xs mb-3">
              ReactTSX and Supabase, Tanstack react-router and query a boilerplate template gives beginners a ready-made project setup so they can start coding immediately.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>TypeScript</span>
              </div>
            </div>
          </div>

          {/* Repository 2 */ }
          <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <a
                href="https://github.com/BanSimplified567/BanHotel"
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                BanHotel
              </a>
              <span className="text-xs border border-gray-600 px-2 py-1 rounded-full">Public</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              BanHotel: Discover comfort and elegance, where exceptional service meets unforgettable experiences.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">↑1</span>
              </div>
            </div>
          </div>

          {/* Repository 3 */ }
          <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <a
                href="https://github.com/BanSimplified567/BanSimplified567"
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                BanSimplified567
              </a>
              <span className="text-xs border border-gray-600 px-2 py-1 rounded-full">Public</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">

              My Portfolio BanSimplified
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">↑1</span>
              </div>
            </div>
          </div>

          {/* Repository 4 */ }
          <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <a
                href="https://github.com/BanSimplified567/pizzaban"
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                pizzaban
              </a>
              <span className="text-xs border border-gray-600 px-2 py-1 rounded-full">Public</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Welcome to Pizzaban! Enjoy the best pizza in town, crafted with fresh ingredients and served with a smile. Taste the difference at Pizzaban!
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">↑1</span>
              </div>
            </div>
          </div>

          {/* Repository 5 */ }
          <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <a
                href="https://github.com/BanSimplified567/Bulb-Switch"
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bulb-Switch
              </a>
              <span className="text-xs border border-gray-600 px-2 py-1 rounded-full">Public</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our School Activity Bulb-Switch
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">↑1</span>
              </div>
            </div>
          </div>

          {/* Repository 6 */ }
          <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <a
                href="https://github.com/BanSimplified567/Birthday-Gift"
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Birthday-Gift
              </a>
              <span className="text-xs border border-gray-600 px-2 py-1 rounded-full">Public</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              My Birthday Gift For You
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">↑9</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">↑22</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Graph */ }
        <div className="mt-8">
          <div className="text-center">
            <img src={ BorderSeparator } className="w-full" alt="separator" />
            <h2 className="my-5 flex items-center justify-center gap-4">
              <img src={ AnimatedFlame } className="w-4" alt="flame" />
              📊 GitHub Contribution Activity
              <img src={ AnimatedFlame } className="w-4" alt="flame" />
            </h2>
          </div>

          {/* Updated Contribution Graph */ }
          <ContributionGraph />
        </div>
      </div>

      <img src={ BorderSeparator } className="w-full" alt="separator" />
    </div>
  );
};

export default Index;
