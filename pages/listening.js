export default function Listening() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎧 リスニング</h1>
      <p>以下の音声を聞いて、設問に答えてください。</p>
      <audio controls>
        <source src="/sample.mp3" type="audio/mpeg" />
        お使いのブラウザは audio タグに対応していません。
      </audio>
      <p>質問: この会話のテーマは何ですか？</p>
      <ul>
        <li>A. 旅行</li>
        <li>B. 食事</li>
        <li>C. 勉強</li>
        <li>D. 天気</li>
      </ul>
    </div>
  );
}
