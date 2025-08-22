# listening_b2_generator.py

from gtts import gTTS
import os

# DELF B2 レベル – Compréhension de l’oral : 50 questions
questions = [
    "Quel est le thème principal du reportage ?",
    "Quelle est l’opinion exprimée par l’intervenant ?",
    "Selon le journaliste, quelles sont les causes de la crise économique ?",
    "Quelle solution est proposée par l’expert interviewé ?",
    "Dans quel pays se déroule la scène décrite ?",
    "Quelle est la réaction des habitants face à cette décision politique ?",
    "Quel problème environnemental est abordé dans l’extrait ?",
    "Quelle initiative citoyenne est mise en avant ?",
    "Selon la conférencière, quels sont les avantages du télétravail ?",
    "Quelle critique est formulée à propos des réseaux sociaux ?",
    "Quelles mesures sont prévues pour limiter la pollution en ville ?",
    "Quelle est la position du gouvernement sur la question énergétique ?",
    "Quel témoignage illustre les difficultés des étudiants étrangers ?",
    "Quelle évolution de la société française est décrite ?",
    "Quel rôle joue l’Union européenne dans ce dossier ?",
    "Quelle différence est établie entre les générations ?",
    "Quelle expérience personnelle raconte l’interviewé ?",
    "Quel est le but de l’association présentée ?",
    "Quelle inquiétude est exprimée par les parents ?",
    "Quels effets du changement climatique sont mentionnés ?",
    "Quel type de formation est recommandé par l’intervenant ?",
    "Quelles difficultés rencontrent les petites entreprises ?",
    "Quelle perspective d’avenir est évoquée pour les jeunes diplômés ?",
    "Quelle est la conséquence de la décision judiciaire ?",
    "Comment réagit l’opinion publique face à cet événement ?",
    "Quel rôle joue la culture dans l’intégration des migrants ?",
    "Quelle solution technologique est présentée comme innovante ?",
    "Quelles sont les limites de cette solution ?",
    "Quelle critique est adressée au système de santé ?",
    "Quelle alternative est proposée à la voiture individuelle ?",
    "Quelle tendance de consommation est observée ?",
    "Quelle est la réaction des commerçants face à cette évolution ?",
    "Quelle importance accorde-t-on à la préservation des langues régionales ?",
    "Quelles sont les conséquences sociales de l’automatisation du travail ?",
    "Quel témoignage illustre les inégalités scolaires ?",
    "Quelles mesures sont prises pour favoriser la parité hommes-femmes ?",
    "Quelle inquiétude est exprimée concernant la cybersécurité ?",
    "Quelle stratégie de communication est utilisée par l’entreprise ?",
    "Quel est l’impact des nouvelles technologies sur les relations humaines ?",
    "Quelle opinion est exprimée sur le bénévolat ?",
    "Quelle difficulté rencontrent les habitants des zones rurales ?",
    "Quelles sont les raisons de la hausse des loyers ?",
    "Quelle solution propose l’architecte pour améliorer le logement social ?",
    "Quelles émotions exprime l’artiste dans son témoignage ?",
    "Quelle critique est formulée sur le système de transport public ?",
    "Quelle initiative éducative est mise en valeur ?",
    "Quelle inquiétude est exprimée face à la mondialisation ?",
    "Quelle place occupe l’écologie dans le discours politique ?",
    "Quelle conclusion tire le journaliste à la fin du reportage ?",
    "Quelle leçon générale peut-on retenir de cet extrait ?"
]

# 保存先フォルダ
output_dir = "listening_b2_mp3"
os.makedirs(output_dir, exist_ok=True)

# gTTS でフランス語音声に変換
for i, q in enumerate(questions, 1):
    tts = gTTS(text=q, lang="fr")
    filename = os.path.join(output_dir, f"listening_Q{i}.mp3")
    tts.save(filename)
    print(f"Saved: {filename}")

print("✅ すべての MP3 ファイルを生成しました！")
