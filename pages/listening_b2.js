// pages/listening_b2.js
import { useState } from "react";

const questions = [
  {
    id: 1,
    audio: "/listening/ex1.mp3",
    question: "Quel est le thème principal du reportage ?",
    options: [
      "L'impact du changement climatique sur l'agriculture",
      "Les nouvelles technologies dans l’éducation",
      "La préparation d’un voyage scolaire",
      "Les élections municipales"
    ],
    answer: 0,
  },
  {
    id: 2,
    audio: "/listening/ex2.mp3",
    question: "Quelle est l’opinion exprimée par l’intervenant ?",
    options: [
      "Il est sceptique face aux nouvelles mesures",
      "Il soutient totalement le projet",
      "Il reste neutre",
      "Il n’a pas d’avis"
    ],
    answer: 1,
  },
  // ← ここに Q3〜Q50 を追加していきます
];

export default function ListeningB2() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎧 Compréhension Orale B2</h1>

      {!finished ? (
        <div>
          <audio controls src={questions[current].audio} className="mb-4" />
          <p className="mb-4">{questions[current].question}</p>

          <div className="space-y-2">
            {questions[current].options.map((opt, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`block w-full text-left p-2 rounded ${
                  selected === index ? "bg-blue-200" : "bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={handleAnswer}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            disabled={selected === null}
          >
            Valider
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Résultats</h2>
          <p>Votre score : {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}
