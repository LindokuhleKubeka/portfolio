import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="max-w-4xl mx-auto p-6">
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
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <p className="text-gray-700 dark:text-gray-300">
          Portfolio projects coming soon...
        </p>
      </main>
    </div>
  );
}

