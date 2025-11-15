-- ============================================
-- Script d'insertion des niveaux de Vocabulaire
-- Matière: Vocabulaire (matiere_id = 3, à vérifier)
-- Niveau: Primaire
-- ============================================

-- 1️⃣ Niveau 1 - QCM sur les synonymes et antonymes
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(12, 1, 1, 15, '{
  "questions": [
    {
      "question": "Quel mot est un synonyme de ''joyeux'' ?",
      "options": ["triste", "content", "fâché", "malade"],
      "correctAnswer": "content",
      "explanation": "Un synonyme est un mot qui a le même sens. ''Joyeux'' et ''content'' veulent dire la même chose."
    },
    {
      "question": "Quel est le contraire (antonyme) de ''grand'' ?",
      "options": ["énorme", "géant", "petit", "large"],
      "correctAnswer": "petit",
      "explanation": "Le contraire de ''grand'' est ''petit''. Ce sont des antonymes."
    },
    {
      "question": "Quel mot veut dire ''maison'' ?",
      "options": ["jardin", "voiture", "habitation", "école"],
      "correctAnswer": "habitation",
      "explanation": "Une habitation est un endroit où l''on habite, comme une maison."
    },
    {
      "question": "Quel mot est un synonyme de ''fatigué'' ?",
      "options": ["énergique", "épuisé", "joyeux", "rapide"],
      "correctAnswer": "épuisé",
      "explanation": "''Fatigué'' et ''épuisé'' sont des synonymes, ils veulent dire la même chose."
    },
    {
      "question": "Quel est le contraire de ''chaud'' ?",
      "options": ["tiède", "brûlant", "froid", "doux"],
      "correctAnswer": "froid",
      "explanation": "Le contraire de ''chaud'' est ''froid''."
    }
  ]
}');

-- 2️⃣ Niveau 2 - Texte à compléter sur les mots de vocabulaire
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(12, 2, 3, 20, '{
  "text": "Ce matin, le ciel est ___. Les oiseaux ___ dans les arbres. Marie met son ___ pour aller à l''école. Elle marche sur le ___ en faisant attention. Quand elle arrive, elle dit ___ à ses amis.",
  "blanks": [
    {
      "position": 22,
      "correctAnswer": "bleu",
      "acceptedAnswers": ["bleu", "clair", "dégagé"],
      "hint": "Couleur du ciel quand il fait beau"
    },
    {
      "position": 44,
      "correctAnswer": "chantent",
      "acceptedAnswers": ["chantent", "gazouillent", "sifflent"],
      "hint": "Ce que font les oiseaux"
    },
    {
      "position": 78,
      "correctAnswer": "manteau",
      "acceptedAnswers": ["manteau", "blouson", "veste"],
      "hint": "Vêtement pour ne pas avoir froid"
    },
    {
      "position": 120,
      "correctAnswer": "trottoir",
      "acceptedAnswers": ["trottoir", "chemin"],
      "hint": "Endroit où marchent les piétons"
    },
    {
      "position": 163,
      "correctAnswer": "bonjour",
      "acceptedAnswers": ["bonjour", "salut", "coucou"],
      "hint": "Formule de politesse pour dire hello"
    }
  ],
  "hints": [
    "Pense aux mots que tu utilises tous les jours",
    "Imagine la scène dans ta tête",
    "Lis bien toute la phrase avant de répondre"
  ]
}');

-- 3️⃣ Niveau 3 - QCM sur les familles de mots et le sens des mots
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(12, 3, 1, 20, '{
  "questions": [
    {
      "question": "Quel mot fait partie de la famille de ''dent'' ?",
      "options": ["dentiste", "danseur", "danger", "donner"],
      "correctAnswer": "dentiste",
      "explanation": "''Dentiste'' fait partie de la famille du mot ''dent'' : dent, dentiste, dentaire, dentition..."
    },
    {
      "question": "Qu''est-ce qu''un ''véhicule'' ?",
      "options": ["Un animal", "Un moyen de transport", "Un aliment", "Un vêtement"],
      "correctAnswer": "Un moyen de transport",
      "explanation": "Un véhicule est un moyen de transport : voiture, vélo, bus, train..."
    },
    {
      "question": "Quel mot fait partie de la famille de ''mer'' ?",
      "options": ["mère", "marin", "merci", "marche"],
      "correctAnswer": "marin",
      "explanation": "''Marin'' fait partie de la famille de ''mer'' : mer, marin, maritime, marée..."
    },
    {
      "question": "Que veut dire ''délicieux'' ?",
      "options": ["Très bon", "Très grand", "Très rapide", "Très fort"],
      "correctAnswer": "Très bon",
      "explanation": "''Délicieux'' veut dire très bon, excellent, savoureux. On l''utilise surtout pour la nourriture."
    },
    {
      "question": "Quel mot fait partie de la famille de ''terre'' ?",
      "options": ["terrasse", "terrible", "terminer", "temps"],
      "correctAnswer": "terrasse",
      "explanation": "''Terrasse'' fait partie de la famille de ''terre'' : terre, terrasse, terrain, territoire, enterrer..."
    }
  ]
}');

-- Vérification : afficher les niveaux créés
-- SELECT n.id, n.level_number, nt.name as type, n.xp_reward, m.name as matiere
-- FROM niveaux n
-- JOIN niveau_types nt ON n.type_id = nt.id
-- JOIN matieres m ON n.matiere_id = m.id
-- WHERE m.name = 'Vocabulaire'
-- ORDER BY n.level_number;
