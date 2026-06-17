const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../tasks.json');

function readTasks() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function saveTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
  res.json(task);
});

router.post('/', (req, res) => {
  const { title, description, status, priority } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Le titre est obligatoire' });
  }
  const tasks = readTasks();
  const newTask = {
    id: Date.now().toString(),
    title: title.trim(),
    description: description || '',
    status: status || 'pending',
    priority: priority || 'low',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  tasks.push(newTask);
  saveTasks(tasks);
  res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Tâche non trouvée' });
  tasks[index] = {
    ...tasks[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  saveTasks(tasks);
  res.json(tasks[index]);
});

router.delete('/:id', (req, res) => {
  let tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Tâche non trouvée' });
  tasks = tasks.filter(t => t.id !== req.params.id);
  saveTasks(tasks);
  res.json({ message: 'Tâche supprimée' });
});

module.exports = router;