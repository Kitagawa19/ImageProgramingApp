export interface StepConfig {
    title: string;
    description: string;
    problem?: string;
    correctAnswer?: number;
  }
  
  export const MaxSteps: { [key: string]: StepConfig } = {
      1: {
        title: 'Chapter 1: 変数とは',
        description: 'アレックスは邪悪なドラゴンに奪われた魔法のクリスタルを取り戻す旅に出ました。冒険を通じて、変数というものを学びます。変数は、まるで名前をつけた箱のようなもので、情報を保管できます。例えば、クリスタルの数やアレックスの所持品を記録するために使います。',
      },
      2: {
        title: 'Chapter 2: クリスタルの謎１',
        description: 'アレックスは最初のクリスタルを見つけましたが、それを手に入れるには問題を解く必要があります。',
        problem: '5個の魔法の石が入った袋に3個追加すると、合計いくつになりますか？',
        correctAnswer: 8,
      },
      3: {
        title: 'Chapter 3: クリスタルの謎２',
        description: 'アレックスは次のクリスタルの場所に到着しました。次の問題を解いてください。',
        problem: '8個の魔法の石が入った袋から2個取り出すと、残りはいくつですか？',
        correctAnswer: 6,
      },
      4: {
        title: 'Chapter 4: クリスタルの謎３',
        description: 'アレックスはさらに奥へ進み、次のクリスタルの謎に挑みます。',
        problem: '2個の魔法の石が入った袋に2倍の魔力を注ぎ込むと、合計いくつになりますか？',
        correctAnswer: 4,
      },
      5: {
        title: 'Chapter 5: クリスタルの謎４',
        description: 'アレックスは次の難問に直面します。問題を解いてください。',
        problem: '10個の魔法の石が入った袋の数を半分にすると、いくつになりますか？',
        correctAnswer: 5,
      },
      6: {
        title: 'Chapter 6: クリスタルの応用問題１',
        description: 'アレックスは村の在庫管理を助けるためにクリスタルを使います。',
        problem: '在庫管理: 5個の魔法の石を売りました。残りの石の数は？',
        correctAnswer: 5,
      },
      7: {
        title: 'Chapter 7: クリスタルの応用問題２',
        description: 'アレックスは村の在庫管理を助けるためにクリスタルを使います。',
        problem: '在庫管理: 8個の魔法の石に2個追加しました。現在の石の数は？',
        correctAnswer: 10,
      },
  };
  