import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { questionsData } from "../data/questions";
import { logAttempt, loadAttempts } from "../utils/localStorage";
import { Check, X, Lightbulb, RotateCcw } from "lucide-react";

interface Attempt {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  timestamp: number;
}

export default function DailyQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(questionsData[0]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  useEffect(() => {
    // Get today's question based on date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const questionIndex = dayOfYear % questionsData.length;
    setCurrentQuestion(questionsData[questionIndex]);

    // Load previous attempts for this question
    const allAttempts = loadAttempts();
    const questionAttempts = allAttempts.filter(a => a.questionId === currentQuestion.id);
    setAttempts(questionAttempts);
  }, []);

  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return;
    setSelectedOption(optionIndex);
  };

  const handleRevealAnswer = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correctOption;
    const attempt: Attempt = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect,
      timestamp: Date.now()
    };
    
    logAttempt(attempt);
    setAttempts([...attempts, attempt]);
    setShowAnswer(true);
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const getOptionStyle = (index: number) => {
    if (!showAnswer) {
      return selectedOption === index 
        ? "border-blue-500 bg-blue-50" 
        : "border-slate-200 hover:border-slate-300";
    }
    
    if (index === currentQuestion.correctOption) {
      return "border-emerald-500 bg-emerald-50";
    }
    if (selectedOption === index && index !== currentQuestion.correctOption) {
      return "border-red-500 bg-red-50";
    }
    return "border-slate-200 opacity-50";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">Daily Practice</CardTitle>
            <CardDescription>One high-yield question every day</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              currentQuestion.difficulty === "Easy" ? "bg-emerald-100 text-emerald-700" :
              currentQuestion.difficulty === "Medium" ? "bg-amber-100 text-amber-700" :
              "bg-red-100 text-red-700"
            }`}>
              {currentQuestion.difficulty}
            </span>
            <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">
              {currentQuestion.topic}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <p className="text-lg font-medium leading-relaxed">{currentQuestion.question}</p>
          </div>
          
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={showAnswer}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                  getOptionStyle(index)
                } ${showAnswer ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {showAnswer && index === currentQuestion.correctOption && (
                    <Check className="w-5 h-5 text-emerald-600 ml-auto" />
                  )}
                  {showAnswer && selectedOption === index && index !== currentQuestion.correctOption && (
                    <X className="w-5 h-5 text-red-600 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {showAnswer && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900 mb-1">Explanation</p>
                  <p className="text-blue-800">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            {!showAnswer ? (
              <Button 
                onClick={handleRevealAnswer}
                disabled={selectedOption === null}
                className="flex-1"
              >
                Reveal Answer
              </Button>
            ) : (
              <Button 
                onClick={handleTryAgain}
                variant="outline"
                className="flex-1"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            )}
          </div>

          {attempts.length > 0 && (
            <div className="pt-4 border-t">
              <p className="text-sm text-slate-500 mb-2">
                Your attempts: {attempts.filter(a => a.isCorrect).length}/{attempts.length} correct
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}