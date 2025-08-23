from gtts import gTTS
import os

# 質問リスト（例：フランス語 DELF B2 レベル 5問）
questions = [
    "Question 1: Pouvez-vous décrire une expérience qui a changé votre point de vue sur un sujet important?",
    "Question 2: Quel est le rôle des médias dans la société contemporaine?",
    "Question 3: Faut-il limiter l’utilisation des réseaux sociaux chez les jeunes?",
    "Question 4: Quels sont les avantages et les inconvénients du télétravail?",
    "Question 5: Pensez-vous que la mondialisation soit une chance ou une menace?"
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
