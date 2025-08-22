// pages/listening.js
import { useState } from "react";

export default function Listening() {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const correctAnswer = "パリ"; // 正解の例

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === correctAnswer) {
      setFeedback("✅ 正解です！よくできました。");
    } else {
      setFeedback("❌ 不正解です。もう一度聞いてみましょう。");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🎧 Listening</h1>
      <p>音声を聞いて質問に答えてください。</p>

      {/* ✅ public フォルダ直下のファイルは /ファイル名 でアクセス */}
      <audio controls>
        <source src="/sample.mp3" type="audio/mpeg" />
        ブラウザが audio タグをサポートしていません。
      </audio>

      <hr style={{ margin: "20px 0" }} />

      <h2>Q: 音声で言及された都市はどこですか？</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="答えを入力"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          回答
        </button>
      </form>

      {feedback && <p style={{ marginTop: "20px" }}>{feedback}</p>}
    </div>
  );
}
