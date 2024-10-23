const modal = document.getElementById("modal");
const addTaskBtn = document.getElementById("add-task");
const saveTaskBtn = document.getElementById("save-task");
const columnSelect = document.getElementById("column-select");

addTaskBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

saveTaskBtn.addEventListener("click", () => {
    const taskName = document.getElementById("task-name").value;
    const taskDescription = document.getElementById("task-description").value;
    const selectedColumn = columnSelect.value;

    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `<div> Название: ${taskName}</div>
                      <div> Описание: ${taskDescription}</div>
                      <input type="checkbox">
                      <button class="delete-task">❌</button>`;

    document.getElementById(selectedColumn).appendChild(task);
    modal.style.display = "none";

    const deleteBtn = task.querySelector(".delete-task");
    const checkbox = task.querySelector("input[type='checkbox']");

    deleteBtn.addEventListener("click", () => {
        task.remove();
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            document.getElementById("done").appendChild(task);
        } else {
            document.getElementById(selectedColumn).appendChild(task);
        }
    });
});