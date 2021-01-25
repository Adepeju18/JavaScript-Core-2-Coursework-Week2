function shoppingList(arrayOfPeople) {
  // Write your code here...
  // for(let i =0; i < shopping.length; i++);
  // let list = document.createElement("ul");
  // let itemName = document.createElement("li");
  // itemName.innerHTML = `${shopping[i].list}`;
  // document.getElementsById("content").appendChild(itemName);
  // list.appendChild(itemName);
let ul = document.createElement("ul");
document.getElementById("content").appendChild(ul);
shopping.forEach(function(shopping){
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML+=shopping;
})
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
