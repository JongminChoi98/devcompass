import { useNavigate, useSearchParams } from "react-router-dom";
import type { DevField } from "~/data/types";
import { useTestStore } from "~/store/useTestStore";
import { exploreContents } from "../data/exploreContents";

export default function ExplorePage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const reset = useTestStore((state) => state.reset);
  const field = params.get("field") as DevField;

  const content = field ? exploreContents[field] : null;

  if (!field || !content) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-bold mb-4">분야 정보가 없어요 😥</h1>
        <p>추천 결과를 먼저 확인하고 다시 와주세요!</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
      <p className="text-lg mb-6">{content.description}</p>

      <a
        href={content.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        실습하러 가기 →
      </a>

      <div className="mt-8 flex flex-col gap-3 items-center">
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          홈으로 돌아가기
        </button>

        <button
          onClick={() => {
            reset();
            navigate("/test");
          }}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          테스트 다시 하기
        </button>
      </div>
    </div>
  );
}
