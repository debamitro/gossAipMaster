export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  topic?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  isQuizComplete: boolean;
}
