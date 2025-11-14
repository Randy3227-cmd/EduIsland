-- ============================================
-- Script d'insertion des niveaux de Nombre
-- Matière: Nombre (matiere_id = 2, à vérifier)
-- Niveau: Primaire
-- ============================================

-- 1️⃣ Niveau 1 - QCM sur les nombres pairs et impairs
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(11, 1, 1, 15, '{
  "questions": [
    {
      "question": "Quel nombre est pair ?",
      "options": ["7", "12", "15", "19"],
      "correctAnswer": "12",
      "explanation": "Un nombre pair peut être divisé par 2. 12 ÷ 2 = 6."
    },
    {
      "question": "Combien font 5 + 3 ?",
      "options": ["6", "7", "8", "9"],
      "correctAnswer": "8",
      "explanation": "5 + 3 = 8. Tu peux compter sur tes doigts !"
    },
    {
      "question": "Quel est le nombre le plus grand ?",
      "options": ["23", "32", "12", "21"],
      "correctAnswer": "32",
      "explanation": "32 est le plus grand nombre parmi ces choix."
    },
    {
      "question": "Combien font 10 - 4 ?",
      "options": ["4", "5", "6", "7"],
      "correctAnswer": "6",
      "explanation": "10 - 4 = 6. Si tu as 10 bonbons et que tu en manges 4, il t''en reste 6."
    },
    {
      "question": "Quel nombre vient après 19 ?",
      "options": ["18", "20", "21", "17"],
      "correctAnswer": "20",
      "explanation": "Après 19 vient 20 : 18, 19, 20, 21..."
    }
  ]
}');

-- 2️⃣ Niveau 2 - Texte à compléter sur les opérations simples
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(11, 2, 3, 20, '{
  "text": "Julie a ___ pommes. Elle en donne ___ à son frère. Il lui reste donc ___ pommes. Ensuite, sa maman lui en donne ___ de plus. Maintenant, Julie a ___ pommes en tout.",
  "blanks": [
    {
      "position": 10,
      "correctAnswer": "8",
      "acceptedAnswers": ["8", "huit"],
      "hint": "Un nombre entre 5 et 10"
    },
    {
      "position": 39,
      "correctAnswer": "3",
      "acceptedAnswers": ["3", "trois"],
      "hint": "Un petit nombre"
    },
    {
      "position": 68,
      "correctAnswer": "5",
      "acceptedAnswers": ["5", "cinq"],
      "hint": "8 - 3 = ?"
    },
    {
      "position": 105,
      "correctAnswer": "4",
      "acceptedAnswers": ["4", "quatre"],
      "hint": "Un nombre entre 3 et 5"
    },
    {
      "position": 141,
      "correctAnswer": "9",
      "acceptedAnswers": ["9", "neuf"],
      "hint": "5 + 4 = ?"
    }
  ],
  "hints": [
    "Lis bien le problème et fais les calculs dans l''ordre",
    "Tu peux dessiner pour t''aider à compter",
    "N''oublie pas : donner = soustraire, recevoir = additionner"
  ]
}');

-- 3️⃣ Niveau 3 - QCM sur la comparaison et l'ordre des nombres
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(11, 3, 1, 20, '{
  "questions": [
    {
      "question": "Range ces nombres du plus petit au plus grand : 15, 8, 23, 12",
      "options": ["8, 12, 15, 23", "23, 15, 12, 8", "12, 15, 8, 23", "8, 15, 12, 23"],
      "correctAnswer": "8, 12, 15, 23",
      "explanation": "Du plus petit au plus grand : 8, 12, 15, 23."
    },
    {
      "question": "Quel signe doit-on mettre : 17 ___ 25 ?",
      "options": ["<", ">", "=", "≠"],
      "correctAnswer": "<",
      "explanation": "17 est plus petit que 25, donc 17 < 25."
    },
    {
      "question": "Combien de dizaines y a-t-il dans 34 ?",
      "options": ["2", "3", "4", "34"],
      "correctAnswer": "3",
      "explanation": "34 = 3 dizaines + 4 unités. Il y a donc 3 dizaines."
    },
    {
      "question": "Quel est le double de 6 ?",
      "options": ["3", "8", "10", "12"],
      "correctAnswer": "12",
      "explanation": "Le double de 6 c''est 6 × 2 = 12."
    },
    {
      "question": "Quelle est la moitié de 10 ?",
      "options": ["2", "5", "10", "20"],
      "correctAnswer": "5",
      "explanation": "La moitié de 10 c''est 10 ÷ 2 = 5."
    }
  ]
}');

-- Vérification : afficher les niveaux créés
-- SELECT n.id, n.level_number, nt.name as type, n.xp_reward, m.name as matiere
-- FROM niveaux n
-- JOIN niveau_types nt ON n.type_id = nt.id
-- JOIN matieres m ON n.matiere_id = m.id
-- WHERE m.name = 'Nombre'
-- ORDER BY n.level_number;
