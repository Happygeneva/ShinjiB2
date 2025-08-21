export default function Listening() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <h1 className="text-2xl font-bold mb-4">🎧 Listening</h1>
      <p className="mb-4 text-gray-700">
        フランス語の音声を聞いて、理解力を鍛えましょう。
      </p>
      <audio controls className="mb-6">
        <source src="/audio/sample.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Link href="/" className="text-blue-600 underline">⬅︎ 戻る</Link>
    </div>
  );
}
