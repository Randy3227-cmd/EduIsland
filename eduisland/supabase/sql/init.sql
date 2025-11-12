
-- -------------------------------
-- 1️⃣ Table des utilisateurs
-- -------------------------------
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    xp_total INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    passowrd varchar(250),
    image varchar(500)
);

-- -------------------------------
-- 2️⃣ Table des villes
-- -------------------------------
CREATE TABLE villes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    xp_required INTEGER DEFAULT 0 -- XP requis pour débloquer la ville
);

-- -------------------------------
-- 3️⃣ Table des matières
-- -------------------------------
CREATE TABLE matieres (
    id SERIAL PRIMARY KEY,
    ville_id INTEGER REFERENCES villes(id) ON DELETE CASCADE,
    name TEXT NOT NULL
);

-- -------------------------------
-- 4️⃣ Table des niveaux
-- -------------------------------
CREATE TABLE niveaux (
    id SERIAL PRIMARY KEY,
    matiere_id INTEGER REFERENCES matieres(id) ON DELETE CASCADE,
    level_number INTEGER NOT NULL,
    xp_reward INTEGER DEFAULT 10, -- XP gagné pour terminer le niveau
    content JSONB DEFAULT '{}'    -- Contenu du niveau (quiz, texte, images)
);

-- -------------------------------
-- 5️⃣ Table des scores
-- -------------------------------
CREATE TABLE scores (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    niveau_id INTEGER REFERENCES niveaux(id) ON DELETE CASCADE,
    score INTEGER DEFAULT 0,
    completed_at TIMESTAMP DEFAULT NOW()
);

-- -------------------------------
-- 6️⃣ Exemples d'insertion de données
-- -------------------------------

-- Villes
INSERT INTO villes (name, xp_required) VALUES
('Île des Mots Doux', 0),
('Baie des Savants', 50),
('Cité des Savoirs', 125),
('Volcan de la Connaissance', 250),

-- Matières pour Île des Mots Doux
INSERT INTO matieres (ville_id, name) VALUES
(4, 'Orthographe'),
(4, 'Nombre'),
(4, 'Vocabulaire');

-- Matières pour Baie des Savants
INSERT INTO matieres (ville_id, name) VALUES
(5, 'Grammaire'),
(5, 'Géométrie'),
(5, 'Science de la vie');

-- Matières pour Cité des Savoirs
INSERT INTO matieres (ville_id, name) VALUES
(6, 'Histoire'),
(6, 'Géographie'),
(6, 'Science de la terre');

-- Matières pour Volcan de la Connaissance
INSERT INTO matieres (ville_id, name) VALUES
(7, 'Physique'),
(7, 'Chimie'),
(7, 'Problème');

INSERT INTO villes (name, xp_required) VALUES
('Sunny English Bay', 0);
INSERT INTO matieres (ville_id, name) VALUES
(8, 'Anglais');


-- Exemples de niveaux pour Orthographe (matiere_id = 1)
INSERT INTO niveaux (matiere_id, level_number, xp_reward, content) VALUES
(1, 1, 10, '{"questions":[{"q":"Mot correct","options":["a","b"],"answer":"a"}]}'),
(1, 2, 10, '{"questions":[{"q":"Complète la phrase","options":["a","b"],"answer":"b"}]}');
