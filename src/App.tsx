import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(saved === "true");
  }, []);

  // Apply dark mode to <html> and save preference
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Fetch GitHub projects
  useEffect(() => {
    axios
      .get("https://api.github.com/users/LindokuhleKubeka/repos")
      .then((res) => {
        // Sort by most recently updated
        const sorted = res.data.sort(
          (a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setProjects(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">Lindokuhle Kubeka</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Final-year Software Engineering student • Java, Python, Cloud & DevOps
          </p>
          <a
            href="/LindokuhleKubeka_CV.pdf"
            download
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Download CV
          </a>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition self-start md:self-auto"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto p-6">
        {/* Featured Projects */}
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.slice(0, 3).map((proj) => (
            <a
              key={proj.id}
              href={proj.html_url}
              target="_blank"
              className="p-6 border rounded-lg shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {proj.description || "No description"}
              </p>
            </a>
          ))}
        </div>

        {/* Other Projects */}
        <h2 className="text-2xl font-semibold mb-4">Other Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(3).map((proj) => (
            <a
              key={proj.id}
              href={proj.html_url}
              target="_blank"
              className="p-4 border rounded hover:shadow-lg transition bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-bold mb-1">{proj.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {proj.description || "No description"}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
