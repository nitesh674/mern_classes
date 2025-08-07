const addBtn = document.getElementById("addBtn");
const inputArea = document.getElementById("inputArea");
const taskInput = document.getElementById("taskInput");
const saveTask = document.getElementById("saveTask");
const taskList = document.getElementById("taskList");
const plusIcon = document.getElementById("plusIcon");

// ⏫ Show/hide input area
addBtn.addEventListener("click", () => {
  inputArea.style.display = inputArea.style.display === "flex" ? "none" : "flex";
  plusIcon.classList.toggle("rotated");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    createTaskElement(task);
  });
});

function updateLocalStorage() {
  const tasks = [];
  document.querySelectorAll(".task-text").forEach(p => {
    tasks.push(p.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskElement(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-item";

  const taskPara = document.createElement("p");
  taskPara.textContent = taskText;
  taskPara.className = "task-text";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  taskDiv.appendChild(taskPara);
  taskDiv.appendChild(editBtn);
  taskDiv.appendChild(deleteBtn);
  taskList.appendChild(taskDiv);

  // 🗑️ Delete
  deleteBtn.addEventListener("click", () => {
    taskDiv.remove();
    updateLocalStorage();
  });

  // ✏️ Edit/Save toggle
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      // Switch to input mode
      const input = document.createElement("input");
      input.type = "text";
      input.value = taskPara.textContent;
      input.className = "edit-input";

      taskDiv.replaceChild(input, taskPara);
      editBtn.textContent = "Save";
    } else {
      // Save edited text
      const input = taskDiv.querySelector(".edit-input");
      const updatedText = input.value.trim();

      if (updatedText !== "") {
        taskPara.textContent = updatedText;
        taskDiv.replaceChild(taskPara, input);
        editBtn.textContent = "Edit";
        updateLocalStorage();
      }
    }
  });
}


saveTask.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    createTaskElement(taskText);
    updateLocalStorage();
    taskInput.value = "";
  }
});








// let btn = document.getElementById("btn");
// let main = document.querySelector("body");

// function applyTheme(theme) {
//     if (theme === "dark") {
//         main.style.background = "black";
//         main.style.color = "white";
//     } else {
//         main.style.background = "white";
//         main.style.color = "black";
//     }
// }

// let savedTheme = localStorage.getItem("theme") || "light";
// applyTheme(savedTheme);

// btn.addEventListener("click", () => {
//     let currentTheme = localStorage.getItem("theme") || "light";
//     let newTheme = currentTheme === "light" ? "dark" : "light";
//     localStorage.setItem("theme", newTheme);
//     applyTheme(newTheme);
// });
