function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((elem) =>{
    let listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = item.task
    let spanList = document.createElement("span");
    spanList.className = "badge bg-primary rounded-pill";
    let checkList = document.createElement("i");
    checkList.className = "fa fa-check";
    checkList.addEventListener("click",()=>{
      if(listItem.style.textDecoration === "none"){
        listItem.style.textDecoration ="line-through";
      }else{
        listItem.style.textDecoration ="none"
      }
    });
    let trashList = document.createElement("i");
    trashList.className = "fa fa-trash";
    trashList.addEventListener("click",()=>{
      listItem.remove();
    });
    listItem.appendChild(spanList);
    spanList.appendChild(checkList);
    spanList.appendChild(trashList);
    list.appendChild(listItem);


     
  });
  // document.body.appendChild(list);
  
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let addTodoListElem1 = document.getElementById("todoInput");
  if(addTodoListElem1.Value){
  let newArr = [{task:addTodoListElem1.Value,completed:false}]
  populateTodoList(newArr);
  addTodoListElem1.Value = "";
  }
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let listItem = document.getElementsByTagName("ul");
  listItem[0].innerHTML = "";
  // Write your code here...
}
