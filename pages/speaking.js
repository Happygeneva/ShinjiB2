import { useState } from "react";

export default function Speaking() {
  const [recording, setRecording] = useState(false);

  const toggleRecording = () => {
    setRecording(!recording);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Speaking 練習</h1>

      <p className="text-lg mb-4">
        テーマに基づいてフランス語で話してみましょう。
      </p>

      <button
        onClick={toggleRecording}
        className="px-6 py-3 rounded-xl bg-red-500 text-white shadow-md"
      >
        {recording ? "録音停止" : "録音開始"}
      </button>

      {recording && (
        <p className="mt-4 font-semibold text-red-600">
          🎙️ 録音中です。フランス語で話してください！
        </p>
      )}
    </div>
  );
}
