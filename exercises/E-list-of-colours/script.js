function listOfColours(colours) {
  // let elem = document.querySelector("select");
  // let para = document.createElement("P");
  // for(i =0;i < colours.length;i++){
  //   elem[i].addEventListener("click",changeColor)
  // }
  // function changeColor(){
  //   this.style.para=this.getAttribute();
  //   document.getElementById("content").appendChild(para);

  // }

  let selectEle = document.createElement("select");
  let parTag = document.createElement("p");
  for (let i =0; i < colours.length;i++){
    let optionT = document.createElement("option");
    optionT.innerHTML = `${colours[i]}`;
    selectEle.appendChild(optionT);

   }
   document.getElementById("content").appendChild(selectEle);
   selectEle.addEventListener("click",function(event){
     parTag.innerHTML = "you have selected" + `${event.target.value}`;
     parTag.style.color = event.target.value;
     document.getElementById("content").appendChild(parTag);


   })

  // Write your code here...
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
