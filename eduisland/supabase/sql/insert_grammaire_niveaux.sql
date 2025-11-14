-- ============================================
-- Script d'insertion des niveaux de Grammaire
-- Matière: Grammaire (matiere_id = 4, à vérifier)
-- Niveau: Primaire
-- ============================================

-- 1️⃣ Niveau 1 - QCM sur les natures de mots (nom, verbe, adjectif)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(13, 1, 1, 15, '{
  "questions": [
    {
      "question": "Dans la phrase \"Le chat mange\", quel est le verbe ?",
      "options": ["Le", "chat", "mange", "Le chat"],
      "correctAnswer": "mange",
      "explanation": "Le verbe est le mot qui indique l''action. Ici, \"mange\" est le verbe (action de manger)."
    },
    {
      "question": "Quel mot est un nom ?",
      "options": ["dormir", "rouge", "table", "lentement"],
      "correctAnswer": "table",
      "explanation": "Un nom désigne une personne, un animal ou une chose. \"Table\" est un nom."
    },
    {
      "question": "Dans \"une jolie fleur\", quel mot est l''adjectif ?",
      "options": ["une", "jolie", "fleur", "une fleur"],
      "correctAnswer": "jolie",
      "explanation": "L''adjectif donne des précisions sur le nom. \"Jolie\" décrit la fleur."
    },
    {
      "question": "Quelle phrase est au pluriel ?",
      "options": ["Le chien court", "Les chiens courent", "Un chien court", "Le chat joue"],
      "correctAnswer": "Les chiens courent",
      "explanation": "Au pluriel, on utilise \"les\" et on ajoute un \"s\". \"Les chiens courent\" est au pluriel."
    },
    {
      "question": "Quel est le sujet dans \"Marie chante\" ?",
      "options": ["Marie", "chante", "Marie chante", "e"],
      "correctAnswer": "Marie",
      "explanation": "Le sujet est celui qui fait l''action. Marie est celle qui chante, donc Marie est le sujet."
    }
  ]
}');

-- 2️⃣ Niveau 2 - Texte à compléter sur les accords et la conjugaison
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(13, 2, 3, 20, '{
  "text": "Les enfants ___ dans le parc. Ils ___ très contents. Marie ___ un ballon rouge et Paul ___ à la balançoire. Leurs parents ___ sur un banc.",
  "blanks": [
    {
      "position": 13,
      "correctAnswer": "jouent",
      "acceptedAnswers": ["jouent"],
      "hint": "Verbe jouer au présent, 3e personne du pluriel (ils)"
    },
    {
      "position": 37,
      "correctAnswer": "sont",
      "acceptedAnswers": ["sont"],
      "hint": "Verbe être au présent, 3e personne du pluriel (ils)"
    },
    {
      "position": 57,
      "correctAnswer": "a",
      "acceptedAnswers": ["a"],
      "hint": "Verbe avoir au présent, 3e personne du singulier (elle)"
    },
    {
      "position": 84,
      "correctAnswer": "joue",
      "acceptedAnswers": ["joue", "va"],
      "hint": "Verbe au présent, 3e personne du singulier (il)"
    },
    {
      "position": 119,
      "correctAnswer": "sont",
      "acceptedAnswers": ["sont", "restent"],
      "hint": "Verbe au présent, 3e personne du pluriel (ils)"
    }
  ],
  "hints": [
    "Attention aux accords : singulier ou pluriel ?",
    "Pense à la terminaison des verbes (e, es, e, ons, ez, ent)",
    "Qui fait l''action ? Une personne (il/elle) ou plusieurs (ils/elles) ?"
  ]
}');

-- 3️⃣ Niveau 3 - QCM sur les types de phrases et la ponctuation
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(13, 3, 1, 20, '{
  "questions": [
    {
      "question": "Quel signe de ponctuation termine une question ?",
      "options": [".", "!", "?", ","],
      "correctAnswer": "?",
      "explanation": "Une question se termine toujours par un point d''interrogation (?)."
    },
    {
      "question": "Quelle phrase est une phrase interrogative ?",
      "options": ["Viens ici", "Il fait beau", "Est-ce que tu viens", "Quel beau temps"],
      "correctAnswer": "Est-ce que tu viens",
      "explanation": "Une phrase interrogative pose une question. \"Est-ce que tu viens\" est une question."
    },
    {
      "question": "Comment s''appelle ce signe de ponctuation : virgule ?",
      "options": ["Point", "Virgule", "Point-virgule", "Deux-points"],
      "correctAnswer": "Virgule",
      "explanation": "Le signe virgule s''appelle une virgule. Elle sert à séparer des éléments dans une phrase."
    },
    {
      "question": "Quelle phrase exprime un ordre ?",
      "options": ["Tu ranges ta chambre", "Range ta chambre", "Est-ce que tu ranges", "Quelle belle chambre"],
      "correctAnswer": "Range ta chambre",
      "explanation": "Une phrase impérative donne un ordre. \"Range ta chambre\" est un ordre."
    },
    {
      "question": "Quel mot est un déterminant ?",
      "options": ["beau", "maison", "le", "court"],
      "correctAnswer": "le",
      "explanation": "Un déterminant se place avant le nom. \"Le\" est un déterminant (le chat, le livre...)."
    }
  ]
}');

-- Vérification : afficher les niveaux créés
-- SELECT n.id, n.level_number, nt.name as type, n.xp_reward, m.name as matiere
-- FROM niveaux n
-- JOIN niveau_types nt ON n.type_id = nt.id
-- JOIN matieres m ON n.matiere_id = m.id
-- WHERE m.name = 'Grammaire'
-- ORDER BY n.level_number;
