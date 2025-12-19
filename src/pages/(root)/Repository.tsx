
const Repository = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
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
            <option> Html, CSS, Javascript</option>
            <option>React JSX and TSX</option>
            <option>Php, Laravel </option>
            <option>Mysql, Postgres</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm">
            <option>Sort ▼</option>
            <option>Last updated</option>
            <option>Name</option>
            <option>Stars</option>
            <option>Updated</option>
            <option>Views</option>
          </select>
        </div>

        {/* Repository List */}
        <div className="space-y-8">
          {/* Repo 1 */}
          <div className="border-b border-gray-700 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  Bansimplified567 <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">My Portfolio BanSimplified</p>
              </div>
              <button className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2">
                <span>★ Star</span>
                <span>▼</span>
              </button>
            </div>
            <div className="flex gap-2 mt-4">
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
              <span>Updated 3 days ago</span>
            </div>
          </div>

          {/* Repo 2 */}
          <div className="border-b border-gray-700 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  bansimplified-boilerplate-using-react <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  ReactTSX and Supabase, Tanstack react-router and query a boilerplate template gives beginners a ready-made project setup so they can start coding immediately. It saves time, reduces errors, and hel...
                </p>
              </div>
              <button className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2">
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
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">boilerplate</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                TypeScript
              </div>
              <span>Updated 4 days ago</span>
            </div>
          </div>


           {/* Repo 3 */}
          <div className="border-b border-gray-700 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                 BanHotel <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                 BanHotel: Discover comfort and elegance, where exceptional service meets unforgettable experiences.
                </p>
              </div>
              <button className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2">
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
                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                TypeScript
              </div>
              <span>Updated 4 days ago</span>
            </div>
          </div>


           {/* Repo 4 */}
          <div className="border-b border-gray-700 pb-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-blue-400">
                  bansimplified-boilerplate-using-react <span className="text-xs bg-gray-800 px-2 py-1 rounded">Public</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  ReactTSX and Supabase, Tanstack react-router and query a boilerplate template gives beginners a ready-made project setup so they can start coding immediately. It saves time, reduces errors, and hel...
                </p>
              </div>
              <button className="border border-gray-600 rounded px-3 py-1 text-sm flex items-center gap-2">
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
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs">boilerplate</span>
            </div>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                TypeScript
              </div>
              <span>Updated 4 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
