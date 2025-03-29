const todoList=[{
    name : 'make dinner',
    dueDate: '2022-12-22'
},{
    name: 'fs',
    dueDate:'2022-12-4'
}];

render();
function render (){
let todoListHTML = '';

for(let i =0;i<todoList.length;i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <p>
    ${name} ${dueDate}
    <button onclick="
    todoList.splice(${i},1);
    render();
    ">Delete</button>
    </p>
    `;
    todoListHTML=todoListHTML+html;
    console.log(todoListHTML)
}
document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}

function addTodo(){
    const inputElement=document.querySelector(".js-input")
    const name = inputElement.value;
    const dateInputElement =document.querySelector('.js-due-date')
    todoList.push(name); 
    console.log(todoList);
    inputElement.value='';

    render();
}
