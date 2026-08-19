const STORAGE_KEY = "festivalAiTasks";
const INTENTION_KEY = "festivalAiIntention";

const DEFAULT_TASKS = [
  { id: "starter-1", text: "Review project notes", completed: false },
  { id: "starter-2", text: "Reply to one message", completed: false },
  { id: "starter-3", text: "Plan an afternoon walk", completed: false }
];

const greeting = document.querySelector("#greeting");
const today = document.querySelector("#today");
const clock = document.querySelector("#clock");
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const formMessage = document.querySelector("#form-message");
const list = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const taskCount = document.querySelector("#task-count");
const intentionForm = document.querySelector("#intention-form");
const intentionInput = document.querySelector("#intention-input");
const intentionMessage = document.querySelector("#intention-message");

let tasks = [];

function updateDateAndTime() {
  const now = new Date();
  const hour = now.getHours();

  greeting.textContent = hour < 12
    ? "Good morning"
    : hour < 18
      ? "Good afternoon"
      : "Good evening";

  today.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(now);

  clock.textContent = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(now);
}

async function saveTasks() {
  await browser.storage.local.set({ [STORAGE_KEY]: tasks });
}

function renderTasks() {
  list.replaceChildren();
  emptyState.hidden = tasks.length !== 0;

  for (const task of tasks) {
    const item = document.createElement("li");
    item.className = `task-item${task.completed ? " completed" : ""}`;
    item.dataset.id = task.id;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "task-toggle";
    toggle.dataset.action = "toggle";
    toggle.setAttribute(
      "aria-label",
      task.completed ? `Mark ${task.text || "blank task"} incomplete` : `Complete ${task.text || "blank task"}`
    );
    toggle.textContent = task.completed ? "✓" : "";

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "task-delete";
    remove.dataset.action = "delete";
    remove.setAttribute("aria-label", `Delete ${task.text || "blank task"}`);
    remove.textContent = "×";

    item.append(toggle, text, remove);
    list.append(item);
  }

  const openCount = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${openCount} open`;
}

async function loadTasks() {
  const saved = await browser.storage.local.get(STORAGE_KEY);

  if (Array.isArray(saved[STORAGE_KEY])) {
    tasks = saved[STORAGE_KEY];
  } else {
    tasks = DEFAULT_TASKS.map((task) => ({ ...task }));
    await saveTasks();
  }

  renderTasks();
}

async function loadIntention() {
  const saved = await browser.storage.local.get(INTENTION_KEY);
  intentionInput.value = typeof saved[INTENTION_KEY] === "string"
    ? saved[INTENTION_KEY]
    : "";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  input.removeAttribute("aria-invalid");

  const text = input.value.trim();

  if (!text) {
    formMessage.textContent = "Write something before adding the task.";
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }

  tasks.push({
    id: crypto.randomUUID(),
    text,
    completed: false
  });

  input.value = "";
  await saveTasks();
  renderTasks();
  input.focus();
});

input.addEventListener("input", () => {
  formMessage.textContent = "";
  input.removeAttribute("aria-invalid");
});

intentionForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  intentionMessage.textContent = "";
  intentionInput.removeAttribute("aria-invalid");

  const intention = intentionInput.value.trim();

  if (!intention) {
    intentionMessage.textContent = "Write an intention before saving it.";
    intentionInput.setAttribute("aria-invalid", "true");
    intentionInput.focus();
    return;
  }

  intentionInput.value = intention;
  await browser.storage.local.set({ [INTENTION_KEY]: intention });
  intentionMessage.textContent = "Saved locally.";
});

intentionInput.addEventListener("input", () => {
  intentionMessage.textContent = "";
  intentionInput.removeAttribute("aria-invalid");
});

list.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  const item = button?.closest(".task-item");
  if (!button || !item) return;

  const task = tasks.find((candidate) => candidate.id === item.dataset.id);
  if (!task) return;

  if (button.dataset.action === "toggle") {
    task.completed = !task.completed;
  }

  if (button.dataset.action === "delete") {
    tasks = tasks.filter((candidate) => candidate.id !== task.id);
  }

  await saveTasks();
  renderTasks();
});

updateDateAndTime();
setInterval(updateDateAndTime, 1000);
Promise.all([loadTasks(), loadIntention()]).catch(() => {
  formMessage.textContent = "Tasks could not be loaded. Reload the extension to try again.";
});
