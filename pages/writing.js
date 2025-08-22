import { useState } from "react";

export default function Writing() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState("");

  const evaluate = () => {
    if (text.split(" ").length > 15) {
      setFeedback("✅ よくできました！十分な長さの文章です。");
    } else {
      setFeedback("✍️ もっと詳しく書いてみましょう。（15語以上推奨）");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>✍️ Writing</h1>
      <p>お題: 「昨日の一日について短い文章を書いてください。」</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        cols={50}
        style={{ display: "block", marginTop: 10, padding: 10 }}
      />
      <button onClick={evaluate} style={{ marginTop: 10 }}>提出</button>
      {feedback && <p style={{ marginTop: 20 }}>{feedback}</p>}
    </div>
  );
}
