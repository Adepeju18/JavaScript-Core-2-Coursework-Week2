const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];


function highlightWords(paragraph, colours) {
  let div = document.getElementById("content");
  let selectEle = document.createElement("select");
  let parTag = document.createElement("p");
  div.appendChild(parTag);
  div.appendChild(selectEle);
  for (let i =0; i < colours.length;i++){
     let optionT = document.createElement("option");
    optionT.innerHTML = `${colours[i]}`;
      selectEle.appendChild(optionT);
   }
   let words = paragraph.split(" ");
   for(let j= 0;j< words.length;j++){
     let spanElem = document.createElement("span");
     spanElem.innerHTML = words[j] + " ";
     parTag.appendChild(spanElem);
     spanElem.addEventListener("click",function(){
       if(selectEle.value==="none"){
          this.style.backgroundColor = "";
       }else{
         this.style.backgroundColor = selectEle.value;
       }

     });
   }
}



highlightWords(paragraph, colours);
