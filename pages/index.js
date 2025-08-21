export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
      <h1>Bienvenue sur ShinjiB2 🎉</h1>
      <p>フランス語B2学習アプリへようこそ！</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>👂 <a href="/listening">リスニング</a></li>
        <li>📖 <a href="/reading">リーディング</a></li>
        <li>✍️ <a href="/writing">ライティング</a></li>
        <li>🗣 <a href="/speaking">スピーキング</a></li>
      </ul>

      <p style={{ marginTop: "2rem" }}>🚀 ここから学習を始めましょう！</p>
    </div>
  );
}
