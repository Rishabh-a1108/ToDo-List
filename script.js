// Get elements by id & class.
const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
let taskCount = 0;
// Function for task count.
const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};
// Function for adding tasks 
const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if(!taskName){
        setTimeout(() => {
         error.style.display = "block";
        }, 200);
        return;
    }
// Create To-do list using `Template Strings` . 
    const task = `<div class="task">
    <input type="checkbox" class="task-check"/>
    <span class="taskname">${taskName}</span>
    <button class="delete">
    <i class="fa-solid fa-close"></i>
    </button>
    </div>
    `;
// Set list position.  
    tasksContainer.insertAdjacentHTML("beforeend", task);
// deleteButtons function.
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.onclick = () => {
            if(document.querySelectorAll(".task-check").checked){
                taskCount -= 0;
            }else{
                taskCount -= 1;
            }
            button.parentElement.remove();
            displayCount(taskCount);
        };
    });
    // Checkbox function.
    const tasksCkeck = document.querySelectorAll(".task-check");
    tasksCkeck.forEach((checkBox) => {
        checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if(checkBox.checked) {
                taskCount -= 1;
            }
            else{
                taskCount += 1;
            }
            displayCount(taskCount);
        };
    });
    taskCount += 1;
    displayCount(taskCount);
    newTaskInput.value = "";
};
// Click event on add button.
addBtn.addEventListener("click", addTask);

// Onload default value.
window.onload = () => {
 taskCount = 0;
 displayCount(taskCount);
 newTaskInput.value = "";
}                   
