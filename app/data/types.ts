export type DevField = "frontend" | "backend" | "app" | "ai" | "game";

export interface Question {
  id: number;
  text: string;
  type: "yesno";
  fieldWeights: Partial<Record<DevField, number>>;
}
