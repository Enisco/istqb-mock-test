import { Question, ExamResult } from '@/types';
import { ALL_QUESTIONS } from '@/data/questions';

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getRandomQuestions(count: number = 40): Question[] {
  const shuffled = shuffleArray(ALL_QUESTIONS);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function calculateResult(
  userName: string,
  questions: Question[],
  answers: (number | null)[],
  startTime: number,
  endTime: number
): ExamResult {
  let score = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) score++;
  });
  const percentage = Math.round((score / questions.length) * 100);
  const timeTaken = Math.floor((endTime - startTime) / 1000);

  return {
    userName,
    score,
    total: questions.length,
    percentage,
    passed: percentage >= 65,
    timeTaken,
    questions,
    answers,
  };
}

export const EXAM_DURATION = 45 * 60; // 45 minutes in seconds
export const TOTAL_QUESTIONS = 40;
export const PASS_MARK = 65;
