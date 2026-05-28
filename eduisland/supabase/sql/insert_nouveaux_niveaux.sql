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

-- 3️⃣ Niveau 3 - Anglais Vocabulaire avancé (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(22, 3, 1, 25, '{
  "questions": [
    {
      "question": "Which of these words is a synonym of ''beautiful'' ?",
      "options": ["Ugly", "Gorgeous", "Angry", "Sad"],
      "correctAnswer": "Gorgeous",
      "explanation": "''Gorgeous'' means extremely beautiful."
    },
    {
      "question": "Choose the correct past tense of the verb ''to run'' :",
      "options": ["Runned", "Ran", "Running", "Runs"],
      "correctAnswer": "Ran",
      "explanation": "''To run'' is an irregular verb. Its past tense is ''ran''."
    }
  ]
}');

-- ============================================
-- Matière: Orthographe (matiere_id = 10)
-- ============================================
-- 3️⃣ Niveau 3 - Texte à compléter - Accents et Homophones (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(10, 3, 3, 20, '{
  "text": "Il ___ une fois, dans une ___ forêt, une petite fille qui ___ un manteau rouge. Elle marchait ___ sa grand-mère.",
  "blanks": [
    { "position": 3, "correctAnswer": "était", "acceptedAnswers": ["était", "etait"], "hint": "Verbe être à l''imparfait" },
    { "position": 24, "correctAnswer": "sombre", "acceptedAnswers": ["sombre", "grande"], "hint": "Synonyme d''obscure" },
    { "position": 49, "correctAnswer": "portait", "acceptedAnswers": ["portait"], "hint": "Verbe porter à l''imparfait" },
    { "position": 77, "correctAnswer": "vers", "acceptedAnswers": ["vers"], "hint": "Homophone de vert, indique la direction" }
  ],
  "hints": ["Fais attention aux homophones et à l''imparfait"]
}');

-- ============================================
-- Matière: Nombre (matiere_id = 11)
-- ============================================
-- 4️⃣ Niveau 4 - QCM - Multiplications et Fractions (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(11, 4, 1, 25, '{
  "questions": [
    {
      "question": "Combien font 7 x 8 ?",
      "options": ["48", "54", "56", "64"],
      "correctAnswer": "56",
      "explanation": "D''après les tables de multiplication, 7 x 8 = 56."
    },
    {
      "question": "Que représente la moitié de la moitié ?",
      "options": ["Un tiers", "Un quart", "Trois quarts", "Un cinquième"],
      "correctAnswer": "Un quart",
      "explanation": "La moitié (1/2) divisée par 2 donne un quart (1/4)."
    }
  ]
}');

-- ============================================
-- Matière: Vocabulaire (matiere_id = 12)
-- ============================================
-- 4️⃣ Niveau 4 - QCM - Synonymes et Antonymes (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(12, 4, 1, 25, '{
  "questions": [
    {
      "question": "Quel est l''antonyme de ''éphémère'' ?",
      "options": ["Court", "Éternel", "Passager", "Fragile"],
      "correctAnswer": "Éternel",
      "explanation": "''Éphémère'' signifie qui dure très peu de temps. Son contraire est ''éternel''."
    },
    {
      "question": "Trouve le synonyme de ''scintiller'' :",
      "options": ["Éteindre", "Briller", "Sombrer", "Bruit"],
      "correctAnswer": "Briller",
      "explanation": "''Scintiller'' signifie briller d''une lueur tremblotante."
    }
  ]
}');

-- ============================================
-- Matière: Grammaire (matiere_id = 13)
-- ============================================
-- 4️⃣ Niveau 4 - Texte à compléter - Pronoms et Accord du participe passé (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(13, 4, 3, 30, '{
  "text": "Les fleurs que j''ai ___ sont très belles. Elles ___ ont fait plaisir car je ___ ai offertes avec amour.",
  "blanks": [
    { "position": 17, "correctAnswer": "cueillies", "acceptedAnswers": ["cueillies"], "hint": "Participe passé du verbe cueillir (s''accorde avec fleurs)" },
    { "position": 41, "correctAnswer": "lui", "acceptedAnswers": ["lui", "leur"], "hint": "Pronom personnel COI" },
    { "position": 62, "correctAnswer": "les", "acceptedAnswers": ["les"], "hint": "Pronom COD remplaçant les fleurs" }
  ],
  "hints": ["Rappelle-toi la règle d''accord du participe passé avec l''auxiliaire avoir quand le COD précède le verbe"]
}');

-- ============================================
-- Matière: Géométrie (matiere_id = 14)
-- ============================================
-- 4️⃣ Niveau 4 - QCM - Aires et Périmètres (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(14, 4, 1, 25, '{
  "questions": [
    {
      "question": "Quelle est l''aire d''un rectangle de longueur 8 cm et de largeur 5 cm ?",
      "options": ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
      "correctAnswer": "40 cm²",
      "explanation": "L''aire d''un rectangle se calcule en faisant Longueur x Largeur. 8 x 5 = 40 cm²."
    },
    {
      "question": "Quel est le périmètre d''un carré de côté 6 cm ?",
      "options": ["12 cm", "24 cm", "36 cm", "48 cm"],
      "correctAnswer": "24 cm",
      "explanation": "Le périmètre d''un carré est Côté x 4. 6 x 4 = 24 cm."
    }
  ]
}');

-- ============================================
-- Matière: Science de la vie (matiere_id = 15)
-- ============================================
-- 4️⃣ Niveau 4 - QCM - Le corps humain (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(15, 4, 1, 25, '{
  "questions": [
    {
      "question": "Quel organe filtre le sang et produit l''urine ?",
      "options": ["Le foie", "Les reins", "Les poumons", "Le cœur"],
      "correctAnswer": "Les reins",
      "explanation": "Les reins sont les principaux filtres de notre corps, éliminant les déchets sous forme d''urine."
    },
    {
      "question": "Combien d''os un adulte possède-t-il environ ?",
      "options": ["106", "206", "306", "406"],
      "correctAnswer": "206",
      "explanation": "Le squelette d''un être humain adulte est composé de 206 os."
    }
  ]
}');

-- ============================================
-- Matière: Physique (matiere_id = 19)
-- ============================================
-- 2️⃣ Niveau 2 - Texte à compléter - Les états de la matière (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(19, 2, 3, 20, '{
  "text": "L''eau existe sous trois états : ___, liquide et ___. Le passage de l''état liquide à l''état gazeux s''appelle l''___. Quand l''eau gèle, elle subit une ___.",
  "blanks": [
    { "position": 31, "correctAnswer": "solide", "acceptedAnswers": ["solide"], "hint": "État de la glace" },
    { "position": 49, "correctAnswer": "gazeux", "acceptedAnswers": ["gazeux", "gaz"], "hint": "État de la vapeur" },
    { "position": 113, "correctAnswer": "évaporation", "acceptedAnswers": ["évaporation", "vaporisation"], "hint": "Changement provoqué par la chaleur" },
    { "position": 156, "correctAnswer": "solidification", "acceptedAnswers": ["solidification"], "hint": "Durcissement de l''eau" }
  ],
  "hints": ["Pense aux changements d''état de l''eau en cuisine ou dans la nature"]
}');

-- ============================================
-- Matière: Chimie (matiere_id = 20)
-- ============================================
-- 2️⃣ Niveau 2 - Texte à compléter - Les atomes et molécules (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(20, 2, 3, 20, '{
  "text": "La matière est constituée d''___. Lorsqu''ils s''assemblent, ils forment des ___. Par exemple, un atome de carbone et deux atomes d''oxygène forment le dioxyde de ___.",
  "blanks": [
    { "position": 29, "correctAnswer": "atomes", "acceptedAnswers": ["atomes", "atome"], "hint": "Briques fondamentales" },
    { "position": 68, "correctAnswer": "molécules", "acceptedAnswers": ["molécules", "molecule", "molecules"], "hint": "Groupes d''atomes reliés" },
    { "position": 139, "correctAnswer": "carbone", "acceptedAnswers": ["carbone"], "hint": "Le fameux CO2" }
  ],
  "hints": ["Revois les bases de la structure moléculaire simple"]
}');

-- 3️⃣ Niveau 3 - Chimie - Acides et Bases (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(20, 3, 1, 25, '{
  "questions": [
    {
      "question": "Quel indicateur mesure le degré d''acidité d''une solution ?",
      "options": ["Le pH", "Le thermomètre", "La densité", "La viscosité"],
      "correctAnswer": "Le pH",
      "explanation": "Le pH (potentiel Hydrogène) mesure si une solution est acide (pH < 7), neutre (pH = 7) ou basique (pH > 7)."
    },
    {
      "question": "Quel liquide commun a un pH très acide (environ 2) ?",
      "options": ["L''eau pure", "Le lait de vache", "Le jus de citron", "L''eau de javel"],
      "correctAnswer": "Le jus de citron",
      "explanation": "Le jus de citron contient beaucoup d''acide citrique, son pH est très bas, autour de 2."
    }
  ]
}');

-- ============================================
-- Matière: Histoire (matiere_id = 16)
-- ============================================
-- 3️⃣ Niveau 3 - QCM - La Révolution française (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(16, 3, 1, 25, '{
  "questions": [
    {
      "question": "En quelle année a eu lieu la prise de la Bastille ?",
      "options": ["1789", "1792", "1799", "1804"],
      "correctAnswer": "1789",
      "explanation": "La prise de la Bastille, événement déclencheur de la Révolution française, a eu lieu le 14 juillet 1789."
    },
    {
      "question": "Quel roi régnait sur la France au début de la Révolution ?",
      "options": ["Louis XIV", "Louis XV", "Louis XVI", "Louis-Philippe"],
      "correctAnswer": "Louis XVI",
      "explanation": "C''est Louis XVI qui était roi de France en 1789. Il a été guillotiné en 1793."
    }
  ]
}');

-- 4️⃣ Niveau 4 - Texte à compléter - Les Grandes Découvertes (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(16, 4, 3, 25, '{
  "text": "En 1492, le navigateur ___ débarque en Amérique en pensant être aux ___. Plus tard, en 1519, l''explorateur portugais ___ lance la première expédition qui réalisera le tour du ___.",
  "blanks": [
    { "position": 25, "correctAnswer": "Christophe Colomb", "acceptedAnswers": ["Christophe Colomb", "colomb", "Christophe colomb"], "hint": "Navigateur génois célèbre" },
    { "position": 65, "correctAnswer": "Indes", "acceptedAnswers": ["Indes", "indes"], "hint": "Sa destination initiale" },
    { "position": 105, "correctAnswer": "Magellan", "acceptedAnswers": ["Magellan", "magellan", "Fernand de Magellan"], "hint": "Navigateur qui a donné son nom à un détroit" },
    { "position": 150, "correctAnswer": "monde", "acceptedAnswers": ["monde", "globe", "tours du monde"], "hint": "Notre planète Terre" }
  ],
  "hints": ["Pense aux navigateurs de la fin du XVe et début XVIe siècle"]
}');

-- ============================================
-- Matière: Géographie (matiere_id = 17)
-- ============================================
-- 3️⃣ Niveau 3 - QCM - Les Capitales Mondiales (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(17, 3, 1, 25, '{
  "questions": [
    {
      "question": "Quelle est la capitale de l''Italie ?",
      "options": ["Milan", "Rome", "Venise", "Naples"],
      "correctAnswer": "Rome",
      "explanation": "Rome est la capitale historique et administrative de l''Italie."
    },
    {
      "question": "Quelle est la capitale du Japon ?",
      "options": ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
      "correctAnswer": "Tokyo",
      "explanation": "Tokyo est la capitale et la plus grande métropole du Japon."
    }
  ]
}');

-- 4️⃣ Niveau 4 - Texte à compléter - Les Climats (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(17, 4, 3, 25, '{
  "text": "Autour de l''équateur, on trouve un climat ___ caractérisé par de fortes chaleurs et des ___ fréquentes. Près des pôles, c''est un climat ___ extrêmement froid. Entre les deux, les régions comme l''Europe ont un climat ___.",
  "blanks": [
    { "position": 35, "correctAnswer": "équatorial", "acceptedAnswers": ["équatorial", "tropical", "equatorial"], "hint": "Climat très humide et chaud" },
    { "position": 85, "correctAnswer": "pluies", "acceptedAnswers": ["pluies", "precipitations", "précipitations"], "hint": "Eau qui tombe du ciel" },
    { "position": 130, "correctAnswer": "polaire", "acceptedAnswers": ["polaire", "glacial"], "hint": "Climat des régions glacées" },
    { "position": 190, "correctAnswer": "tempéré", "acceptedAnswers": ["tempéré", "tempere"], "hint": "Climat avec 4 saisons bien marquées" }
  ],
  "hints": ["Observe la latitude pour deviner la zone climatique"]
}');

-- ============================================
-- Matière: Science de la terre (matiere_id = 18)
-- ============================================
-- 2️⃣ Niveau 2 - Texte à compléter - Le Cycle de l''eau (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(18, 2, 3, 20, '{
  "text": "Sous l''action du soleil, l''eau des océans s''___ pour former des nuages. C''est la ___. Ensuite, l''eau retombe sous forme de ___ (pluie, neige) : ce sont les ___.",
  "blanks": [
    { "position": 44, "correctAnswer": "évapore", "acceptedAnswers": ["évapore", "evapore"], "hint": "Devient de la vapeur" },
    { "position": 78, "correctAnswer": "condensation", "acceptedAnswers": ["condensation", "vaporisation"], "hint": "Formation des nuages" },
    { "position": 118, "correctAnswer": "précipitations", "acceptedAnswers": ["précipitations", "pluie", "neige", "precipitations"], "hint": "Eau tombant des nuages" },
    { "position": 150, "correctAnswer": "précipitations", "acceptedAnswers": ["précipitations", "precipitations"], "hint": "Phénomènes météo majeurs" }
  ],
  "hints": ["Pense aux différentes étapes du cycle naturel de l''eau sur Terre"]
}');

-- 3️⃣ Niveau 3 - Science de la terre - Les Volcans et Séismes (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(18, 3, 1, 25, '{
  "questions": [
    {
      "question": "Quelle échelle mesure la magnitude (l''énergie) d''un séisme ?",
      "options": ["L''échelle de Richter", "L''échelle de Beaufort", "L''échelle de Celsius", "L''échelle d''intensité"],
      "correctAnswer": "L''échelle de Richter",
      "explanation": "L''échelle de Richter est utilisée pour quantifier l''énergie libérée par un tremblement de terre."
    },
    {
      "question": "Comment appelle-t-on le magma lorsqu''il s''écoule à la surface d''un volcan ?",
      "options": ["La cendre", "Le basalte", "La lave", "Le souffre"],
      "correctAnswer": "La lave",
      "explanation": "Une fois sorti du cratère, le magma perd ses gaz et prend le nom de lave."
    }
  ]
}');

-- ============================================
-- Matière: Physique (matiere_id = 19)
-- ============================================
-- 3️⃣ Niveau 3 - Physique - Lumière et Ombres (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(19, 3, 1, 25, '{
  "questions": [
    {
      "question": "Quelle est la vitesse approximative de la lumière dans le vide ?",
      "options": ["3 000 km/s", "30 000 km/s", "300 000 km/s", "3 000 000 km/s"],
      "correctAnswer": "300 000 km/s",
      "explanation": "La lumière se déplace à environ 299 792 km/s, couramment arrondi à 300 000 km/s."
    },
    {
      "question": "Un objet qui ne laisse pas passer du tout la lumière est dit :",
      "options": ["Transparent", "Translucide", "Opaque", "Lumineux"],
      "correctAnswer": "Opaque",
      "explanation": "Un corps opaque bloque totalement la lumière, créant une ombre portée nette."
    }
  ]
}');

-- ============================================
-- Matière: Problème (matiere_id = 21)
-- ============================================
-- 2️⃣ Niveau 2 - Texte à compléter - Le problème de la recette (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(21, 2, 3, 20, '{
  "text": "Pour faire un gâteau pour 4 personnes, il faut ___ grammes de farine. Pour 8 personnes, il en faudra donc le double, soit ___ grammes. Si je veux ajouter 50g de sucre par personne, il me faudra un total de ___ grammes de sucre pour 4 personnes.",
  "blanks": [
    { "position": 49, "correctAnswer": "200", "acceptedAnswers": ["200", "deux cents"], "hint": "Quantité classique pour un gâteau (entre 150 et 250)" },
    { "position": 118, "correctAnswer": "400", "acceptedAnswers": ["400", "quatre cents"], "hint": "Le double de 200" },
    { "position": 190, "correctAnswer": "200", "acceptedAnswers": ["200", "deux cents"], "hint": "50g x 4 personnes = ?" }
  ],
  "hints": ["Utilise la règle de trois et la multiplication simple"]
}');

-- ============================================
-- Matière: Anglais (matiere_id = 22)
-- ============================================
-- 4️⃣ Niveau 4 - Texte à compléter - Parler de ses goûts (Moyen)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(22, 4, 3, 20, '{
  "text": "I really like ___ books. My sister prefers ___ to music. We both hate ___ house chores.",
  "blanks": [
    { "position": 18, "correctAnswer": "reading", "acceptedAnswers": ["reading", "to read"], "hint": "Action de lire (forme en -ing après like)" },
    { "position": 47, "correctAnswer": "listening", "acceptedAnswers": ["listening", "to listen"], "hint": "Action d''écouter de la musique (avec to)" },
    { "position": 77, "correctAnswer": "doing", "acceptedAnswers": ["doing", "to do"], "hint": "Faire les corvées (forme en -ing après hate)" }
  ],
  "hints": ["Utilise le gérondif en -ing pour exprimer des goûts généraux"]
}');

-- ============================================
-- Matière: Orthographe (matiere_id = 10)
-- ============================================
-- 4️⃣ Niveau 4 - QCM - Pluriel des mots complexes (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(10, 4, 1, 25, '{
  "questions": [
    {
      "question": "Quel est le pluriel correct du mot ''chou'' ?",
      "options": ["Chous", "Choux", "Chouxs", "Chou"],
      "correctAnswer": "Choux",
      "explanation": "Chou fait partie des sept exceptions en -ou qui prennent un x au pluriel (bijou, caillou, chou, genou, hibou, joujou, pou)."
    },
    {
      "question": "Quel est le pluriel du mot ''travail'' ?",
      "options": ["Travails", "Travaux", "Travaulx", "Travauxs"],
      "correctAnswer": "Travaux",
      "explanation": "La plupart des mots en -ail font leur pluriel en -ails, mais ''travail'' devient ''travaux''."
    }
  ]
}');

-- ============================================
-- Matière: Nombre (matiere_id = 11)
-- ============================================
-- 5️⃣ Niveau 5 - Texte à compléter - Calculs mentaux rapides (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(11, 5, 3, 25, '{
  "text": "Si j''ajoute 15 à 45, j''obtiens ___. Si je soustrais 12 de 50, il reste ___. Le produit de 9 par 3 est ___. Si je partage 100 par 4, le quotient est ___.",
  "blanks": [
    { "position": 31, "correctAnswer": "60", "acceptedAnswers": ["60", "soixante"], "hint": "45 + 15" },
    { "position": 68, "correctAnswer": "38", "acceptedAnswers": ["38", "trente-huit"], "hint": "50 - 12" },
    { "position": 102, "correctAnswer": "27", "acceptedAnswers": ["27", "vingt-sept"], "hint": "9 x 3" },
    { "position": 140, "correctAnswer": "25", "acceptedAnswers": ["25", "vingt-cinq"], "hint": "100 / 4" }
  ],
  "hints": ["Fais attention aux termes : somme (+), différence (-), produit (x), partage (/)"]
}');

-- ============================================
-- Matière: Vocabulaire (matiere_id = 12)
-- ============================================
-- 5️⃣ Niveau 5 - Texte à compléter - Les préfixes et suffixes (Difficile)
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(12, 5, 3, 25, '{
  "text": "Pour dire le contraire de ''lisible'', on ajoute un préfixe et on écrit ___. Quelqu''un qui a beaucoup de courage est qualifié de ___. L''action de laver s''appelle le ___.",
  "blanks": [
    { "position": 62, "correctAnswer": "illisible", "acceptedAnswers": ["illisible"], "hint": "Préfixe négatif in- devant l" },
    { "position": 115, "correctAnswer": "courageux", "acceptedAnswers": ["courageux", "courageuse"], "hint": "Adjectif dérivé de courage" },
    { "position": 148, "correctAnswer": "lavage", "acceptedAnswers": ["lavage"], "hint": "Nom d''action en -age" }
  ],
  "hints": ["Pense aux dérivations et aux familles de mots"]
}');
