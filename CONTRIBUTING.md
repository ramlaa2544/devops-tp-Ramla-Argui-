# Guide de contribution — Task Manager Lite

## Workflow Git pour le projet

### 1. Introduction
Ce document explique le workflow Git recommandé pour notre projet. Il est conçu pour :

* garder un historique clair et propre
* éviter les conflits
* faciliter la collaboration via GitHub

### 2. Branches principales

`main`
* Contient uniquement le code stable et testé
* Jamais de commit direct
* Toute modification passe par une Pull Request (PR)

`develop`
* Contient le code en cours de développement
* Toutes les PR des features arrivent ici
* Toujours mise à jour avant de commencer une nouvelle feature

`feature/nom-fonction`
* Branches personnelles pour chaque fonctionnalité
* Exemple :
feature/add-task
feature/delete-task
feature/update-task
feature/frontend-ui
### 3. Workflow quotidien

1️⃣ Mettre à jour develop avant de commencer
```bash
git checkout develop
git pull origin develop
git checkout -b feature/ma-feature
```

2️⃣ Travailler sur la feature
```bash
git add .
git commit -m "feat(tasks): add delete task endpoint"
git push -u origin feature/ma-feature
```

3️⃣ Ouvrir une Pull Request
- Branche source → `feature/ma-feature`
- Branche cible → `develop`
- Titre clair et description détaillée

4️⃣ Mettre à jour sa branche si develop a avancé
```bash
git checkout feature/ma-feature
git pull origin develop
git push
```

5️⃣ Merge de la PR
- Squash and Merge par défaut
- Chaque PR = 1 commit sur develop

### 4. Conventional Commits

Tous les commits suivent ce format :
type(scope): description
Exemples pour ce projet :
feat(tasks): add create task endpoint
feat(tasks): add delete task endpoint
feat(tasks): add update task endpoint
fix(tasks): fix task not found error
docs(readme): update launch instructions
test(tasks): add unit tests for task validation
ci: add GitHub Actions workflow
chore(deps): install express
### 5. Fusion vers main

- Branche source : `develop`
- Branche cible : `main`
- Au moins une review obligatoire avant merge

### 6. Conseils pour éviter les conflits

* Toujours faire un pull de develop avant de créer une feature branch
* Faire des commits petits et fréquents
* Ne jamais push directement sur main ou develop

### 7. Résumé visuel

```
main
  ↑
  └── develop
        ↑
        ├── PR ← feature/add-task
        ├── PR ← feature/delete-task
        ├── PR ← feature/update-task
        └── PR ← feature/frontend-ui
```

✅ Workflow recommandé :
- Feature branch → PR → develop → main
- Squash and Merge pour garder un historique propre
- Ne jamais push directement sur main ou develop