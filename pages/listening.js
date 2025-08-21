export default function Listening() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>👂 リスニング練習</h1>
      <p>以下の音声を聞いて内容を理解しましょう。</p>
      <audio controls>
        <source src="/audio/sample.mp3" type="audio/mpeg" />
        お使いのブラウザは audio タグをサポートしていません。
      </audio>
    </div>
  );
}
