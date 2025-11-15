-- ========================================
-- Niveaux pour Géométrie
-- Matière: Géométrie (matiere_id = 5, vérifier dans votre base)
-- ========================================

-- ==================== NIVEAU 1 - QCM ====================
-- Type: QCM (type_id = 1)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(
  14,
  1,
  1,
  10,
  '{
    "questions": [
      {
        "question": "Combien de cotes a un triangle ?",
        "options": ["2 cotes", "3 cotes", "4 cotes", "5 cotes"],
        "correctAnswer": "3 cotes",
        "explanation": "Un triangle a toujours 3 cotes et 3 angles."
      },
      {
        "question": "Quelle forme a 4 cotes egaux ?",
        "options": ["Un rectangle", "Un carre", "Un triangle", "Un cercle"],
        "correctAnswer": "Un carre",
        "explanation": "Un carre a 4 cotes de meme longueur."
      },
      {
        "question": "Combien de coins (sommets) a un rectangle ?",
        "options": ["2 coins", "3 coins", "4 coins", "5 coins"],
        "correctAnswer": "4 coins",
        "explanation": "Un rectangle a 4 coins (sommets)."
      },
      {
        "question": "Un cercle a combien de cotes ?",
        "options": ["1 cote", "0 cote", "3 cotes", "4 cotes"],
        "correctAnswer": "0 cote",
        "explanation": "Un cercle n\"a pas de cotes droits, juste une ligne courbe."
      },
      {
        "question": "Quelle forme ressemble a une porte ?",
        "options": ["Un cercle", "Un triangle", "Un rectangle", "Une etoile"],
        "correctAnswer": "Un rectangle",
        "explanation": "Une porte a generalement la forme d\"un rectangle."
      }
    ]
  }'::jsonb
);

-- ==================== NIVEAU 2 - CARTE ====================
-- Type: Carte (type_id = 2)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(
  14,
  2,
  2,
  15,
  '{
    "image": "/images/formes_geometriques.png",
    "question": "Clique sur les formes dans l\"ordre demandé !",
    "zones": [
      {
        "name": "le carré",
        "x": 0.35,
        "y": 0.37,
        "radius": 0.10,
        "hint": "4 cotes egaux, 4 angles droits"
      },
      {
        "name": "le cercle",
        "x": 0.65,
        "y": 0.37,
        "radius": 0.10,
        "hint": "Une forme ronde, sans coins"
      },
      {
        "name": "le rectangle",
        "x": 0.35,
        "y": 0.63,
        "radius": 0.10,
        "hint": "4 cotes, 2 longs et 2 courts"
      },
      {
        "name": "le triangle",
        "x": 0.65,
        "y": 0.63,
        "radius": 0.10,
        "hint": "3 cotes, 3 angles"
      }
    ]
  }'::jsonb
);

-- ==================== NIVEAU 3 - TEXTE À COMPLÉTER ====================
-- Type: Texte à compléter (type_id = 3)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(
  14,
  3,
  3,
  12,
  '{
    "text": "Les formes geometriques sont partout ! Un ___ a 3 cotes. Un ___ a 4 cotes egaux. Un ___ est rond et n''a pas de coins. Pour mesurer la longueur d''une ligne on utilise une ___.",
    "blanks": [
      {
        "position": 43,
        "correctAnswer": "triangle",
        "acceptedAnswers": ["triangle"],
        "hint": "Une forme avec 3 cotes"
      },
      {
        "position": 62,
        "correctAnswer": "carre",
        "acceptedAnswers": ["carre", "carré"],
        "hint": "Tous ses cotes ont la meme longueur"
      },
      {
        "position": 86,
        "correctAnswer": "cercle",
        "acceptedAnswers": ["cercle"],
        "hint": "Une forme ronde"
      },
      {
        "position": 154,
        "correctAnswer": "regle",
        "acceptedAnswers": ["regle", "règle"],
        "hint": "Un outil de mesure"
      }
    ]
  }'::jsonb
);

-- ========================================
-- Vérification (facultatif)
-- ========================================
-- SELECT 
--   n.id, 
--   n.level_number, 
--   nt.name AS type, 
--   n.xp_reward, 
--   n.content->>'questions' AS questions_count
-- FROM niveaux n
-- JOIN niveau_types nt ON n.type_id = nt.id
-- WHERE n.matiere_id = 5
-- ORDER BY n.level_number;
