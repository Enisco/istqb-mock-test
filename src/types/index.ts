export interface Question {
  id: number;
  chapter: number;
  section: string;
  klevel: 'K1' | 'K2' | 'K3';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ExamSession {
  userName: string;
  questions: Question[];
  answers: (number | null)[];
  startTime: number;
  endTime?: number;
  submitted: boolean;
}

export interface ExamResult {
  userName: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timeTaken: number;
  questions: Question[];
  answers: (number | null)[];
}
