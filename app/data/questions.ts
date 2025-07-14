import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: 1,
    text: "나는 사용자 인터페이스(UI)를 만드는 것이 재미있다.",
    type: "yesno",
    fieldWeights: {
      frontend: 3,
      app: 1,
    },
  },
  {
    id: 2,
    text: "나는 서버, API, 데이터 흐름에 관심이 많다.",
    type: "yesno",
    fieldWeights: {
      backend: 3,
      ai: 1,
    },
  },
  {
    id: 3,
    text: "앱이 휴대폰에서 직접 작동하는 게 신기하고 뿌듯하다.",
    type: "yesno",
    fieldWeights: {
      app: 3,
      frontend: 1,
    },
  },
  {
    id: 4,
    text: "나는 데이터를 분석하고, 패턴을 찾아내는 것을 좋아한다.",
    type: "yesno",
    fieldWeights: {
      ai: 3,
      backend: 1,
    },
  },
  {
    id: 5,
    text: "게임의 물리 엔진, 캐릭터 움직임 등에 흥미가 있다.",
    type: "yesno",
    fieldWeights: {
      game: 3,
    },
  },
  {
    id: 6,
    text: "창의적으로 인터랙션을 설계하는 것을 좋아한다.",
    type: "yesno",
    fieldWeights: {
      frontend: 2,
      game: 1,
    },
  },
  {
    id: 7,
    text: "API를 설계하고 다른 시스템과 연결하는 게 재밌다.",
    type: "yesno",
    fieldWeights: {
      backend: 3,
    },
  },
  {
    id: 8,
    text: "나는 모바일 앱을 자주 사용하고 개선점을 생각해본다.",
    type: "yesno",
    fieldWeights: {
      app: 3,
    },
  },
  {
    id: 9,
    text: "나는 인공지능과 머신러닝에 대한 콘텐츠를 즐겨본다.",
    type: "yesno",
    fieldWeights: {
      ai: 3,
    },
  },
  {
    id: 10,
    text: "게임 플레이만이 아니라 개발 과정에도 관심이 있다.",
    type: "yesno",
    fieldWeights: {
      game: 3,
    },
  },
];
