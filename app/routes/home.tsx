import { useNavigate } from "react-router-dom";
import { useTestStore } from "~/store/useTestStore";

export default function HomePage() {
  const navigate = useNavigate();
  const reset = useTestStore((state) => state.reset);

  const handleStartTest = () => {
    reset();
    navigate("/test");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">DevCompass</h1>
      <p className="text-lg mb-6">
        나에게 맞는 개발 분야를 테스트하고 직접 체험해보세요!
      </p>
      <button
        onClick={handleStartTest}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        테스트 시작하기 →
      </button>
    </div>
  );
}
