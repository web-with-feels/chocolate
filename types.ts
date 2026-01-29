export enum ChocolateType {
  Dark = 'Dark',
  Milk = 'Milk',
  White = 'White',
  Strawberry = 'Strawberry'
}

export interface ChocolateMessage {
  id: number;
  type: 'text' | 'memory' | 'compliment';
  content: string;
  icon?: string;
}

export interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface Reason {
  id: number;
  title: string;
  description: string;
  emoji: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index
  successMessage: string;
}
