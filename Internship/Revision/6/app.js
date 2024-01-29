function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteCompleted() {
    var completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(function (task) {
        task.parentNode.removeChild(task);
    });
}
