import { useState } from "react";

export default function Writing() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Writing 練習</h1>

      <p className="text-lg mb-4">
        テーマに沿ってフランス語で文章を書きましょう。
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full max-w-xl h-40 p-3 border rounded-lg shadow-md"
        placeholder="ここにフランス語で作文を書いてください..."
      />

      <p className="mt-4 font-semibold">文字数: {text.length}</p>
    </div>
  );
}
