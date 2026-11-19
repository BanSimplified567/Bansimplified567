
import { useEffect, useState } from "react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function GithubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/bansimplified567/repos?sort=updated&direction=desc&per_page=100"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data: Repository[] = await response.json();

        // Exclude forked repositories
        setRepos(data.filter((repo: any) => !repo.fork));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <section>
      <h2>My GitHub Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="border rounded-xl p-5">
            <h3 className="font-bold">{repo.name}</h3>

            <p>
              {repo.description || "No description available."}
            </p>

            <div className="flex gap-4 mt-3">
              <span>{repo.language || "N/A"}</span>
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
