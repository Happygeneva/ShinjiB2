import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Shinji B2 練習アプリ</h1>
      <p>以下の4技能を練習できます:</p>
      <ul>
        <li><Link href="/listening">🎧 リスニング</Link></li>
        <li><Link href="/reading">📖 リーディング</Link></li>
        <li><Link href="/writing">✍️ ライティング</Link></li>
        <li><Link href="/speaking">🎤 スピーキング</Link></li>
      </ul>
    </div>
  );
}
