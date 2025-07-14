import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { useTestStore } from "../store/useTestStore";
import { calculateDevScore, getTopField } from "../utils/calculateResult";

export default function ResultPage() {
  const navigate = useNavigate();

  const answers = useTestStore((state) => state.answers);
  const reset = useTestStore((state) => state.reset);

  const score = calculateDevScore(answers, questions);
  const topField = getTopField(score);

  const fieldNames: Record<string, string> = {
    frontend: "프론트엔드",
    backend: "백엔드",
    app: "앱 개발",
    ai: "AI/데이터",
    game: "게임 개발",
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">추천 결과</h1>
      <p className="text-lg mb-6">
        당신은 <strong className="text-blue-600">{fieldNames[topField]}</strong>
        에 잘 맞는 성향이에요!
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">분야별 점수</h2>
        <ul className="text-left inline-block">
          {Object.entries(score).map(([field, value]) => (
            <li key={field}>
              {fieldNames[field] ?? field}: {value}점
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-4 items-center">
        <button
          onClick={() => navigate(`/explore?field=${topField}`)}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {fieldNames[topField]} 미니 체험하러 가기 →
        </button>

        <button
          onClick={() => {
            reset();
            navigate("/test");
          }}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}
