import { useState } from "react";

export default function Writing() {
  const [essay, setEssay] = useState("");
  const [feedback, setFeedback] = useState("");

  const evaluate = () => {
    if (essay.split(" ").length > 20) {
      setFeedback("✅ 良い長さです！しっかり書けています。");
    } else {
      setFeedback("✍️ もっと文章を長く書いてみましょう。");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>✍️ ライティング練習</h1>
      <p>以下のテーマで短いエッセイを書いてください:</p>
      <blockquote>「旅行は人を成長させるか？」</blockquote>
      <textarea
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
        rows={8}
        cols={60}
        style={{ padding: 10 }}
      />
      <br />
      <button onClick={evaluate} style={{ marginTop: 10 }}>提出</button>
      <p>{feedback}</p>
    </div>
  );
}

