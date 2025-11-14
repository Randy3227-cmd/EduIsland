# Système de Gestion des Niveaux - EduIsland

## 📋 Vue d'ensemble

Le système de gestion des niveaux permet de :
- ✅ Jouer à différents types de niveaux (QCM, Texte à compléter)
- ✅ Sauvegarder automatiquement les scores
- ✅ Gagner de l'XP en fonction de la performance
- ✅ Afficher un écran de complétion avec statistiques
- ✅ Naviguer vers le niveau suivant ou retourner à la matière

## 🎮 Types de niveaux implémentés

### 1. QCM (Questionnaire à Choix Multiples)
- Questions une par une
- 4 options de réponse
- Feedback immédiat (correct/incorrect)
- Explications optionnelles après chaque réponse

### 2. Texte à Compléter
- Texte avec des blancs à remplir
- Accepte plusieurs réponses possibles
- Indices optionnels
- Correction complète à la fin

## 🔧 Architecture

### Composants

#### `NiveauComplete.jsx`
Modal de fin de niveau qui affiche :
- Score obtenu (X/Y)
- Pourcentage de réussite
- XP gagné
- Étoiles selon la performance
- Boutons d'action (Réessayer, Niveau suivant, Retour)

#### `QCMNiveau.jsx`
Composant pour les QCM :
- Gestion des questions
- Validation des réponses
- Barre de progression
- Sauvegarde automatique à la fin

#### `TexteACompleter.jsx`
Composant pour les textes à trous :
- Rendu du texte avec inputs
- Validation de toutes les réponses
- Affichage des corrections
- Sauvegarde automatique à la fin

### Services

#### `gameAPI.js`
Fonctions utilitaires :

```javascript
// Sauvegarder la complétion d'un niveau
saveNiveauCompletion(userId, niveauId, score, maxScore, xpReward)

// Récupérer les statistiques d'un niveau
getNiveauStats(userId, niveauId)

// Récupérer l'XP total d'un utilisateur
getUserXP(userId)

// Vérifier si un niveau a été complété
hasCompletedNiveau(userId, niveauId)
```

## 💾 Base de données

### Structure des niveaux (table `niveaux`)

```sql
{
  id: integer,
  matiere_id: integer,
  level_number: integer,
  type_id: integer,  -- 1: QCM, 2: carte, 3: texte
  xp_reward: integer,
  content: jsonb
}
```

### Format JSON pour QCM

```json
{
  "questions": [
    {
      "question": "Quelle est la capitale de la France ?",
      "options": ["Paris", "Lyon", "Marseille", "Bordeaux"],
      "correctAnswer": "Paris",
      "explanation": "Explication optionnelle"
    }
  ]
}
```

### Format JSON pour Texte à Compléter

```json
{
  "text": "Le texte avec ___ des blancs ___.",
  "blanks": [
    {
      "position": 15,
      "correctAnswer": "quelques",
      "acceptedAnswers": ["des", "plusieurs"],
      "hint": "Indice optionnel"
    }
  ],
  "hints": ["Indice général 1", "Indice général 2"]
}
```

### Table des scores

```sql
CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  niveau_id INTEGER REFERENCES niveaux(id),
  score INTEGER,
  max_score INTEGER,
  completed_at TIMESTAMP
);
```

## 🎯 Calcul de l'XP

L'XP gagné est calculé proportionnellement au score :

```javascript
percentage = (score / maxScore) * 100
xpEarned = Math.round((percentage / 100) * xpReward)
```

**Exemples :**
- Score : 5/5 (100%) → XP = 100% du xp_reward
- Score : 4/5 (80%) → XP = 80% du xp_reward
- Score : 3/5 (60%) → XP = 60% du xp_reward

## 📊 Système d'étoiles

- ⭐⭐⭐ Parfait (100%)
- ⭐⭐ Bien (≥70%)
- ⭐ Continue (< 70%)

## 🔄 Flux de jeu

1. **Utilisateur clique sur un niveau** → Redirection vers `/niveau/:id`
2. **Chargement du niveau** → Fetch des données depuis Supabase
3. **Affichage du composant** → QCM ou TexteACompleter selon `type_id`
4. **Utilisateur termine le niveau** → Appel de `onComplete(score, maxScore, xpEarned)`
5. **Sauvegarde** → Score + mise à jour XP via `saveNiveauCompletion()`
6. **Affichage modal** → `NiveauComplete` avec statistiques
7. **Actions possibles** :
   - 🔄 Réessayer → Reload de la page
   - ➡️ Niveau suivant → Redirection vers `/niveau/:nextId`
   - 📚 Retour matière → Redirection vers `/matiere/:matiereId`

## 🚀 Utilisation

### Créer un nouveau niveau QCM

```sql
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(1, 1, 1, 15, '{
  "questions": [
    {
      "question": "Votre question ?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A",
      "explanation": "Pourquoi A est correct"
    }
  ]
}');
```

### Créer un nouveau niveau Texte à compléter

```sql
INSERT INTO niveaux (matiere_id, level_number, type_id, xp_reward, content) VALUES
(1, 2, 3, 20, '{
  "text": "Votre texte avec ___ blancs.",
  "blanks": [
    {
      "position": 17,
      "correctAnswer": "des",
      "acceptedAnswers": ["les", "quelques"],
      "hint": "Un déterminant"
    }
  ],
  "hints": ["Indice global"]
}');
```

## 🔐 Authentification

Actuellement, un `userId` temporaire est utilisé :
```javascript
const TEMP_USER_ID = "a1e6874a-bebe-46d6-949c-c0ce5df3b9ae";
```

À remplacer par un système d'authentification complet (Supabase Auth, etc.)

## 📝 TODO

- [ ] Ajouter le type "Carte à remplir"
- [ ] Système de badges/achievements
- [ ] Classement entre utilisateurs
- [ ] Système de vies/tentatives limitées
- [ ] Mode challenge chronométré
- [ ] Système de hints consommables
