// Valider une tâche
function validateTask(task) {
  if (!task.title || task.title.trim() === "") return false;
  return true;
}

// Normaliser le statut d'une tâche
function normalizeStatus(status) {
  const validStatuses = ["pending", "in-progress", "done"];
  if (!validStatuses.includes(status)) return "pending";
  return status;
}

// Marquer une tâche comme terminée
function completeTask(task) {
  if (!task) return null;
  return { ...task, status: "done" };
}

module.exports = { validateTask, normalizeStatus, completeTask };
