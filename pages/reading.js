export default function Reading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Reading 練習</h1>

      <p className="text-lg mb-4">
        B2 レベルの文章を読み、理解力を高めましょう。
      </p>

      <article className="bg-white p-4 rounded-xl shadow-md max-w-xl">
        <h2 className="font-bold text-xl mb-2">サンプル記事</h2>
        <p>
          En France, de plus en plus de jeunes choisissent d’étudier à
          l’étranger pour améliorer leurs compétences linguistiques et vivre
          une nouvelle expérience culturelle.
        </p>
      </article>
    </div>
  );
}
