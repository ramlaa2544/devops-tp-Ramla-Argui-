# Task Manager Lite ✅

Application de gestion de tâches simple basée sur une API REST développée avec Node.js et Express, et une interface web en HTML / CSS / JavaScript.

---

## Stack

**Backend**
- Node.js / Express — API REST & logique de gestion des tâches
- Fichier JSON (`tasks.json`) — persistance locale des données

**Frontend**
- HTML / CSS / JavaScript — interface utilisateur légère

**Fonctionnalités**
- Créer, lire, modifier, supprimer des tâches (CRUD)
- Stockage persistant des tâches

---

## Lancer le projet

### Backend
```bash
git clone https://github.com/TON-USER/devops-tp-prenom-nom.git
cd devops-tp-prenom-nom/backend
```

1. Installer les dépendances :

```bash
   npm install
```

2. Démarrer le serveur backend :

```bash
   npm start
```

API accessible sur `http://localhost:3000/`

### Frontend
```bash
cd frontend
```

Ouvrir l'application :

```bash
open index.html
```

Ou ouvrir le fichier manuellement dans le navigateur.

Application accessible sur `http://localhost:5500/` (Live Server) ou via le chemin du fichier.

---

## Tester

```bash
# Backend
cd backend
npm test
```

Tests inclus :
- Ajouter une tâche
- Supprimer une tâche
- Récupérer toutes les tâches

---

---

## Architecture

The project structure is documented in the docs/ folder.

Task Manager Lite/

├── backend/        # Node.js + Express API  
│   ├── server.js  
│   ├── routes/  
│   └── tasks.json  

├── frontend/       # HTML / CSS / JavaScript UI  
│   ├── index.html  
│   ├── style.css  
│   └── script.js  

├── docs/           # DevOps documentation  
│   ├── architecture.md  
│   ├── devops-strategy.md  
│   ├── tests.md  
│   └── security.md  

└── .github/        # CI/CD workflows  

---

## Auteur

Ramla Argui 
