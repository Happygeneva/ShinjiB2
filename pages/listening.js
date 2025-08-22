import { useState } from "react";

export default function Listening() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    setResult(answer.toLowerCase().includes("paris"));
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🎧 Listening</h1>
      <p>音声を聞いて質問に答えてください。</p>
      <audio controls src="/sample.mp3" style={{ marginTop: 20 }} />

      <p style={{ marginTop: 20 }}>
        Q: 音声で言及された都市はどこですか？
      </p>
      <input
        type="text"
        placeholder="答えを入力"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ padding: 8, marginRight: 10 }}
      />
      <button onClick={checkAnswer}>確認</button>

      {result !== null && (
        <p style={{ marginTop: 20 }}>
          {result ? "✅ 正解！" : "❌ もう一度聞いてみましょう。"}
        </p>
      )}
    </div>
  );
}
