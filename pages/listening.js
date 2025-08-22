import { useState } from "react";

export default function Listening() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    if (answer.toLowerCase().includes("travel")) {
      setResult("✅ 正解です！");
    } else {
      setResult("❌ もう一度聞いてみましょう。");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🎧 リスニング練習</h1>
      <audio controls>
        <source src="/sample.mp3" type="audio/mpeg" />
        音声を再生できません
      </audio>
      <p>この音声の内容を一言で答えてください:</p>
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
