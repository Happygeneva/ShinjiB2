"use client";
import { useState } from "react";
import Link from "next/link";

export default function Speaking() {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/mp3" });
      setAudioURL(URL.createObjectURL(blob));
    };

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="text-2xl font-bold mb-4">🎤 Speaking</h1>
      <p className="mb-6 text-gray-700">
        以下の文を声に出して録音してください：<br />
        <span className="font-semibold">
          « Je me prépare pour l'examen de français. »
        </span>
      </p>

      {!recording ? (
        <button
          onClick={startRecording}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          🔴 録音開始
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        >
          ⏹ 録音停止
        </button>
      )}

      {audioURL && (
        <div>
          <p className="mb-2">🎧 録音した音声:</p>
          <audio src={audioURL} controls />
        </div>
      )}

      <Link href="/" className="text-blue-600 underline mt-6">⬅︎ 戻る</Link>
    </div>
  );
}
