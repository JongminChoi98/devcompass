import type { DevField } from "./types";

interface ExploreContent {
  title: string;
  description: string;
  link: string;
}

export const exploreContents: Record<DevField, ExploreContent> = {
  frontend: {
    title: "간단한 HTML 페이지 만들기",
    description: "기초적인 HTML, CSS 구조를 실습해보세요!",
    link: "https://codesandbox.io/s/html-css-demo", // Example link
  },
  backend: {
    title: "간단한 API 서버 만들기",
    description: "Express로 REST API를 만들어보세요.",
    link: "https://codesandbox.io/s/express-api-demo",
  },
  app: {
    title: "React Native로 간단한 앱 만들기",
    description: "간단한 버튼 앱을 만들어보며 앱 구조를 익혀보세요.",
    link: "https://snack.expo.dev/",
  },
  ai: {
    title: "AI 모델 학습 맛보기",
    description: "간단한 머신러닝 예제를 체험해보세요.",
    link: "https://colab.research.google.com/",
  },
  game: {
    title: "간단한 JavaScript 게임 만들기",
    description: "canvas를 이용한 미니게임 실습",
    link: "https://codepen.io/",
  },
};
