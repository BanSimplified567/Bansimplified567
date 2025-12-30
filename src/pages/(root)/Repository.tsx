interface RepositoryUrls {
  [key: number]: string;
}

const Repository = () => {
  // Define repository URLs (GitHub URLs as an example)
  const repositoryUrls: RepositoryUrls = {
    1: "https://github.com/BanSimplified567/Bansimplified567",
    2: "https://github.com/BanSimplified567/bansimplified-boilerplete-using-react",
    3: "https://github.com/BanSimplified567/Collected-Tips-And-Tricks-by-Known-as-BanBan",
    4: "https://github.com/BanSimplified567/BanHotel",
    5: "https://github.com/BanSimplified567/POS-Coffee-Shop-Management",
    6: "https://github.com/BanSimplified567/Projects-For-Beginners",
    7: "https://github.com/BanSimplified567/Leonard-Portfolio",
    8: "https://github.com/BanSimplified567/Barangay_Management",
    9: "https://github.com/BanSimplified567/Learn-Tracking",
    10: "https://github.com/BanSimplified567/Practice-TanstackTSX",
    11: "https://github.com/BanSimplified567/30Days_Javascript_For_Beginners",
    12: "https://github.com/BanSimplified567/WatchWrist-E-Commerce",
    13: "https://github.com/BanSimplified567/Learning-React",
    14: "https://github.com/BanSimplified567/CosmicBeauty",
    15: "https://github.com/BanSimplified567/LUXESTORE",
    16: "https://github.com/BanSimplified567/GYM-Business",
    17: "https://github.com/BanSimplified567/JavaScript-Tutorial-Filipino-Cebuano",
    18: "https://github.com/BanSimplified567/Cpp-School-Activity",
    19: "https://github.com/BanSimplified567/Confession",
    20: "https://github.com/BanSimplified567/Birthday-Gift",
    21: "https://github.com/BanSimplified567/Weather-API",
    22: "https://github.com/BanSimplified567/10-JavaScript-Array-Functions-You-Should-Master-as-a-Senior-Dev",
    23: "https://github.com/BanSimplified567/pizzaban",
    24: "https://github.com/BanSimplified567/Calculator",
    25: "https://github.com/BanSimplified567/Bulb-Switch",
    26: "https://github.com/BanSimplified567/pizzaban-store"
  };

  const handleRepositoryClick = (repoId: number): void => {
    const url = repositoryUrls[repoId];
    if (url) {
      window.open(url, '_blank'); // Opens in a new tab
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */ }
        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Find a repository..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm"
          />
          <select className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm">
            <option>Type</option>
            <option>All</option>
            <option>Public</option>
            <option>Private</option>
            <option>Sources</option>
            <option>Forks</option>
            <option>Archived</option>
            <option>Mirrors</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm">
            <option>Language</option>
            <option>All</option>
            <option>JavaScript</option>
            <option>TypeScript</option>
            <option>CSS</option>
            <option>HTML</option>
            <option>C++</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm">
            <option>Sort ▼</option>
            <option>Last updated</option>
            <option>Name</option>
            <option>Stars</option>
          </select>
        </div>

        {/* Repository List */ }
        <div className="space-y-8">
          {/* Repo 1 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(1) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Bansimplified567 <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">My Portfolio BanSimplified</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">react</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">resume</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">website</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">application</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">deployment</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">frontend</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">skills</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                JavaScript
              </div>
              <span>☆ 1</span>
              <span>Updated 5 days ago</span>
            </div>
          </div>

          {/* Repo 2 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(2) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  bansimplified-boilerplete-using-react <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">ReactTSX and Supabase, Tanstack react-router and query a boilerplate template gives beginners a ready-made project setup so they can start coding immediately. It saves time, reduces errors, and hel…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">react</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">open-source</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">reactjs</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">tsx</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">learners</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">boilertemplate</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                TypeScript
              </div>
              <span>Updated 5 days ago</span>
            </div>
          </div>

          {/* Repo 3 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(3) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Collected-Tips-And-Tricks-by-Known-as-BanBan <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Hey fellow beginner developers! I created this repository to share useful tips, best practices, and beginner-friendly code snippets to help you on your coding journey. Whether it's version control,…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">article</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">projects</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">software-engineering</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">tips-and-tricks</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">beginner-friendly</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">html-css-javascript</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>☆ 1</span>
              <span>Updated 15 days ago</span>
            </div>
          </div>

          {/* Repo 4 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(4) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  BanHotel <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">BanHotel: Discover comfort and elegance, where exceptional service meets unforgettable experiences.</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">react</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">basic</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">website</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">ui-design</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">web-development</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">frontend</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">interface</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                JavaScript
              </div>
              <span>☆ 1</span>
              <span>Updated 24 days ago</span>
            </div>
          </div>

          {/* Repo 5 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(5) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  POS-Coffee-Shop-Management <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">FEEL FREE TO CONTACT ME IslaDelCafe is an all-in-one coffee shop management system designed to streamline operations, from product inventory and order processing to sales tracking and admin control…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">php</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">sql</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">reactjs</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">chartjs</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">pos</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">software-engineering</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>☆ 1</span>
              <span>Updated 4 months ago</span>
            </div>
          </div>

          {/* Repo 6 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(6) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Projects-For-Beginners <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>Updated 7 months ago</span>
            </div>
          </div>

          {/* Repo 7 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(7) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Leonard-Portfolio <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Portfolio</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span>
                CSS
              </div>
              <span>Updated 8 months ago</span>
            </div>
          </div>

          {/* Repo 8 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(8) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Barangay_Management <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Barangay Management System A web-based system designed to streamline barangay operations, including resident records management, permit issuance, incident reporting, and document processing. This s…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">php</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">mysql-database</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">software-engineering</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">html-css-javascript</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">management-system</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">webdevelopment</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>Updated 10 months ago</span>
            </div>
          </div>

          {/* Repo 9 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(9) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Learn-Tracking <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Tracking my progress helps me stay motivated, disciplined, and focused. Here's why I decided to create this Code Learning Tracker: It's not…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">website</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">tracking</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">roadmap</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">journey</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">coding</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">front-end-development</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>☆ 1</span>
              <span>Updated 10 months ago</span>
            </div>
          </div>

          {/* Repo 10 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(10) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Practice-TanstackTSX <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Practice TanStack with React, Vite, and TypeScript to build fast, type-safe apps. Leverage tools like TanStack Query for data management and Vite for a streamlined development experience.</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">json</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">data</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">query</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">router</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">reactjs</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">exercise</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                TypeScript
              </div>
              <span>☆ 1</span>
              <span>Updated 11 months ago</span>
            </div>
          </div>

          {/* Repo 11 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(11) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  30Days_Javascript_For_Beginners <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Welcome to my 30 Days of JavaScript for Beginners program! This project represents the knowledge and skills I've gained during my first two years of learning how to code as a beginner. It's not…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">javascript</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">promises</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">tutorial</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">js</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">projects</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">fundamentals</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>☆ 1</span>
              <span>Updated 11 months ago</span>
            </div>
          </div>

          {/* Repo 12 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(12) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  WatchWrist-E-Commerce <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Explore our collection of premium watches for sale, featuring a wide variety of stylish and functional timepieces. Whether you're looking for something elegant for a special occasion or a durable e…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">ecommerce</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">shopping-cart</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">shop</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">dynamic</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">html-css-javascript</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">website-template</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span>
                CSS
              </div>
              <span>☆ 1</span>
              <span>Updated 11 months ago</span>
            </div>
          </div>

          {/* Repo 13 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(13) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Learning-React <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Learning React</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">react</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">learning</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">hooks</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">jsx</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">reactjs</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practices</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                JavaScript
              </div>
              <span>☆ 1</span>
              <span>Updated 11 months ago</span>
            </div>
          </div>

          {/* Repo 14 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(14) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  CosmicBeauty <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 15 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(15) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  LUXESTORE <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">My first online commission as a freelance web developer was to create a static business website, Luxestore, for a school activity. It's never expected that my client would be a WordPress UI/UX designer.</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">website</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">ecommerce</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">frontend</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">projects</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">static</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">activity</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
                HTML
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 16 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(16) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  GYM-Business <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">html</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">static</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">raw</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">commission</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">number-one</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
                HTML
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 17 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(17) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  JavaScript-Tutorial-Filipino-Cebuano <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Introduction to JavaScript Basics Tutorial Welcome to this JavaScript Basics Tutorial! This guide is designed to help you understand the core fundamentals of JavaScript, one of the most powerful an…</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">javascript</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">website</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">tutorial</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">web-development</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">database</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">beginner-friendly</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                JavaScript
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 18 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(18) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Cpp-School-Activity <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Cpp-School-Activity</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">students</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">calculator</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">cplusplus</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">cpp</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">calculations</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">activity</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-pink-500 rounded-full inline-block"></span>
                C++
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 19 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(19) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Confession <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Confession To Your Crush</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">music</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">html-css-javascript</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">confession</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice-project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">codingfun</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                JavaScript
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 20 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(20) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Birthday-Gift <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">My Birthday Gift For You</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">coding</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">html-css-javascript</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">birthday</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">birthday-wishes</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">happy-birthday</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
                HTML
              </div>
              <span>☆ 9</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 21 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(21) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Weather-API <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Weather-API</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                JavaScript
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 22 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(22) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  10-JavaScript-Array-Functions-You-Should-Master-as-a-Senior-Dev <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 23 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(23) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  pizzaban <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Welcome to PizzaBan! Enjoy the best pizza in town, crafted with fresh ingredients and served with a smile. Taste the difference at PizzaBan!</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">react</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">website</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">ecommerce</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">store</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">pizza</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">software-engineering</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">ecommerce-website</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                JavaScript
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 24 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(24) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Calculator <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Basic Calculator using React</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">react</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">basic</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">calculator</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">practice</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">coding</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">html-css-javascript</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span>
                CSS
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 25 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(25) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Bulb-Switch <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Our School Activity Bulb-Switch</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">jquery</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">development</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">frontend</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">school-project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">switch</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">activity</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">bulb</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
                HTML
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>

          {/* Repo 26 */ }
          <div
            className="border-b border-gray-700 pb-8 cursor-pointer hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
            onClick={ () => handleRepositoryClick(26) }
          >
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  pizzaban-store <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">Welcome to PizzaBan! Enjoy the best pizza in town, crafted with fresh ingredients and served with a smile. Taste the difference at PizzaBan! using RAW Code</p>
              </div>
              <button
                className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2"
                onClick={ (e) => e.stopPropagation() }
              >
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">mysql</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">learning</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">php</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">database</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">store</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">project</span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">activity</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span>
                CSS
              </div>
              <span>☆ 1</span>
              <span>Updated 1 year ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
