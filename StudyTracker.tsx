import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { syllabusData } from "../data/syllabus";
import { saveProgress, loadProgress } from "../utils/localStorage";
import { ChevronDown, ChevronRight, Check, Circle } from "lucide-react";
import type { ProgressState } from "../types";

interface SubjectProgress {
  completed: number;
  total: number;
  percentage: number;
}

export default function StudyTracker() {
  const [progress, setProgress] = useState<ProgressState>({});
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());
  const [subjectProgress, setSubjectProgress] = useState<Record<string, SubjectProgress>>({});

  useEffect(() => {
    const saved = loadProgress();
    setProgress(saved);
    
    // Calculate progress for each subject
    const progressMap: Record<string, SubjectProgress> = {};
    syllabusData.forEach(subject => {
      const completedTopics = subject.topics.filter(topic => saved[topic.id]).length;
      progressMap[subject.id] = {
        completed: completedTopics,
        total: subject.topics.length,
        percentage: Math.round((completedTopics / subject.topics.length) * 100)
      };
    });
    setSubjectProgress(progressMap);
  }, []);

  const toggleSubject = (subjectId: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subjectId)) {
      newExpanded.delete(subjectId);
    } else {
      newExpanded.add(subjectId);
    }
    setExpandedSubjects(newExpanded);
  };

  const toggleTopic = (topicId: string) => {
    const newProgress = { ...progress, [topicId]: !progress[topicId] };
    setProgress(newProgress);
    saveProgress(newProgress);

    // Recalculate subject progress
    const progressMap: Record<string, SubjectProgress> = {};
    syllabusData.forEach(subject => {
      const completedTopics = subject.topics.filter(topic => newProgress[topic.id]).length;
      progressMap[subject.id] = {
        completed: completedTopics,
        total: subject.topics.length,
        percentage: Math.round((completedTopics / subject.topics.length) * 100)
      };
    });
    setSubjectProgress(progressMap);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage === 0) return "bg-slate-200";
    if (percentage < 50) return "bg-amber-400";
    if (percentage < 100) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const overallProgress = Object.values(subjectProgress).reduce(
    (acc, curr) => acc + curr.completed,
    0
  );
  const overallTotal = Object.values(subjectProgress).reduce(
    (acc, curr) => acc + curr.total,
    0
  );
  const overallPercentage = overallTotal > 0 ? Math.round((overallProgress / overallTotal) * 100) : 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">Study Tracker</CardTitle>
            <CardDescription>Track your progress across the GATE ECE syllabus</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">{overallPercentage}%</div>
            <div className="text-sm text-slate-500">Overall Progress</div>
          </div>
        </div>
        <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${getProgressColor(overallPercentage)}`}
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {syllabusData.map((subject) => {
            const isExpanded = expandedSubjects.has(subject.id);
            const subjProgress = subjectProgress[subject.id] || { completed: 0, total: 0, percentage: 0 };
            
            return (
              <div key={subject.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSubject(subject.id)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                    <span className="font-medium">{subject.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-500">
                      {subjProgress.completed}/{subjProgress.total}
                    </span>
                    <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getProgressColor(subjProgress.percentage)}`}
                        style={{ width: `${subjProgress.percentage}%` }}
                      />
                    </div>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="border-t bg-slate-50/50">
                    {subject.topics.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => toggleTopic(topic.id)}
                        className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-slate-100 transition-colors text-left"
                      >
                        {progress[topic.id] ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300" />
                        )}
                        <span className={progress[topic.id] ? "text-slate-500 line-through" : "text-slate-700"}>
                          {topic.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}