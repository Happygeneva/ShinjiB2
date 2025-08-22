import { useState } from "react";

export default function Reading() {
  const text = "Many people believe that traveling is the best way to learn about the world.";
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    if (answer.toLowerCase().includes("travel")) {
      setResult("✅ 正解です！");
    } else {
      setResult("❌ もう一度読んでみましょう。");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>📖 リーディング練習</h1>
      <p>{text}</p>
      <p>この文章の主題は何ですか？</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ padding: 5, marginRight: 10 }}
      />
      <button onClick={checkAnswer}>答える</button>
      <p>{result}</p>
    </div>
  );
}
