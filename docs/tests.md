# Stratégie de tests — Task Manager Lite

## Fonctionnalités critiques

### 1. Créer une tâche
**Pourquoi critique ?** C'est la fonctionnalité de base sans laquelle l'app ne sert à rien.
- Test unitaire : vérifier qu'une tâche avec titre valide est créée correctement
- Test intégration : POST /tasks retourne 201 avec la tâche créée

### 2. Supprimer une tâche
**Pourquoi critique ?** Sans suppression, les données s'accumulent indéfiniment.
- Test unitaire : vérifier qu'une tâche existante est bien supprimée
- Test intégration : DELETE /tasks/:id retourne 200

### 3. Validation des données
**Pourquoi critique ?** Empêche les données corrompues d'entrer dans le système.
- Test unitaire : vérifier qu'une tâche sans titre est rejetée
- Test intégration : POST /tasks sans titre retourne 400

### 4. Récupérer toutes les tâches
**Pourquoi critique ?** Sans cette fonctionnalité, l'utilisateur ne peut pas voir ses tâches.
- Test unitaire : vérifier que la liste retourne un tableau
- Test intégration : GET /tasks retourne 200 avec la liste des tâches

### 5. Modifier une tâche
**Pourquoi critique ?** Permet de corriger ou mettre à jour une tâche existante.
- Test unitaire : vérifier qu'une tâche modifiée a bien les nouvelles valeurs
- Test intégration : PUT /tasks/:id retourne 200 avec la tâche modifiée

### 6. Marquer une tâche comme terminée
**Pourquoi critique ?** C'est le coeur d'un gestionnaire de tâches — suivre la progression.
- Test unitaire : vérifier que le statut passe de "pending" à "done"
- Test intégration : PATCH /tasks/:id/complete retourne 200

### 7. Récupérer une tâche par ID
**Pourquoi critique ?** Nécessaire pour afficher le détail d'une tâche spécifique.
- Test unitaire : vérifier qu'une tâche inexistante retourne null
- Test intégration : GET /tasks/:id retourne 200 ou 404 si introuvable