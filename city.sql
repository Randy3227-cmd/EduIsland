
-- -------------------------------
-- 1️⃣ Table des utilisateurs
-- -------------------------------
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    xp_total INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
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
('Première Ville', 0),
('Deuxième Ville', 50),
('Troisième Ville', 125);

-- Matières pour Première Ville
INSERT INTO matieres (ville_id, name) VALUES
(1, 'Orthographe'),
(1, 'Nombre'),
(1, 'Vocabulaire');

-- Matières pour Deuxième Ville
INSERT INTO matieres (ville_id, name) VALUES
(2, 'Grammaire'),
(2, 'Géométrie'),
(2, 'Science de la vie');

-- Matières pour Troisième Ville
INSERT INTO matieres (ville_id, name) VALUES
(3, 'Histoire'),
(3, 'Géographie'),
(3, 'Informatique');

-- Exemples de niveaux pour Orthographe (matiere_id = 1)
INSERT INTO niveaux (matiere_id, level_number, xp_reward, content) VALUES
(1, 1, 10, '{"questions":[{"q":"Mot correct","options":["a","b"],"answer":"a"}]}'),
(1, 2, 10, '{"questions":[{"q":"Complète la phrase","options":["a","b"],"answer":"b"}]}');
