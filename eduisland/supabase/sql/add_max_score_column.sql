-- Ajouter la colonne max_score à la table scores
ALTER TABLE public.scores 
ADD COLUMN max_score integer DEFAULT 0;

-- Vérification
-- SELECT * FROM scores LIMIT 5;
