export default function Listening() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Listening 練習</h1>

      <audio controls className="mb-4">
        <source src="/sample.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <p className="text-lg mb-4">
        音声を聞いて内容を理解しましょう。B2 レベルの聞き取りを強化します。
      </p>

      <ul className="list-disc text-left">
        <li>短い会話を聞いて質問に答える</li>
        <li>ニュースやインタビューを聞き取る</li>
        <li>聞いた内容を要約する</li>
      </ul>
    </div>
  );
}
