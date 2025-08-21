export default function Reading() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 リーディング</h1>
      <p>
        以下の文章を読んで、正しい答えを選んでください。
      </p>
      <blockquote>
        Marie habite à Paris. Elle prend le métro tous les jours pour aller à l’université.
      </blockquote>
      <p>質問: Marie はどこに住んでいますか？</p>
      <ul>
        <li>A. Lyon</li>
        <li>B. Tokyo</li>
        <li>C. Paris</li>
        <li>D. Genève</li>
      </ul>
    </div>
  );
}
