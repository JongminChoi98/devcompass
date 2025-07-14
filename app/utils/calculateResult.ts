import type { DevField, Question } from "~/data/types";

export function calculateDevScore(
  answers: boolean[],
  questions: Question[]
): Record<DevField, number> {
  const score: Record<DevField, number> = {
    frontend: 0,
    backend: 0,
    app: 0,
    ai: 0,
    game: 0,
  };

  answers.forEach((answer, index) => {
    const q = questions[index];
    if (answer) {
      for (const field in q.fieldWeights) {
        const dev = field as DevField;
        score[dev] += q.fieldWeights[dev] ?? 0;
      }
    }
  });

  return score;
}

export function getTopField(score: Record<DevField, number>): DevField {
  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0] as DevField;
}
