import { create } from "zustand";

interface TestState {
  currentQuestionIndex: number;
  answers: boolean[];
  addAnswer: (answer: boolean) => void;
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
  reset: () => set({ currentQuestionIndex: 0, answers: [] }),
}));
