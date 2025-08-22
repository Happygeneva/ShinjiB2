import { useState } from "react";

export default function Speaking() {
  const [recording, setRecording] = useState(false);
  const [message, setMessage] = useState("");

  const startRecording = () => {
    setRecording(true);
    setMessage("🎤 録音中... (※ 実際の録音はブラウザAPIを追加で設定する必要あり)");
  };

  const stopRecording = () => {
    setRecording(false);
    setMessage("✅ 録音終了！内容を確認してください。");
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🎤 スピーキング練習</h1>
      <p>次のテーマについて1分間話してください:</p>
      <blockquote>「オンライン学習の利点について」</blockquote>
      <div style={{ marginTop: 20 }}>
        {!recording ? (
          <button onClick={startRecording}>録音開始</button>
        ) : (
          <button onClick={stopRecording}>録音終了</button>
        )}
      </div>
      <p>{message}</p>
    </div>
  );
}
