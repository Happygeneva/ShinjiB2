export default function Listening() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">👂 リスニング</h1>
      <p>ここで音声を聞く練習ができます。</p>

      <audio controls className="mt-4">
        <source src="/audio/sample.mp3" type="audio/mpeg" />
        お使いのブラウザは audio タグに対応していません。
      </audio>
    </div>
  );
}
