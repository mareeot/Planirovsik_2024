function addTask() {
    const taskName = document.getElementById("taskName").value;
    const startDay = parseInt(document.getElementById("startDay").value);
    const duration = parseInt(document.getElementById("duration").value);

    if (!taskName || duration < 1 || duration > 5) {
        alert("Пожалуйста, введите корректные данные.");
        return;
    }

    const taskBody = document.getElementById("taskBody");
    
    // Создаем новую строку для задачи
    let row = document.createElement("tr");
    
    // Добавляем название задачи
    let taskCell = document.createElement("td");
    taskCell.innerText = taskName;
    row.appendChild(taskCell);
    
    // Добавляем ячейки для дней
    for (let day = 0; day < 5; day++) {
        let cell = document.createElement("td");
        
        if (day >= startDay && day < startDay + duration) {
            cell.className = "task";
            cell.colSpan = 1; // Ячейка занимает 1 ячейку
            cell.innerText = taskName; // Указываем название задачи
        }
        
        row.appendChild(cell);
    }
    
    taskBody.appendChild(row);
    
    // Очистка полей ввода
    document.getElementById("taskName").value = "";
    document.getElementById("duration").value = "";
}