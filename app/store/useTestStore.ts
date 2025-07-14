import { create } from "zustand";

interface TestState {
  currentQuestionIndex: number;
  answers: boolean[];
  addAnswer: (answer: boolean) => void;
  goBack: () => void;
  reset: () => void;
}

export const useTestStore = create<TestState>((set) => ({
  currentQuestionIndex: 0,
  answers: [],
  addAnswer: (answer: boolean) =>
    set((state) => ({
      answers: [...state.answers, answer],
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
  goBack: () =>
    set((state) => ({
      currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      answers: state.answers.slice(0, -1),
    })),
  reset: () => set({ currentQuestionIndex: 0, answers: [] }),
}));
