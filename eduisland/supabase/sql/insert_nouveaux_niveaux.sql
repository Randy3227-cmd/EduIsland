-- ============================================
-- Script d'insertion des niveaux manquants
-- Ce script ajoute des niveaux pour toutes les matières restantes
-- afin de garantir que "tous les niveaux aient des niveaux".
-- Matières ajoutées : Histoire (16), Géographie (17), Science de la terre (18), 
-- Physique (19), Chimie (20), Problème (21), Anglais (22).
-- Assurez-vous que les `matiere_id` correspondent bien à votre base de données.
-- ============================================

-- ============================================
-- Matière: Histoire (matiere_id = 16)
-- ============================================
-- 1️⃣ Niveau 1 - QCM (Facile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(16, 1, 1, 15, '{
  "questions": [
    {
      "question": "Qui a fondé l''Empire romain ?",
      "options": ["Jules César", "Auguste", "Néron", "Trajan"],
      "correctAnswer": "Auguste",
      "explanation": "Auguste, le fils adoptif de Jules César, est devenu le premier empereur romain."
    },
    {
      "question": "Dans quelle ville se trouvaient les grandes pyramides ?",
      "options": ["Rome", "Athènes", "Gizeh", "Sparte"],
      "correctAnswer": "Gizeh",
      "explanation": "Les célèbres pyramides d''Égypte se trouvent sur le plateau de Gizeh."
    }
  ]
}');

-- 2️⃣ Niveau 2 - Texte à compléter (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(16, 2, 3, 20, '{
  "text": "Au Moyen Âge, les seigneurs vivaient dans des ___ forts. Les paysans qui travaillaient la terre s''appelaient des ___. Le chevalier devait respecter un code d''___. Pour attaquer un château, on utilisait parfois une ___.",
  "blanks": [
    {
      "position": 46,
      "correctAnswer": "châteaux",
      "acceptedAnswers": ["châteaux", "chateaux"],
      "hint": "Grand bâtiment fortifié"
    },
    {
      "position": 105,
      "correctAnswer": "serfs",
      "acceptedAnswers": ["serfs", "paysans", "vilains"],
      "hint": "Travailleurs de la terre"
    },
    {
      "position": 146,
      "correctAnswer": "honneur",
      "acceptedAnswers": ["honneur", "honneur"],
      "hint": "Valeur morale très importante"
    },
    {
      "position": 194,
      "correctAnswer": "catapulte",
      "acceptedAnswers": ["catapulte", "tour"],
      "hint": "Machine de guerre pour lancer des pierres"
    }
  ],
  "hints": [
    "Pense aux mots caractéristiques du Moyen Âge",
    "Un serf est lié à la terre de son seigneur"
  ]
}');

-- ============================================
-- Matière: Géographie (matiere_id = 17)
-- ============================================
-- 1️⃣ Niveau 1 - QCM (Facile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(17, 1, 1, 15, '{
  "questions": [
    {
      "question": "Combien y a-t-il de continents sur Terre (modèle à 6) ?",
      "options": ["4", "5", "6", "7"],
      "correctAnswer": "6",
      "explanation": "Les 6 continents sont : l''Afrique, l''Amérique, l''Antarctique, l''Asie, l''Europe et l''Océanie."
    },
    {
      "question": "Quel est le plus grand océan ?",
      "options": ["Atlantique", "Indien", "Pacifique", "Arctique"],
      "correctAnswer": "Pacifique",
      "explanation": "L''océan Pacifique est le plus vaste et le plus profond des océans."
    }
  ]
}');

-- 2️⃣ Niveau 2 - Texte à compléter (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(17, 2, 3, 20, '{
  "text": "La capitale de la France est ___. Le plus long fleuve français est la ___. La chaîne de montagnes séparant la France de l''Espagne s''appelle les ___.",
  "blanks": [
    {
      "position": 29,
      "correctAnswer": "Paris",
      "acceptedAnswers": ["Paris", "paris"],
      "hint": "Ville lumière"
    },
    {
      "position": 67,
      "correctAnswer": "Loire",
      "acceptedAnswers": ["Loire", "loire"],
      "hint": "Fleuve des châteaux"
    },
    {
      "position": 149,
      "correctAnswer": "Pyrénées",
      "acceptedAnswers": ["Pyrénées", "pyrenees", "pyrénées", "Pyrenees"],
      "hint": "Montagnes au sud-ouest"
    }
  ],
  "hints": [
    "Relis bien les points cardinaux et les grands repères de France"
  ]
}');

-- ============================================
-- Matière: Science de la terre (matiere_id = 18)
-- ============================================
-- 1️⃣ Niveau 1 - QCM (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(18, 1, 1, 15, '{
  "questions": [
    {
      "question": "Comment s''appelle la couche externe solide de la Terre ?",
      "options": ["Le noyau", "Le manteau", "La croûte", "Le magma"],
      "correctAnswer": "La croûte",
      "explanation": "La croûte terrestre est la couche solide à la surface de la Terre."
    },
    {
      "question": "Quelle roche se forme par le refroidissement du magma ?",
      "options": ["Sédimentaire", "Magmatique", "Métamorphique", "Calcaire"],
      "correctAnswer": "Magmatique",
      "explanation": "Une roche magmatique (ou ignée) est issue du refroidissement et de la solidification du magma."
    }
  ]
}');

-- ============================================
-- Matière: Physique (matiere_id = 19)
-- ============================================
-- 1️⃣ Niveau 1 - QCM (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(19, 1, 1, 15, '{
  "questions": [
    {
      "question": "Qui a formulé la loi de la gravité universelle ?",
      "options": ["Albert Einstein", "Isaac Newton", "Galilée", "Marie Curie"],
      "correctAnswer": "Isaac Newton",
      "explanation": "Isaac Newton est célèbre pour avoir théorisé la gravité après avoir vu une pomme tomber."
    },
    {
      "question": "Quelle est l''unité de mesure de la force ?",
      "options": ["Le Joule", "Le Watt", "Le Newton", "Le Volt"],
      "correctAnswer": "Le Newton",
      "explanation": "En l''honneur d''Isaac Newton, l''unité de force dans le système international est le Newton (N)."
    }
  ]
}');

-- ============================================
-- Matière: Chimie (matiere_id = 20)
-- ============================================
-- 1️⃣ Niveau 1 - QCM (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(20, 1, 1, 15, '{
  "questions": [
    {
      "question": "Quel est le symbole chimique de l''eau ?",
      "options": ["CO2", "H2O", "O2", "NaCl"],
      "correctAnswer": "H2O",
      "explanation": "L''eau est composée de deux atomes d''hydrogène et d''un atome d''oxygène (H2O)."
    },
    {
      "question": "Dans le tableau périodique, quel élément a pour symbole O ?",
      "options": ["Or", "Osmium", "Oxygène", "Ozone"],
      "correctAnswer": "Oxygène",
      "explanation": "O est le symbole de l''oxygène, indispensable à la respiration."
    }
  ]
}');

-- ============================================
-- Matière: Problème (matiere_id = 21)
-- ============================================
-- 1️⃣ Niveau 1 - QCM (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(21, 1, 1, 25, '{
  "questions": [
    {
      "question": "Un train roule à 120 km/h. Combien de temps mettra-t-il pour parcourir 300 km ?",
      "options": ["2 heures", "2 heures 30", "3 heures", "3 heures 30"],
      "correctAnswer": "2 heures 30",
      "explanation": "Temps = Distance / Vitesse = 300 / 120 = 2.5 heures, soit 2 heures et 30 minutes."
    },
    {
      "question": "Si j''achète 3 cahiers à 2€ l''unité et 2 stylos à 1.50€ l''unité, combien vais-je payer au total ?",
      "options": ["7€", "8€", "9€", "10€"],
      "correctAnswer": "9€",
      "explanation": "(3 * 2) + (2 * 1.5) = 6 + 3 = 9€."
    }
  ]
}');

-- ============================================
-- Matière: Anglais (matiere_id = 22)
-- ============================================
-- 1️⃣ Niveau 1 - QCM Vocabulaire basique (Facile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(22, 1, 1, 15, '{
  "questions": [
    {
      "question": "Comment dit-on ''Chat'' en anglais ?",
      "options": ["Dog", "Cat", "Bird", "Mouse"],
      "correctAnswer": "Cat",
      "explanation": "''Cat'' signifie chat, ''Dog'' chien, ''Bird'' oiseau et ''Mouse'' souris."
    },
    {
      "question": "Que veut dire ''Hello'' ?",
      "options": ["Au revoir", "Merci", "Bonjour", "S''il te plaît"],
      "correctAnswer": "Bonjour",
      "explanation": "''Hello'' est la salutation classique en anglais pour dire Bonjour."
    }
  ]
}');

-- 2️⃣ Niveau 2 - Texte à compléter (To Be) (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(22, 2, 3, 20, '{
  "text": "I ___ a student. You ___ my friend. He ___ very tall. We ___ happy today.",
  "blanks": [
    {
      "position": 2,
      "correctAnswer": "am",
      "acceptedAnswers": ["am", "''m", "am"],
      "hint": "Verbe to be 1ère personne du singulier"
    },
    {
      "position": 22,
      "correctAnswer": "are",
      "acceptedAnswers": ["are", "''re"],
      "hint": "Verbe to be avec You"
    },
    {
      "position": 39,
      "correctAnswer": "is",
      "acceptedAnswers": ["is", "''s"],
      "hint": "Verbe to be avec He"
    },
    {
      "position": 56,
      "correctAnswer": "are",
      "acceptedAnswers": ["are", "''re"],
      "hint": "Verbe to be avec We"
    }
  ],
  "hints": [
    "Conjugaison du verbe ÊTRE (to be) au présent"
  ]
}');
