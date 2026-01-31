import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon, BookOpen } from "lucide-react";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`border-b transition-colors duration-300 ${
      isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            isDarkMode ? "bg-blue-600" : "bg-blue-500"
          }`}>
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">GATE 2026</h1>
            <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              ECE Navigator
            </p>
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode 
              ? "bg-slate-700 hover:bg-slate-600 text-slate-200" 
              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
          }`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}