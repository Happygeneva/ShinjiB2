from gtts import gTTS

# DELF B2 レベル模擬リスニング質問 50問
questions = [
    "Question 1. Quel est le principal problème évoqué dans le dialogue ?",
    "Question 2. Quelle solution est proposée par l’un des interlocuteurs ?",
    "Question 3. Quelle est l’attitude du journaliste face à ce sujet ?",
    "Question 4. Quelle raison explique l’augmentation des prix mentionnée ?",
    "Question 5. Quelle est la réaction du public selon l’intervenant ?",
    "Question 6. Quel est l’objectif principal de cette campagne ?",
    "Question 7. Pourquoi l’entreprise a-t-elle changé sa stratégie ?",
    "Question 8. Que pense la personne interrogée du télétravail ?",
    "Question 9. Quelles conséquences pour l’environnement sont citées ?",
    "Question 10. Quel avantage est mis en avant par l’étudiant ?",
    "Question 11. Quelle critique est formulée à propos du projet ?",
    "Question 12. Quelle comparaison est faite entre deux pays ?",
    "Question 13. Quelles difficultés sont rencontrées par les habitants ?",
    "Question 14. Que recommande l’expert invité ?",
    "Question 15. Quelle alternative est proposée dans la discussion ?",
    "Question 16. Quelle est l’importance des réseaux sociaux selon le texte ?",
    "Question 17. Quelle inquiétude est exprimée par les parents ?",
    "Question 18. Quelle tendance culturelle est décrite ?",
    "Question 19. Quel rôle joue l’État dans cette situation ?",
    "Question 20. Quelles causes de ce phénomène sont mentionnées ?",
    "Question 21. Quelle est la position de l’orateur sur le bénévolat ?",
    "Question 22. Quelle innovation technologique est présentée ?",
    "Question 23. Quels avantages économiques sont évoqués ?",
    "Question 24. Quelle conséquence pour les jeunes générations ?",
    "Question 25. Quelle décision politique est critiquée ?",
    "Question 26. Quelle différence est soulignée entre ville et campagne ?",
    "Question 27. Quel conseil est donné aux étudiants ?",
    "Question 28. Quelle est la principale inquiétude concernant la santé ?",
    "Question 29. Quelles solutions collectives sont suggérées ?",
    "Question 30. Quelle conclusion tire le présentateur ?",
    "Question 31. Quelle est l’attitude du locuteur face au changement climatique ?",
    "Question 32. Quelle mesure européenne est expliquée ?",
    "Question 33. Quel impact du tourisme est décrit ?",
    "Question 34. Quelle critique est faite des médias ?",
    "Question 35. Quelle évolution du marché du travail est évoquée ?",
    "Question 36. Quel problème rencontrent les jeunes diplômés ?",
    "Question 37. Quelles valeurs culturelles sont mises en avant ?",
    "Question 38. Que pense l’intervenant de la mondialisation ?",
    "Question 39. Quelle différence générationnelle est mentionnée ?",
    "Question 40. Quel exemple illustre l’argument de l’orateur ?",
    "Question 41. Quelle mesure éducative est proposée ?",
    "Question 42. Quelle est la conséquence du développement technologique ?",
    "Question 43. Quelle initiative locale est décrite ?",
    "Question 44. Que souligne le témoignage de l’étudiante étrangère ?",
    "Question 45. Quelle valeur personnelle est défendue par l’intervenant ?",
    "Question 46. Quelle inquiétude est exprimée face à l’avenir ?",
    "Question 47. Quelle critique est faite du système de transport ?",
    "Question 48. Quelle est la réaction des associations ?",
    "Question 49. Quelle perspective optimiste est présentée ?",
    "Question 50. Quelle conclusion générale ressort de ce débat ?"
]

# 50問の音声を生成
for i, question in enumerate(questions, 1):
    tts = gTTS(text=question, lang="fr")
    filename = f"question_{i}.mp3"
    tts.save(filename)
    print(f"{filename} を生成しました")

print("✅ 50問のMP3ファイルがすべて完成しました！")
