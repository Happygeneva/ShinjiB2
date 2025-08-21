import { useState } from "react";

export default function Speaking() {
  const [recording, setRecording] = useState(false);

  const startRecording = () => {
    alert("🎙️ スピーキング練習を開始！（録音機能はブラウザで拡張可能）");
    setRecording(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🗣️ スピーキング</h1>
      <p>
        次の質問に答えるように話してください：
      </p>
      <blockquote>
        「あなたの一日のスケジュールについて説明してください」
      </blockquote>
      <button
        onClick={startRecording}
        style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}
      >
        🎙️ 録音開始
      </button>
      {recording && <p>録音中...（デモ）</p>}
    </div>
  );
}
