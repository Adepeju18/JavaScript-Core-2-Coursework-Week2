function todoList(todos) {
  // Write your code here...
  let li = document.createElement("li");
  document.getElementById("content").appendChild(li);
  for(let i =0; i< todos.length;i++){
    let ul = document.createElement("ul");
     li.appendChild(ul);
    //  ul.innerHTML+=todos;
    let tagList = document.createElement("a");
    tagList.id = "tag";
     let textLi = document.createTextNode(`${todos[i].todo}`);
    tagList.appendChild(textLi);
    ul.appendChild(tagList);
    // li.appendChild(ul);
    let clickFunction = function strikeThrough(){
      if(ul.style.textDecoration==="line-through"){
        ul.style.textDecoration ="none";
      }else{
        ul.style.textDecoration = "line-through";
      }
    }
    tagList.addEventListener("click",clickFunction);
  }
  
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);