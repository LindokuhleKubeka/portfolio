import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(saved === "true");
  }, []);

  // Update <html> class based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="max-w-4xl mx-auto p-6 flex justify-between items-center">
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
          className="px-3 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <p className="text-gray-700 dark:text-gray-300">
          Portfolio projects coming soon...
        </p>
      </main>
    </div>
  );
}
