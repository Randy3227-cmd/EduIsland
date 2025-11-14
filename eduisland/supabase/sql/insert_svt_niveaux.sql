-- ========================================
-- Niveaux pour Science de la Vie
-- Matière: Science de la vie (matiere_id à vérifier dans votre base)
-- ========================================

-- ==================== NIVEAU 1 - QCM ====================
-- Type: QCM (type_id = 1)
-- Thème: Le corps humain
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(
  15,
  1,
  1,
  10,
  '{
    "questions": [
      {
        "question": "Combien de sens a l''etre humain ?",
        "options": ["3 sens", "5 sens", "7 sens", "10 sens"],
        "correctAnswer": "5 sens",
        "explanation": "Les 5 sens sont : la vue, l''ouie, l''odorat, le gout et le toucher."
      },
      {
        "question": "Quel organe pompe le sang dans tout le corps ?",
        "options": ["Le cerveau", "Le coeur", "Les poumons", "L''estomac"],
        "correctAnswer": "Le coeur",
        "explanation": "Le coeur bat pour faire circuler le sang dans tout le corps."
      },
      {
        "question": "Combien de dents a un adulte ?",
        "options": ["20 dents", "24 dents", "32 dents", "40 dents"],
        "correctAnswer": "32 dents",
        "explanation": "Un adulte a normalement 32 dents definitives."
      },
      {
        "question": "Quel organe nous permet de respirer ?",
        "options": ["Le coeur", "L''estomac", "Les poumons", "Le foie"],
        "correctAnswer": "Les poumons",
        "explanation": "Les poumons nous permettent de respirer l''oxygene."
      },
      {
        "question": "Combien d''os a le squelette humain environ ?",
        "options": ["106 os", "206 os", "306 os", "406 os"],
        "correctAnswer": "206 os",
        "explanation": "Le squelette d''un adulte est compose d''environ 206 os."
      }
    ]
  }'::jsonb
);

-- ==================== NIVEAU 2 - TEXTE À COMPLÉTER ====================
-- Type: Texte à compléter (type_id = 3)
-- Thème: Les plantes
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(
  15,
  2,
  3,
  12,
  '{
    "text": "Les plantes ont besoin de plusieurs choses pour vivre. Elles ont besoin d''___ pour boire. Elles ont besoin de ___ pour faire la photosynthese. Leurs ___ poussent dans la terre. Leurs ___ sont souvent vertes. Les plantes produisent de l''___ que nous respirons.",
    "blanks": [
      {
        "position": 69,
        "correctAnswer": "eau",
        "acceptedAnswers": ["eau", "l''eau"],
        "hint": "Liquide transparent essentiel"
      },
      {
        "position": 104,
        "correctAnswer": "lumiere",
        "acceptedAnswers": ["lumiere", "soleil", "lumière"],
        "hint": "Ce qui vient du soleil"
      },
      {
        "position": 143,
        "correctAnswer": "racines",
        "acceptedAnswers": ["racines"],
        "hint": "Parties sous la terre"
      },
      {
        "position": 173,
        "correctAnswer": "feuilles",
        "acceptedAnswers": ["feuilles"],
        "hint": "Parties vertes et plates"
      },
      {
        "position": 225,
        "correctAnswer": "oxygene",
        "acceptedAnswers": ["oxygene", "oxygène", "air"],
        "hint": "Gaz indispensable pour respirer"
      }
    ]
  }'::jsonb
);

-- ==================== NIVEAU 3 - CARTE ====================
-- Type: Carte (type_id = 2)
-- Thème: Le cycle de l'eau
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(
  15,
  3,
  2,
  15,
  '{
    "image": "/images/cycle_eau.png",
    "question": "Clique sur les etapes du cycle de l''eau dans l''ordre !",
    "zones": [
      {
        "name": "l''evaporation",
        "x": 0.20,
        "y": 0.75,
        "radius": 0.12,
        "hint": "L''eau de la mer se transforme en vapeur"
      },
      {
        "name": "les nuages",
        "x": 0.50,
        "y": 0.20,
        "radius": 0.12,
        "hint": "La vapeur d''eau monte et forme..."
      },
      {
        "name": "la pluie",
        "x": 0.45,
        "y": 0.45,
        "radius": 0.12,
        "hint": "L''eau retombe du ciel"
      },
      {
        "name": "la riviere",
        "x": 0.55,
        "y": 0.70,
        "radius": 0.12,
        "hint": "L''eau coule vers la mer"
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
--   n.content
-- FROM niveaux n
-- JOIN niveau_types nt ON n.type_id = nt.id
-- WHERE n.matiere_id = 15
-- ORDER BY n.level_number;
