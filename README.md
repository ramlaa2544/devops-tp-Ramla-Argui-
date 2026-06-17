# Task Manager Lite ✅

![CI](https://github.com/ramlaa2544/devops-tp-Ramla-Argui-/actions/workflows/ci.yml/badge.svg)
[![Deploy](https://img.shields.io/badge/API-Live-green)](https://devops-tp-ramla-argui.onrender.com)

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

**Pré-requis**
- Docker Desktop installé et lancé
- Git installé

### Avec Docker (recommandé)

```bash
git clone https://github.com/ramlaa2544/devops-tp-Ramla-Argui-.git
cd devops-tp-Ramla-Argui-
cp .env.example .env
# Remplir les valeurs dans .env
docker compose up -d --build
```

### Sans Docker

```bash
# Backend
cd backend
npm install
npm start
```

Ouvrir `frontend/index.html` dans le navigateur.

### URLs d'accès

| Service | URL |
|---------|-----|
| Frontend (local) | http://localhost:8080 |
| Backend API (local) | http://localhost:3000 |
| Health check (local) | http://localhost:3000/health |
| **API en ligne** | https://devops-tp-ramla-argui.onrender.com |
| **Health check en ligne** | https://devops-tp-ramla-argui.onrender.com/health |

---

## Tester

```bash
cd backend
npm test
npm run test:coverage
```

Tests inclus :
- Validation d'une tâche
- Normalisation du statut
- Marquer une tâche comme terminée
- Mock IA pour suggestion de priorité

---

## Architecture

La structure du projet est documentée dans le dossier [`docs/`](./docs/).
Task Manager Lite/

├── backend/              # Node.js + Express API

│   ├── src/

│   │   ├── server.js

│   │   ├── tasks.js

│   │   └── routes/

│   │       └── tasks.js

│   ├── tests/

│   └── Dockerfile

├── frontend/             # HTML / CSS / JavaScript UI

│   ├── index.html

│   ├── style.css

│   ├── script.js

│   ├── Dockerfile

│   └── nginx.conf

├── docs/                 # Documentation DevOps

│   ├── architecture.md

│   ├── devops-strategy.md

│   ├── tests.md

│   └── security.md

├── docker-compose.yml

└── .github/              # CI/CD workflows

└── workflows/

└── ci.yml
---

## Auteur

**Ramla Argui** — étudiante en développement logiciel et DevOps.

🔗 [GitHub](https://github.com/ramlaa2544)