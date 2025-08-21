"use client";
import { useState } from "react";
import Link from "next/link";

export default function Writing() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState([]);

  const handleSave = () => {
    if (text.trim() !== "") {
      setSaved([...saved, text]);
      setText("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
      <h1 className="text-2xl font-bold mb-4">✍️ Writing</h1>
      <p className="mb-4 text-gray-700">以下のお題について短い文章を書いてみましょう：</p>
      <p className="mb-6 font-semibold">「昨日の出来事をフランス語で説明してください。」</p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full max-w-md h-32 p-2 border rounded mb-4"
        placeholder="Ici, écrivez votre texte..."
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        保存
      </button>

      <div className="w-full max-w-md">
        {saved.map((entry, i) => (
          <p key={i} className="bg-white p-2 border rounded mb-2">{entry}</p>
        ))}
      </div>

      <Link href="/" className="text-blue-600 underline mt-6">⬅︎ 戻る</Link>
    </div>
  );
}
