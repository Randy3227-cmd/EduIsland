-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE matieres (
  id integer NOT NULL DEFAULT nextval('matieres_id_seq'::regclass),
  ville_id integer,
  name text NOT NULL,
  CONSTRAINT matieres_pkey PRIMARY KEY (id),
  CONSTRAINT matieres_ville_id_fkey FOREIGN KEY (ville_id) REFERENCES villes(id)
);
CREATE TABLE niveau_types (
  id integer NOT NULL DEFAULT nextval('niveau_types_id_seq'::regclass),
  name character varying NOT NULL,
  description text,
  CONSTRAINT niveau_types_pkey PRIMARY KEY (id)
);
CREATE TABLE niveaux (
  id integer NOT NULL DEFAULT nextval('niveaux_id_seq'::regclass),
  matiere_id integer,
  level_number integer NOT NULL,
  xp_reward integer DEFAULT 10,
  content jsonb DEFAULT '{}'::jsonb,
  type_id integer,
  CONSTRAINT niveaux_pkey PRIMARY KEY (id),
  CONSTRAINT niveaux_matiere_id_fkey FOREIGN KEY (matiere_id) REFERENCES matieres(id),
  CONSTRAINT niveaux_type_id_fkey FOREIGN KEY (type_id) REFERENCES niveau_types(id)
);
CREATE TABLE scores (
  id integer NOT NULL DEFAULT nextval('scores_id_seq'::regclass),
  user_id uuid,
  niveau_id integer,
  score integer DEFAULT 0,
  completed_at timestamp without time zone DEFAULT now(),
  CONSTRAINT scores_pkey PRIMARY KEY (id),
  CONSTRAINT scores_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT scores_niveau_id_fkey FOREIGN KEY (niveau_id) REFERENCES niveaux(id)
);
CREATE TABLE users (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  xp_total integer DEFAULT 0,
  created_at timestamp without time zone DEFAULT now(),
  password character varying,
  image character varying,
  CONSTRAINT users_pkey PRIMARY KEY (id)
);
CREATE TABLE villes (
  id integer NOT NULL DEFAULT nextval('villes_id_seq'::regclass),
  name text NOT NULL,
  xp_required integer DEFAULT 0,
  CONSTRAINT villes_pkey PRIMARY KEY (id)
);