export interface StepConfig {
  title: string;
  description: string;
  problem?: string;
  correctAnswer?: number;
}

export const MaxSteps: { [key: number]: StepConfig } = {
  1: {
    title: '変数とは',
    description: '変数とは何かを学びます。',
  },
  2: {
    title: '変数を使った問題１',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数に３を足した数は？`,
    correctAnswer: 8,
  },
  3: {
    title: '変数を使った問題２',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数に2を引いた数は？`,
    correctAnswer: 3,
  },
  4: {
    title: '変数を使った問題３',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数に2をかけた数は？`,
    correctAnswer: 10,
  },
  5: {
    title: '変数を使った問題４',
    description: '変数を使ってみましょう。',
    problem: `カゴに入れた数を２で割った数は？`,
    correctAnswer: 8,
  },
  6: {
    title: '変数の活用',
    description: '変数を活用してみましょう。',
  },
}