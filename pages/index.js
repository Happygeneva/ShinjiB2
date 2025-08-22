import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>ShinjiB2 学習アプリ</h1>
      <p>試験準備の4つのスキルに取り組めます。</p>
      <ul>
        <li><Link href="/listening">🎧 Listening (Oral Comprehension)</Link></li>
        <li><Link href="/reading">📖 Reading (Written Comprehension)</Link></li>
        <li><Link href="/writing">✍️ Writing (Written Production)</Link></li>
        <li><Link href="/speaking">🗣 Speaking (Oral Production)</Link></li>
      </ul>
    </div>
  );
}
