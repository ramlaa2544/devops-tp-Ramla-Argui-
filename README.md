# Task Manager Lite ✅
![CI](https://github.com/ramlaa2544/devops-tp-Ramla-Argui-/actions/workflows/ci.yml/badge.svg)

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
## Lancer le projet

**Pré-requis**
- Docker Desktop installé et lancé
- Git installé

```bash
git clone https://github.com/ramlaa2544/devops-tp-Ramla-Argui-.git
cd devops-tp-Ramla-Argui-
cp .env.example .env
# Remplir les valeurs dans .env
docker compose up -d --build
```

### URLs d'accès

| Service | URL |
|---------|-----|
| Frontend | http://localhost:8080 |
| Backend API | http://localhost:3000 |
| Health check | http://localhost:3000/health |
| Tâches | http://localhost:3000/tasks |
## Lancer le projet

```bash
git clone https://github.com/ramlaa2544/devops-tp-Ramla-Argui-.git
cd devops-tp-Ramla-Argui-
cp .env.example .env
# Remplir les valeurs dans .env (DB_PASSWORD, JWT_SECRET...)
docker compose up
```

L'app est accessible sur http://localhost:3000

**Pré-requis**
- Docker Desktop installé et lancé
- Git installé

### Backend
```bash
git clone https://github.com/ramlaa2544/devops-tp-Ramla-Argui-.git
cd devops-tp-ramla-argui/backend
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

Ramla ,Argui 
