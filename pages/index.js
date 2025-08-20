import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur ShinjiB2 🎉</h1>
      <p className="mb-8">フランス語B2学習アプリへようこそ！</p>

      <div className="grid gap-4">
        <Link href="/listening">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            👂 リスニング
          </button>
        </Link>

        <Link href="/reading">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
            📖 リーディング
          </button>
        </Link>

        <Link href="/writing">
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
            ✍️ ライティング
          </button>
        </Link>

        <Link href="/speaking">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
            🗣 スピーキング
          </button>
        </Link>
      </div>

      <p className="mt-8">🚀 ここから学習を始めましょう！</p>
    </div>
  );
}
