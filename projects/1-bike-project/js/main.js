let updateBlue = document.getElementById("blueBtn");
function clickBtnBlue(){
    let jumbotronSec = document.querySelector(".jumbotron");
    jumbotronSec.style.background = "#588fbd";
    let donateBike = document.getElementById("donate-button");
    donateBike.style.background = "#ffa500";
    let volunteer = document.getElementById("volunteer-button");
    volunteer.style.background = "black";
    volunteer.style.color = "white";
}
updateBlue.addEventListener("click",clickBtnBlue);

let updateOrange = document.getElementById("orangeBtn");
function clickBtnOrange(){
    let jumbotronSec = document.querySelector(".jumbotron");
    jumbotronSec.style.background = "#f0ad4e";
    let donateBike = document.getElementById("donate-button");
    donateBike.style.background = "#5751fd";
    let volunteer = document.getElementById("volunteer-button");
    volunteer.style.background = "#31b0d5";
    volunteer.style.color ="white";
}
    updateOrange.addEventListener("click",clickBtnOrange);

    let updateGreen = document.getElementById("greenBtn");
function clickBtnGreen(){
    let jumbotronSec = document.querySelector(".jumbotron");
    jumbotronSec.style.background = "#87ca8a";
    let donateBike = document.getElementById("donate-button");
    donateBike.style.background = "black";
    let volunteer = document.getElementById("volunteer-button");
    volunteer.style.background = "#8c9c08";
}
    updateGreen.addEventListener("click",clickBtnGreen);

    // part 2
    let submit = document.getElementById("submit");
    submit.addEventListener("click",buttonCheck);
    function buttonCheck(e){
         e.preventDefault();
        let allForm = [document.getElementById("exampleInputEmail1"),
    document.getElementById("example-text-input"),
    document.getElementById("exampleTextarea")];
    for (let key of allForm) {
        if (key.id === "exampleInputEmail1" && !key.value.includes('@')) {
            key.value = "";
        }
        if (!key.value.length) {
            document.getElementById(`${key.id}`).style.backgroundColor = "red";
        }
    }
    if (allForm.every(input => input.value.length > 0)) {
        allForm.map(input => {
            input.value = "";
            input.style.backgroundColor = "white";
        });
        alert(`Thank you for filling out the form`);
    }


    }

    
    




