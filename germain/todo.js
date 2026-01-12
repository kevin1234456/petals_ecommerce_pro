
const tasks = [];
window.addEventListener('load',()=>{
    displayTasks(tasks)
})
function addTask(){
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const deadline = document.getElementById("deadline");
    tasks.push({title: title.value, description: description.value, createdAt: new Date().toLocaleDateString(), isCompleted: false, deadline: deadline.value});
    console.log(tasks)
    displayTasks(tasks)
}


function displayTasks(tasks){
    const data = document.querySelector("#data");
    data.innerHTML = "";

    if(tasks.length == 0){
        data.innerHTML = "No tasks Available"
    }
    for(let i=0; i<tasks.length; i++){
        data.innerHTML += `
        <tr>
            <td>${tasks[i].title}</td>
            <td>${tasks[i].description}</td>
            <td>${tasks[i].createdAt}</td>
            <td>${tasks[i].deadline}</td>
            <td><input onClick="completeTask(${i})" id="checkbox" ${tasks[i].isCompleted ? 'checked' : '' } type="checkbox"></td>
            <td><button onClick="deleteTask(${i})">Delete</button></td>
        </tr>
        <button onClick="completeTask()">Check All</button>
        `
    }
}
function deleteTask(index){
    tasks.splice(index,1)
    displayTasks(tasks)
}

function completeTask(index){
    tasks[index].isCompleted = !tasks[index].isCompleted;
    displayTasks(tasks);
    console.log(tasks)
}
function completeAll(){
    for(let i=0; i< tasks.length; i++){
        if(!tasks[i].isCompleted){
            tasks[i].isCompleted = true
        }
    }
    displayTasks(tasks)
   
}
