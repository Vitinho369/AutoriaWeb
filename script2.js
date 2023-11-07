let tasks = JSON.parse(localStorage.getItem('lista')) || []; // localStorage

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value;

    if (taskText === "") return; // 

    tasks.push(taskText); // adicionando
    saveTasksToLocalStorage(); // Salvar no localStorage
    updateTaskList(); // Atualizar 
    taskInput.value = ""; // Limpar entrada
}

function saveTasksToLocalStorage() {
    localStorage.setItem('lista', JSON.stringify(tasks)); // Salvar as tarefas no localStorage
}

function editTask(){
    const inputEdit = document.createElement("input");
    inputEdit.value = tasks[this.id];
    const sectionItem =  document.getElementById(this.id);
    // sectionItem.removeChild(taskItem);
    let value = prompt("Digite o valor que deseja editar: ");
    tasks[this.id] = value; 
    updateTaskList();
    saveTasksToLocalStorage();
}

function deleteTask(){
    tasks.splice(this.id, 1);
    updateTaskList();
    saveTasksToLocalStorage();
}

function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpe a lista antes de atualizar

    tasks.forEach((task, index) => {
        const sectionItem = document.createElement("section");//
        const buttonEdit = document.createElement("input");//
        const buttonDelete = document.createElement("input");//
        sectionItem.id = index;
        buttonEdit.type = "button";
        buttonDelete.type = "button";
        buttonEdit.value = "Editar";
        buttonDelete.value = "Deletar";
        buttonEdit.id = index;
        buttonDelete.id = index;
        buttonEdit.onclick = editTask;
        buttonDelete.onclick = deleteTask;


        const taskItem = document.createElement("li");
        taskItem.textContent = task + ` [${index}]`;
        sectionItem.appendChild(taskItem);
        sectionItem.appendChild(buttonEdit);
        sectionItem.appendChild(buttonDelete);
        taskList.appendChild(sectionItem);
    });
}
window.addEventListener('load', () => {
    updateTaskList();
});