let root = document.querySelector("body");
let tasks = JSON.parse(localStorage.getItem('vector')) || [];

function editTask(){
    const inputEdit = document.createElement("input");
    inputEdit.value = tasks[this.id];
    const sectionItem =  document.getElementById(this.id);
    // sectionItem.removeChild(taskItem);
    let value = prompt("Digite o valor que deseja editar: ");
    tasks[this.id] = value; 
    
    updateTaskList();
}

function deleteTask(){
    tasks.splice(this.id, 1);
    updateTaskList();
}

const saveTasks = ()=>{
    localStorage.setItem("vector",JSON.stringify(tasks));
}

const insertList = (id) =>{
    if (id.value === "") return;
    clearSections();
    
    tasks.push(id.value);
    saveTasks();
    id.value = "";
    updateTaskList();
};

const clearSections = ()=>{
    let sections = root.getElementsByTagName("section");
    // sections.forEach((elements)=>{
        for(let i=0; i < sections.length;i++){
            // root.removeChild(sections[i]);
            sections[i].innerText = "";
        }

    // });    
};


const updateTaskList = ()=>{
    clearSections();
    tasks.forEach((id, index)=>{  
    
        const listiner = document.createElement("li");  
        const sectionItem = document.createElement("section");
        const buttonEdit = document.createElement("input");
        const buttonDelete = document.createElement("input");
        root.appendChild(listiner);

        sectionItem.id = index;
        buttonEdit.type = "button";
        buttonDelete.type = "button";
        buttonEdit.value = "Editar";
        buttonDelete.value = "Deletar";
        buttonEdit.id = index;
        buttonDelete.id = index;
        buttonEdit.onclick = editTask;
        buttonDelete.onclick = deleteTask;


        listiner.textContent = id + ` [${index}]`;
        sectionItem.appendChild(listiner);
        sectionItem.appendChild(buttonEdit);
        sectionItem.appendChild(buttonDelete);
        root.appendChild(sectionItem);
    });
};


window.addEventListener('load', () => {
    updateTaskList();
});