const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

// Route principale
app.get('/', (req, res) => {
  res.json({
    name: 'Task Manager Lite API',
    version: '1.0.0',
    routes: {
      health: '/health',
      tasks: '/tasks'
    }
  });
});

// Route de santé
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});