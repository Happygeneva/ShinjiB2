import { useState } from "react";

export default function Reading() {
  const text = "Marie habite à Lyon. Elle travaille comme ingénieure.";
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    setResult(answer.toLowerCase().includes("lyon"));
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>📖 Reading</h1>
      <p>{text}</p>
      <p>Q: Marie はどこに住んでいますか？</p>
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
          {result ? "✅ 正解！" : "❌ 読み直してみましょう。"}
        </p>
      )}
    </div>
  );
}
