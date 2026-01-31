import { useState } from "react";
import Header from "./components/Header";
import StudyTracker from "./components/StudyTracker";
import DailyQuestion from "./components/DailyQuestion";
import FormulaSheet from "./components/FormulaSheet";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <StudyTracker />
        <DailyQuestion />
        <FormulaSheet />
      </main>
    </div>
  );
}

export default App;