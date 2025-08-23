from gtts import gTTS
import os

# 50問の質問リスト
questions = [
    "Question 1: Pouvez-vous décrire une expérience qui a changé votre point de vue sur un sujet important?",
    "Question 2: Quel est le rôle des médias dans la société contemporaine?",
    "Question 3: Faut-il limiter l’utilisation des réseaux sociaux chez les jeunes?",
    "Question 4: Quels sont les avantages et les inconvénients du télétravail?",
    "Question 5: Pensez-vous que la mondialisation soit une chance ou une menace?",
    "Question 6: L’école doit-elle enseigner davantage de compétences pratiques?",
    "Question 7: La protection de l’environnement est-elle compatible avec la croissance économique?",
    "Question 8: Quelles solutions proposez-vous pour réduire les inégalités sociales?",
    "Question 9: La publicité influence-t-elle trop nos choix de consommation?",
    "Question 10: L’art est-il essentiel pour une société équilibrée?",
    "Question 11: Pensez-vous que la science doit avoir des limites éthiques?",
    "Question 12: L’éducation en ligne peut-elle remplacer l’école traditionnelle?",
    "Question 13: La mobilité internationale est-elle une opportunité ou un danger?",
    "Question 14: Le cinéma peut-il changer notre perception du monde?",
    "Question 15: La société doit-elle limiter l’usage des voitures individuelles?",
    "Question 16: Les nouvelles technologies rendent-elles les gens plus isolés?",
    "Question 17: Le bénévolat est-il valorisé à sa juste valeur?",
    "Question 18: L’intelligence artificielle représente-t-elle une menace pour l’emploi?",
    "Question 19: Les traditions doivent-elles évoluer avec le temps?",
    "Question 20: Le sport professionnel a-t-il trop d’importance aujourd’hui?",
    "Question 21: Les voyages forment-ils vraiment la jeunesse?",
    "Question 22: La démocratie est-elle le meilleur système politique?",
    "Question 23: Le travail manuel est-il encore nécessaire à l’ère numérique?",
    "Question 24: L’argent fait-il le bonheur?",
    "Question 25: Les célébrités sont-elles de bons modèles pour la jeunesse?",
    "Question 26: Le droit à la déconnexion est-il nécessaire?",
    "Question 27: Faut-il réduire le temps de travail pour mieux vivre?",
    "Question 28: La liberté d’expression doit-elle être sans limite?",
    "Question 29: Les grandes villes sont-elles viables à long terme?",
    "Question 30: Le tourisme de masse est-il durable?",
    "Question 31: Les réseaux sociaux favorisent-ils la démocratie?",
    "Question 32: La musique est-elle universelle?",
    "Question 33: Les jeunes doivent-ils participer davantage à la politique?",
    "Question 34: Le nucléaire est-il une énergie d’avenir?",
    "Question 35: Les inégalités entre hommes et femmes sont-elles encore trop présentes?",
    "Question 36: La presse papier a-t-elle encore un avenir?",
    "Question 37: Faut-il interdire la publicité pour les produits nocifs?",
    "Question 38: Le travail à l’étranger est-il une chance pour la carrière?",
    "Question 39: La compétition est-elle bénéfique ou dangereuse?",
    "Question 40: La science peut-elle résoudre tous nos problèmes?",
    "Question 41: Les langues étrangères doivent-elles être obligatoires à l’école?",
    "Question 42: La mondialisation menace-t-elle les cultures locales?",
    "Question 43: L’homme doit-il limiter son exploration de l’espace?",
    "Question 44: Les animaux doivent-ils avoir des droits semblables aux humains?",
    "Question 45: Les fêtes traditionnelles ont-elles encore un sens aujourd’hui?",
    "Question 46: L’éducation doit-elle être gratuite pour tous?",
    "Question 47: Les avancées médicales posent-elles des problèmes éthiques?",
    "Question 48: Internet rend-il les gens plus intelligents?",
    "Question 49: Le sport de haut niveau est-il trop commercial?",
    "Question 50: L’humour a-t-il une fonction sociale importante?"
]

# 保存フォルダを作成
output_dir = "listening_b2_mp3"
os.makedirs(output_dir, exist_ok=True)

# 各質問を MP3 に変換
for i, question in enumerate(questions, start=1):
    tts = gTTS(text=question, lang="fr")
    filename = os.path.join(output_dir, f"question_{i}.mp3")
    tts.save(filename)
    print(f"[OK] {filename} を生成しました")
