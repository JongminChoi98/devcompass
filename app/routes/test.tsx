import { useNavigate } from "react-router-dom";
import { questions } from "~/data/questions";
import { useTestStore } from "~/store/useTestStore";

export default function TestPage() {
  const navigate = useNavigate();
  const currentIndex = useTestStore((state) => state.currentQuestionIndex);
  const addAnswer = useTestStore((state) => state.addAnswer);
  const goBack = useTestStore((state) => state.goBack);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleAnswer = (answer: boolean) => {
    addAnswer(answer);
    const isLast = currentIndex + 1 >= totalQuestions;
    if (isLast) {
      navigate("/result");
    }
  };

  if (!currentQuestion) {
    return <p className="p-4">질문을 불러오는 중입니다...</p>;
  }

  return (
    <div className="p-6 flex flex-col items-center text-center">
      <div className="w-full max-w-xl mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>
            질문 {currentIndex + 1} / {totalQuestions}
          </span>
          <span>{progress} %</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Q{currentIndex + 1}</h2>
      <p className="text-lg mb-6">{currentQuestion.text}</p>

      <div className="flex gap-4">
        <button
          onClick={() => handleAnswer(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          예
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          아니오
        </button>
      </div>

      {currentIndex > 0 && (
        <button
          onClick={goBack}
          className="mt-4 text-sm text-blue-500 hover:underline"
        >
          ← 이전 질문으로 돌아가기
        </button>
      )}
    </div>
  );
}
