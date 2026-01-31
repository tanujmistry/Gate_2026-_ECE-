const PROGRESS_KEY = "gate-navigator-progress";
const ATTEMPTS_KEY = "gate-navigator-attempts";

export interface ProgressState {
  [topicId: string]: boolean;
}

export interface Attempt {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  timestamp: number;
}

export function saveProgress(progress: ProgressState): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function loadProgress(): ProgressState {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return {};
    }
  }
  return {};
}

export function logAttempt(attempt: Attempt): void {
  const attempts = loadAttempts();
  attempts.push(attempt);
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
}

export function loadAttempts(): Attempt[] {
  const saved = localStorage.getItem(ATTEMPTS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }
  return [];
}