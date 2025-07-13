const MAX_ENERGY = 12;
let currentEnergy = MAX_ENERGY;
let tasks = [];

/* --- DOM --- */
const currentEnergySpan = document.getElementById('current-energy');
const spoonsContainer   = document.getElementById('spoons-container');
const taskForm          = document.getElementById('task-form');
const taskInput         = document.getElementById('task-input');
const costSelect        = document.getElementById('cost-select');
const tasksUL           = document.getElementById('tasks');
const infoToggle        = document.getElementById('info-toggle');
const infoPanel         = document.getElementById('info-panel');
const themeToggle       = document.getElementById('theme-toggle');
const resetBtn          = document.getElementById('reset-day');

/* --- Theming --- */
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

/* --- Accordion --- */
infoToggle.addEventListener('click', () => {
  const open = infoToggle.classList.toggle('open');
  infoPanel.classList.toggle('open', open);
});

/* --- Persistence --- */
function saveState() {
  localStorage.setItem('energyApp', JSON.stringify({currentEnergy, tasks}));
}
function loadState() {
  const saved = JSON.parse(localStorage.getItem('energyApp') || '{}');
  if (typeof saved.currentEnergy === 'number') currentEnergy = saved.currentEnergy;
  if (Array.isArray(saved.tasks)) tasks = saved.tasks;
}

/* --- Energy Display --- */
function updateEnergyDisplay() {
  currentEnergySpan.textContent = currentEnergy;
  spoonsContainer.innerHTML = '';
  for (let i = 0; i < MAX_ENERGY; i++) {
    const spoon = document.createElement('span');
    spoon.className = 'spoon';
    spoon.textContent = '🥄';
    if (i >= currentEnergy) spoon.classList.add('used');
    spoonsContainer.appendChild(spoon);
  }
}

/* --- Task Rendering --- */
function renderTask(taskObj) {
  const li = document.createElement('li');
  li.className = 'task';
  li.dataset.id = taskObj.id;
  if (taskObj.done) li.classList.add('done');

  li.innerHTML = `
    <input type="checkbox" ${taskObj.done ? 'checked' : ''}>
    <span class="task-text">${taskObj.text}</span>
    <span class="task-cost">${taskObj.cost}🥄</span>
    <button title="Löschen">🗑</button>
  `;

  li.querySelector('input').addEventListener('change', e => toggleTask(taskObj.id, e.target.checked));
  li.querySelector('button').addEventListener('click', () => deleteTask(taskObj.id));
  tasksUL.appendChild(li);
}

/* --- Task Logic --- */
function addTask(text, cost) {
  const newTask = { id: Date.now(), text, cost, done: false };
  tasks.push(newTask);
  saveState();
  renderTask(newTask);
}
function toggleTask(id, done) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  if (done && currentEnergy < task.cost) {
    alert('Nicht genug Löffel übrig.');
    document.querySelector(`.task[data-id='${id}'] input`).checked = false;
    return;
  }
  task.done = done;
  if (done) currentEnergy -= task.cost;
  else currentEnergy += task.cost;
  currentEnergy = Math.max(0, Math.min(MAX_ENERGY, currentEnergy));
  saveState();
  updateEnergyDisplay();
  const li = document.querySelector(`.task[data-id='${id}']`);
  li.classList.toggle('done', done);
}
function deleteTask(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return;
  if (tasks[idx].done) currentEnergy += tasks[idx].cost;
  currentEnergy = Math.min(MAX_ENERGY, currentEnergy);
  tasks.splice(idx, 1);
  saveState();
  updateEnergyDisplay();
  document.querySelector(`.task[data-id='${id}']`).remove();
}

/* --- Recharge Buttons --- */
document.querySelectorAll('#recharge button').forEach(btn => {
  btn.addEventListener('click', () => {
    const plus = parseInt(btn.dataset.plus, 10);
    currentEnergy = Math.min(MAX_ENERGY, currentEnergy + plus);
    updateEnergyDisplay();
    saveState();
  });
});

/* --- Reset Day --- */
resetBtn.addEventListener('click', () => {
  if (!confirm('Wirklich neuen Tag starten?\nAlle Aufgaben werden zurückgesetzt.')) return;
  tasks.forEach(t => t.done = false);
  currentEnergy = MAX_ENERGY;
  saveState();
  updateEnergyDisplay();
  tasksUL.querySelectorAll('.task').forEach(li => li.classList.remove('done'));
  tasksUL.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false);
});

/* --- Init --- */
loadState();
updateEnergyDisplay();
tasks.forEach(renderTask);