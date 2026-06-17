# Stratégie DevOps — Task Manager Lite

## 1. Architecture technique cible

Task Manager Lite est une application web CRUD composée de trois parties :

- **Frontend** : Interface légère en HTML / CSS / JavaScript servie par Nginx sur le port 8080
- **Backend** : API REST développée avec Node.js et Express, exposée sur le port 3000
- **Base de données** : PostgreSQL pour la persistance des données
[Client Browser :8080]

↓

[Frontend Nginx :8080]

↓

[Backend Node.js/Express :3000]

↓

[PostgreSQL :5432]
## 2. Structure du repository
devops-tp-Ramla-Argui-/

├── backend/              # API Node.js + Express

│   ├── src/

│   │   ├── server.js     # Point d'entrée

│   │   ├── tasks.js      # Logique métier

│   │   └── routes/

│   │       └── tasks.js  # Routes CRUD

│   ├── tests/        # Tests unitaires Jest

│   ├── Dockerfile        # Multi-stage build

│   └── package.json

├── frontend/             # Interface HTML/CSS/JS

│   ├── index.html

│   ├── style.css

│   ├── script.js

│   ├── Dockerfile        # Nginx

│   └── nginx.conf

├── docs/                 # Documentation DevOps

│   ├── architecture.md

│   ├── devops-strategy.md

│   ├── tests.md

│   └── security.md

├── .github/

│   └── workflows/

│       └── ci.yml        # Pipeline CI

├── docker-compose.yml

├── .env.example

├── .gitignore

├── README.md

└── CONTRIBUTING.md
## 3. Workflow Git

Le projet suit un workflow Git structuré :

- **main** : branche stable, protégée, merge via PR uniquement
- **develop** : branche d'intégration
- **feature/*** : branches de développement

Flux : `feature/* → develop → main`

Tous les commits suivent la convention **Conventional Commits** :
feat(backend): add create task endpoint

fix(tasks): fix validation error

docs(readme): update launch instructions
## 4. Services Docker prévus

Le fichier `docker-compose.yml` orchestre 3 services :

**Frontend**
- Image : Nginx Alpine
- Port : 8080
- Sert les fichiers HTML/CSS/JS

**Backend**
- Image : Node.js 20 Alpine (multi-stage)
- Port : 3000
- API REST avec routes CRUD

**Base de données**
- Image : PostgreSQL 16
- Port : 5432
- Volume persistant : `db_data`
- Healthcheck : `pg_isready`

## 5. Variables d'environnement

Toutes les variables sont documentées dans `.env.example` :

| Variable | Description |
|----------|-------------|
| PORT | Port du serveur backend (3000) |
| NODE_ENV | Environnement (development/production) |
| DB_HOST | Hôte de la base de données |
| DB_PORT | Port PostgreSQL (5432) |
| DB_USER | Utilisateur PostgreSQL |
| DB_PASSWORD | Mot de passe PostgreSQL |
| DB_NAME | Nom de la base de données |
| JWT_SECRET | Clé secrète pour les tokens JWT |
| DATA_FILE | Fichier de stockage local (tasks.json) |

Les vraies valeurs sont dans `.env` (ignoré par Git) et dans **GitHub Secrets** pour la CI.

## 6. Stratégie de tests

Le projet suit la pyramide de tests :

**Tests unitaires (Jest)**
- Validation d'une tâche
- Normalisation du statut
- Marquer une tâche comme terminée
- Mock IA pour suggestion de priorité

**Couverture actuelle : 87.5%** (objectif : 60%)

Commande :
```bash
cd backend
npm test
npm run test:coverage
```

## 7. Pipeline CI prévu

Le pipeline GitHub Actions se déclenche sur chaque push et PR :
Push/PR

↓

Install dependencies (npm ci)

↓

Lint (ESLint)

↓

Tests (Jest)

↓

✅ Pipeline vert → merge autorisé
Fonctionnalités :
- Cache npm pour accélérer les builds
- Secret JWT_SECRET injecté via GitHub Secrets
- Runs sur ubuntu-latest avec Node.js 20

## 8. Sécurité et secrets

- `.env` ignoré par Git via `.gitignore`
- `.env.example` avec placeholders uniquement
- **GitHub Secrets** : `JWT_SECRET` configuré
- **Dependabot** : alertes et mises à jour automatiques activées
- **Secret scanning** : activé sur le repo
- **Branch protection** : push direct sur `main` interdit

## 9. Logs prévus

Le serveur Express loge :
- Démarrage du serveur : `Server running on port 3000`
- Requêtes entrantes via les routes CRUD
- Erreurs et exceptions

Format prévu :
[2026-06-17T14:00:00] GET /health 200 2ms

[2026-06-17T14:00:01] POST /tasks 201 5ms

[2026-06-17T14:00:02] DELETE /tasks/1 200 3ms

[2026-06-17T14:00:03] PUT /tasks/1 200 4ms
## 10. Risques DevOps

| Risque | Probabilité | Impact | Action |
|--------|-------------|--------|--------|
| JWT_SECRET exposé | Moyenne | Critique | GitHub Secrets |
| Dépendances vulnérables | Haute | Élevé | Dependabot |
| DB accessible publiquement | Faible | Critique | Docker network |
| Push direct sur main | Moyenne | Élevé | Branch protection |
| .env commité par accident | Faible | Critique | .gitignore + Secret scanning |

## 11. Commandes de lancement

### Avec Docker (recommandé)

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

### Sans Docker

```bash
# Backend
cd backend
npm install
npm start
# API accessible sur http://localhost:3000

# Frontend
# Ouvrir frontend/index.html dans le navigateur
```

## 12. Prochaines actions

- [x] Développer les routes CRUD complètes (POST, GET, PUT, DELETE /tasks)
- [x] Développer le frontend HTML/CSS/JS
- [x] Connecter le frontend au backend via fetch API
- [x] Conteneuriser le frontend avec Nginx
- [x] Docker Compose avec 3 services (frontend, backend, db)
- [ ] Ajouter des tests d'intégration pour les routes
- [ ] Déployer sur Render ou Railway (T35)
- [ ] Mettre en place les logs avec morgan
- [ ] Ajouter l'authentification JWT