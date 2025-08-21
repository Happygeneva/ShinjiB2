import Link from "next/link";

export default function Reading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-2xl font-bold mb-4">📖 Reading</h1>
      <p className="mb-6 text-gray-800 max-w-xl text-center">
        今日のテキスト：<br /><br />
        « Aujourd'hui, il fait très beau. Beaucoup de gens se promènent
        dans le parc et profitent du soleil. »
      </p>
      <Link href="/" className="text-blue-600 underline">⬅︎ 戻る</Link>
    </div>
  );
}
