import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>ShinjiB2 学習アプリ</h1>
      <p>フランス語 B2 テスト対策 - メニューを選んでください</p>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
        <Link href="/listening">🎧 リスニング</Link>
        <Link href="/reading">📖 リーディング</Link>
        <Link href="/writing">✍️ ライティング</Link>
        <Link href="/speaking">🗣️ スピーキング</Link>
      </nav>
    </div>
  );
}
