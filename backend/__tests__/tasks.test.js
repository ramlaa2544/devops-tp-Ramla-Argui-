const { validateTask, normalizeStatus, completeTask } = require('../src/tasks');

// Test 1 : validation d'une tâche
test('should return true when task has valid title', () => {
  // ARRANGE
  const task = { title: 'Acheter du lait' };
  // ACT
  const result = validateTask(task);
  // ASSERT
  expect(result).toBe(true);
});

test('should return false when task title is empty', () => {
  // ARRANGE
  const task = { title: '' };
  // ACT
  const result = validateTask(task);
  // ASSERT
  expect(result).toBe(false);
});

// Test 2 : normalisation du statut
test('should return pending when status is invalid', () => {
  // ARRANGE
  const status = 'invalid-status';
  // ACT
  const result = normalizeStatus(status);
  // ASSERT
  expect(result).toBe('pending');
});

// Test 3 : marquer une tâche comme terminée
test('should return done when task is completed', () => {
  // ARRANGE
  const task = { title: 'Faire les courses', status: 'pending' };
  // ACT
  const result = completeTask(task);
  // ASSERT
  expect(result.status).toBe('done');
});