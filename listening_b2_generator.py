from gtts import gTTS
import os

# 出力フォルダ
output_dir = "listening_b2_mp3"
os.makedirs(output_dir, exist_ok=True)

# DELF B2 レベルのリスニング用50問（仮例）
questions = [
    "Question 1. Quelle est la capitale de la France?",
    "Question 2. Dans quel pays se trouve la ville de Genève?",
    "Question 3. Quel moyen de transport est mentionné dans l’audio?",
    "Question 4. Quel est le principal sujet de la conférence?",
    "Question 5. Quelle est la saison décrite dans le dialogue?",
    # ... 省略: ここにQ50まで追加 ...
]

# 50問分の mp3 を生成
for i, text in enumerate(questions, start=1):
    tts = gTTS(text=text, lang="fr")
    filename = os.path.join(output_dir, f"q{i:02d}.mp3")
    tts.save(filename)
    print(f"✅ {filename} を生成しました")
MP3 ファイルを生成しました！")
