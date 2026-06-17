const API_URL = 'http://localhost:3000';

let currentFilter = 'all';
let editingTaskId = null;
let selectedPriority = 'low';
let tasks = [];

// DOM Elements
const tasksList = document.getElementById('tasks-list');
const emptyState = document.getElementById('empty-state');
const modalOverlay = document.getElementById('modal-overlay');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const taskStatus = document.getElementById('task-status');
const searchInput = document.getElementById('search-input');

// API calls
async function fetchTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  tasks = await res.json();
  renderTasks();
  updateStats();
}

async function createTask(data) {
  await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  await fetchTasks();
}

async function updateTask(id, data) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  await fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
  await fetchTasks();
}

async function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  await updateTask(id, { status: task.status === 'done' ? 'pending' : 'done' });
}

// Modal
function openModal(task = null) {
  editingTaskId = task ? task.id : null;
  document.getElementById('modal-title').textContent = task ? 'Modifier la tâche' : 'Nouvelle tâche';
  taskTitle.value = task ? task.title : '';
  taskDescription.value = task ? task.description : '';
  taskStatus.value = task ? task.status : 'pending';
  selectedPriority = task ? task.priority : 'low';
  updatePriorityButtons();
  modalOverlay.classList.add('active');
  taskTitle.focus();
}

function closeModal() {
  modalOverlay.classList.remove('active');
  editingTaskId = null;
  taskTitle.value = '';
  taskDescription.value = '';
  taskStatus.value = 'pending';
  selectedPriority = 'low';
  updatePriorityButtons();
}

function updatePriorityButtons() {
  document.querySelectorAll('.priority-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.priority === selectedPriority);
  });
}

async function saveTask() {
  const title = taskTitle.value.trim();
  if (!title) {
    taskTitle.style.borderColor = '#ef4444';
    taskTitle.focus();
    return;
  }
  taskTitle.style.borderColor = '';

  const data = {
    title,
    description: taskDescription.value.trim(),
    status: taskStatus.value,
    priority: selectedPriority
  };

  if (editingTaskId) {
    await updateTask(editingTaskId, data);
  } else {
    await createTask(data);
  }
  closeModal();
}

// Filter
function getFilteredTasks() {
  let filtered = currentFilter === 'all' ? tasks : tasks.filter(t => t.status === currentFilter);
  const search = searchInput.value.trim().toLowerCase();
  if (search) {
    filtered = filtered.filter(t =>
      t.title.toLowerCase().includes(search) ||
      t.description.toLowerCase().includes(search)
    );
  }
  return filtered;
}

function getStatusLabel(status) {
  const labels = { pending: 'En attente', 'in-progress': 'En cours', done: 'Terminée' };
  return labels[status] || status;
}

function getPriorityLabel(priority) {
  const labels = { low: 'Basse', medium: 'Moyenne', high: 'Haute' };
  return labels[priority] || priority;
}

// Render
function renderTasks() {
  const filtered = getFilteredTasks();
  tasksList.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  filtered.forEach(task => {
    const card = document.createElement('div');
    card.className = `task-card ${task.status === 'done' ? 'done' : ''}`;
    card.innerHTML = `
      <div class="task-checkbox ${task.status === 'done' ? 'checked' : ''}" onclick="toggleTask('${task.id}')">
        ${task.status === 'done' ? '<i class="fas fa-check"></i>' : ''}
      </div>
      <div class="task-content">
        <div class="task-title">${task.title}</div>
        ${task.description ? `<div class="task-description">${task.description}</div>` : ''}
        <div class="task-meta" style="margin-top: 6px;">
          <span class="status-badge ${task.status}">${getStatusLabel(task.status)}</span>
          <span class="priority-badge ${task.priority}">${getPriorityLabel(task.priority)}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="btn-action btn-edit" onclick="openModal(tasks.find(t => t.id === '${task.id}'))">
          <i class="fas fa-pen"></i>
        </button>
        <button class="btn-action btn-delete" onclick="deleteTask('${task.id}')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    tasksList.appendChild(card);
  });
}

function updateStats() {
  const pending = tasks.filter(t => t.status === 'pending').length;
  const inProgress = tasks.filter(t => t.status === 'in-progress').length;
  const done = tasks.filter(t => t.status === 'done').length;

  document.getElementById('stat-pending').textContent = pending;
  document.getElementById('stat-in-progress').textContent = inProgress;
  document.getElementById('stat-done').textContent = done;

  document.getElementById('badge-all').textContent = tasks.length;
  document.getElementById('badge-pending').textContent = pending;
  document.getElementById('badge-in-progress').textContent = inProgress;
  document.getElementById('badge-done').textContent = done;
}

// Event Listeners
document.getElementById('btn-open-modal').addEventListener('click', () => openModal());
document.getElementById('btn-close-modal').addEventListener('click', closeModal);
document.getElementById('btn-cancel').addEventListener('click', closeModal);
document.getElementById('btn-save').addEventListener('click', saveTask);

document.querySelectorAll('.priority-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedPriority = btn.dataset.priority;
    updatePriorityButtons();
  });
});

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    currentFilter = item.dataset.filter;
    const titles = { all: 'Toutes les tâches', pending: 'En attente', 'in-progress': 'En cours', done: 'Terminées' };
    document.getElementById('tasks-title').textContent = titles[currentFilter];
    renderTasks();
  });
});

searchInput.addEventListener('input', renderTasks);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Enter' && modalOverlay.classList.contains('active')) saveTask();
});

// Init
fetchTasks();