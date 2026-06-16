# Sécurité — Task Manager Lite

## Dependabot et Secret Scanning

Les options suivantes sont activées sur le repo GitHub :
- ✅ Dependabot alerts
- ✅ Dependabot security updates
- ✅ Secret scanning (Push protection)

![Security settings](image.png)
![Security settings 2](image-1.png)
## Risques DevOps

### R1 — JWT_SECRET exposé
- Probabilité : Moyenne
- Impact : Critique (authentification compromise)
- Action : Stocké dans GitHub Secrets, jamais dans le code

### R2 — Dépendances vulnérables
- Probabilité : Haute
- Impact : Élevé (faille de sécurité)
- Action : Dependabot activé pour alertes automatiques

### R3 — Base de données accessible publiquement
- Probabilité : Faible
- Impact : Critique (perte de données)
- Action : DB accessible uniquement via Docker network interne

### R4 — Push direct sur main
- Probabilité : Moyenne
- Impact : Élevé (code non testé en production)
- Action : Branch protection activée, PR obligatoire

### R5 — Fichier .env commité par accident
- Probabilité : Faible
- Impact : Critique (secrets exposés publiquement)
- Action : .env dans .gitignore + Secret scanning activé