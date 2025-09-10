import { useState, useEffect } from "react";

interface GithubProject {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(saved === "true");
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // WethinkCode private projects
  const privateProjects = [
    {
      id: 1,
      name: "Robot World Simulation",
      description: "Final-year WethinkCode project: Robot commands simulation using Java.",
      tools: ["Java", "OOP", "APIs"],
    },
    {
      id: 2,
      name: "Brewery Database",
      description: "Java project demonstrating SQL & ORM integration.",
      tools: ["Java", "SQL", "ORM"],
    },
    {
      id: 3,
      name: "DevOps CI/CD Pipeline",
      description: "CI/CD project with Docker, Kubernetes & GitHub Actions.",
      tools: ["Docker", "Kubernetes", "GitHub Actions"],
    },
  ];

  // Fetch GitHub projects
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/LindokuhleKubeka/repos");
        const data = await res.json();
        setGithubProjects(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-6">Hello Portfolio</h1>

      <div className="text-center mb-8">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* WethinkCode Projects */}
      <h2 className="text-2xl font-semibold mb-4">WethinkCode Projects (Private)</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {privateProjects.map((proj) => (
          <div
            key={proj.id}
            className="p-4 border rounded hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800"
          >
            <h3 className="text-lg font-bold mb-1">{proj.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {proj.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs dark:bg-indigo-800 dark:text-indigo-100"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Projects */}
      <h2 className="text-2xl font-semibold mb-4">GitHub Projects (Public)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {githubProjects.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="p-4 border rounded hover:shadow-lg transform hover:scale-105 transition-all duration-300 block bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-bold mb-1">{repo.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {repo.description || "No description"}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

