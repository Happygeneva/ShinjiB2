export default function Writing() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>✍️ ライティング</h1>
      <p>
        次のテーマについて 5〜6 文の短い作文を書いてください。
      </p>
      <blockquote>
        「最近の旅行について友達に手紙を書く」
      </blockquote>
      <textarea
        placeholder="ここにフランス語で書いてください"
        style={{ width: "100%", height: "200px", marginTop: "10px" }}
      ></textarea>
    </div>
  );
}
