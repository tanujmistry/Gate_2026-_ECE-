export interface ProgressState {
  [topicId: string]: boolean;
}

export interface Attempt {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  timestamp: number;
}