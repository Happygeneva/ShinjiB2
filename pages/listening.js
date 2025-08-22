import { useState } from "react";

export default function Listening() {
  const [currentQ, setCurrentQ] = useState(1);

  const questions = [
    "Q1: Quel est le sujet principal du reportage ?",
    "Q2: Quelle ville est mentionnée dans l'audio ?",
    "Q3: Qui est l’intervenant principal ?",
    // ... Q50まで
  ];

  const handleNext = () => {
    if (currentQ < questions.length) {
      setCurrentQ(currentQ + 1);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">🎧 Listening</h1>
      <p className="mb-4">{questions[currentQ - 1]}</p>

      <audio controls key={currentQ}>
        <source src={`/listening_b2_mp3/listening_Q${currentQ}.mp3`} type="audio/mpeg" />
        Votre navigateur ne supporte pas l’audio.
      </audio>

      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
          disabled={currentQ === questions.length}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
