import { ChocolateMessage, Memory, QuizQuestion, Reason, ChocolateType } from './types';

export const CHOCOLATE_MESSAGES: ChocolateMessage[] = [
  { id: 1, type: 'compliment', content: "Your smile is sweeter than the finest truffle.", icon: "😊" },
  { id: 2, type: 'memory', content: "Remember our first coffee date? I knew then you were special.", icon: "☕" },
  { id: 3, type: 'text', content: "You make my heart melt like chocolate in the sun.", icon: "❤️" },
  { id: 4, type: 'compliment', content: "You have the kindest soul I've ever known.", icon: "✨" },
  { id: 5, type: 'text', content: "Every day with you is a treat.", icon: "🍫" },
  { id: 6, type: 'memory', content: "That time we got lost and just laughed about it. Best day.", icon: "🗺️" },
  { id: 7, type: 'compliment', content: "You look beautiful even in your pajamas.", icon: "😴" },
  { id: 8, type: 'text', content: "I love you more than all the cocoa beans in the world.", icon: "🌍" },
  { id: 9, type: 'memory', content: "Our late night movie marathons are my favorite.", icon: "🎬" },
];

export const REASONS: Reason[] = [
  { id: 1, title: "Your Kindness", description: "You always treat everyone with such warmth.", emoji: "🍯" },
  { id: 2, title: "Your Laugh", description: "It's the most addictive sound in the universe.", emoji: "🎶" },
  { id: 3, title: "Your Support", description: "You believe in me even when I don't.", emoji: "🚀" },
  { id: 4, title: "Your Hugs", description: "The safest place in the world.", emoji: "🤗" },
];

export const MEMORIES: Memory[] = [
  { id: 1, date: "The Beginning", title: "First Glance", description: "The moment our eyes met, I knew trouble (the good kind) was coming.", image: "https://picsum.photos/400/300?random=1" },
  { id: 2, date: "First Trip", title: "Adventure Time", description: "Exploring the city with you made everything feel brand new.", image: "https://picsum.photos/400/300?random=2" },
  { id: 3, date: "The Big Milestone", title: "Saying 'I Love You'", description: "My heart was racing, but it was the easiest thing to say.", image: "https://picsum.photos/400/300?random=3" },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is my absolute favorite chocolate?",
    options: ["Dark & Bitter", "Creamy Milk", "White & Sweet", "Nutty Praline"],
    correctAnswer: 1, // Example
    successMessage: "You know my cravings so well! 🍬"
  },
  {
    id: 2,
    question: "Where did we have our most romantic date?",
    options: ["The Beach", "Rooftop Dinner", "Cozy Picnic", "Movie Night"],
    correctAnswer: 0, // Example
    successMessage: "I still dream about that sunset with you. 🌅"
  },
  {
    id: 3,
    question: "What do I love most about you?",
    options: ["Your Eyes", "Your Humor", "Your Cooking", "Everything"],
    correctAnswer: 3,
    successMessage: "Trick question! It is absolutely everything. ❤️"
  }
];

export const THEME_STYLES: Record<ChocolateType, { bg: string, text: string, accent: string, message: string }> = {
  [ChocolateType.Dark]: {
    bg: "bg-chocolate-900",
    text: "text-chocolate-100",
    accent: "bg-chocolate-700",
    message: "Intense, deep, and mysterious. Just like my love for you."
  },
  [ChocolateType.Milk]: {
    bg: "bg-chocolate-500",
    text: "text-amber-50",
    accent: "bg-chocolate-400",
    message: "Sweet, classic, and comforting. You are my home."
  },
  [ChocolateType.White]: {
    bg: "bg-stone-100",
    text: "text-chocolate-800",
    accent: "bg-stone-200",
    message: "Pure, soft, and dreamy. You light up my world."
  },
  [ChocolateType.Strawberry]: {
    bg: "bg-rose-200",
    text: "text-rose-900",
    accent: "bg-rose-300",
    message: "Playful, fruity, and exciting. You make life fun!"
  }
};
