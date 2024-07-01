export interface StepConfig {
    title: string;
    description: string;
    problem?: string;
    correctAnswer?: number;
  }
  
  export const MaxSteps: { [key: number]: StepConfig } = {
    1: {
      title: '条件分岐とは',
      description: '条件分岐とは何かを学びます。',
    },
    2: {
      title: '条件分岐を使った問題１',
      description: '条件分岐を使ってみましょう。',
      problem: `５個リンゴが入ったカゴから３を足した数は？`,
      correctAnswer: 8,
    },
    3: {
      title: '条件分岐を使った問題２',
      description: '条件分岐を使ってみましょう。',
      problem: `８個リンゴが入ったカゴから２を引いた数は？`,
      correctAnswer: 6,
    },
    4: {
      title: '条件分岐を使った問題３',
      description: '条件分岐を使ってみましょう。',
      problem: `２個リンゴが入ったカゴに２をかけた数は？`,
      correctAnswer: 4,
    },
    5: {
      title: '条件分岐を使った問題４',
      description: '条件分岐を使ってみましょう。',
      problem: `１０個リンゴが入ったカゴにカゴに入れた数を２で割った数は？`,
      correctAnswer: 5,
    },
    6: {
      title: '条件分岐の応用問題',
      description: '変数を活用してみましょう。',
      problem: '在庫管理',
      correctAnswer: 5,
    },
    7: {
      title: '条件分岐の応用問題',
      description: '条件分岐を活用してみましょう。',
      problem: '在庫管理',
      correctAnswer: 10,
    },
  }