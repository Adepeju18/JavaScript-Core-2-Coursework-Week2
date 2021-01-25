function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for(let i=0;i < arrayOfPeople.length;i++){
    let namePerson = document.createElement("h1");
    let jobOfPerson = document.createElement("h2");
    namePerson.innerHTML =`${arrayOfPeople[i].name}`;
    jobOfPerson.innerHTML = `${arrayOfPeople[i].job}`;
    document.getElementById("content").appendChild(namePerson);
    document.getElementById("content").appendChild(jobOfPerson);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);


