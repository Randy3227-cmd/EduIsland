-- ============================================
-- Script d'insertion des niveaux d'Orthographe
-- ============================================

-- 1️⃣ Insérer les types de niveau s'ils n'existent pas déjà
INSERT INTO niveau_types (id, name, description) VALUES
(1, 'QCM', 'Questionnaire à choix multiples'),
(2, 'carte', 'Carte à remplir'),
(3, 'texte', 'Texte à compléter')
ON CONFLICT (id) DO NOTHING;

-- 2️⃣ Trouver l'ID de la matière Orthographe
-- Supposons que la matière Orthographe a l'ID 1 (à vérifier dans votre base)
-- SELECT id FROM matieres WHERE name = 'Orthographe';

-- 3️⃣ Niveau 1 - QCM sur les accents
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(10, 1, 1, 15, '{
  "questions": [
    {
      "question": "Comment écrit-on le mot qui signifie ''bâtiment où on garde des livres'' ?",
      "options": ["bibliothèque", "bibliotheque", "bibliothéque", "bibliothèque"],
      "correctAnswer": "bibliothèque",
      "explanation": "Le mot ''bibliothèque'' prend un accent grave sur le ''e'' et un accent grave sur le second ''e''."
    },
    {
      "question": "Quelle est la bonne orthographe du mot qui signifie ''bâton magique'' ?",
      "options": ["baguette", "baguete", "bagguette", "baguétte"],
      "correctAnswer": "baguette",
      "explanation": "Le mot ''baguette'' s''écrit avec deux ''t'' et sans accent."
    },
    {
      "question": "Comment écrit-on ''un élément qui compose un gâteau'' ?",
      "options": ["ingrédient", "ingredient", "ingrédien", "ingrediant"],
      "correctAnswer": "ingrédient",
      "explanation": "''Ingrédient'' prend un accent aigu sur le premier ''e'' et se termine par ''ent''."
    },
    {
      "question": "Quelle est la bonne orthographe ?",
      "options": ["hôpital", "hopital", "hôpitale", "hospitale"],
      "correctAnswer": "hôpital",
      "explanation": "Le mot ''hôpital'' prend un accent circonflexe sur le ''o''."
    },
    {
      "question": "Comment écrit-on le contraire de ''avant'' ?",
      "options": ["après", "apres", "aprés", "appres"],
      "correctAnswer": "après",
      "explanation": "''Après'' prend un accent grave sur le ''e''."
    }
  ]
}');

-- 4️⃣ Niveau 2 - Texte à compléter sur les homophones
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(10, 2, 3, 20, '{
  "text": "Ma mère ___ allée au marché. Elle ___ acheté des pommes et des poires pour faire une tarte. ___ fruits étaient bien mûrs. Elle les ___ mis dans son panier. Ensuite, elle ___ revenue à la maison pour préparer le dessert.",
  "blanks": [
    {
      "position": 9,
      "correctAnswer": "est",
      "acceptedAnswers": ["est"],
      "hint": "Verbe être au présent, 3e personne du singulier"
    },
    {
      "position": 37,
      "correctAnswer": "a",
      "acceptedAnswers": ["a"],
      "hint": "Verbe avoir au présent, 3e personne du singulier"
    },
    {
      "position": 93,
      "correctAnswer": "Ces",
      "acceptedAnswers": ["Ces", "ces"],
      "hint": "Déterminant démonstratif pluriel (ce/cette au pluriel)"
    },
    {
      "position": 130,
      "correctAnswer": "a",
      "acceptedAnswers": ["a"],
      "hint": "Verbe avoir au présent"
    },
    {
      "position": 171,
      "correctAnswer": "est",
      "acceptedAnswers": ["est"],
      "hint": "Verbe être au présent"
    }
  ],
  "hints": [
    "''est'' = verbe être, ''et'' = conjonction de coordination",
    "''a'' = verbe avoir, ''à'' = préposition",
    "''ces'' = déterminant démonstratif pluriel, ''ses'' = adjectif possessif"
  ]
}');

-- 5️⃣ Vérification : afficher les niveaux créés
-- SELECT n.id, n.level_number, nt.name as type, n.xp_reward, m.name as matiere
-- FROM niveaux n
-- JOIN niveau_types nt ON n.type_id = nt.id
-- JOIN matieres m ON n.matiere_id = m.id
-- WHERE m.name = 'Orthographe'
-- ORDER BY n.level_number;
