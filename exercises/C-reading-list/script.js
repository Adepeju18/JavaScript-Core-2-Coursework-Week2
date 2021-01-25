function readingList(books) {
  // Write your code here...
  let bookTag = document.createElement("h1");
  let bookTitle = document.createTextNode("list of book");
  bookTag.appendChild(bookTitle);
  document.getElementById("content").appendChild(bookTag);
  let ulList = document.createElement("ul");
  ulList.id = "ulId";
  document.getElementById("content").appendChild(ulList);
  for(let i =0; i < books.length; i++){
    let bookRead = document.createElement("li");
     let bookList = document.createElement("p");
     let bookTit = document.createTextNode(books[i].title + " by " +books[i].author);
     bookList.appendChild(bookTit);
     bookRead.appendChild(bookList);
     let bookImg = document.createElement("img");
    if(books[i].alreadyRead){
      bookList.style.color = "green";
    }
    if(!books[i].alreadyRead){
      bookList.style.color = "red";
    }
    if(books[i].title==="The Design of Everyday Things"){
      bookImg.src="https://images-eu.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg";
    }
    
    if(books[i].title=== "The Most Human Human"){
      bookImg.src="https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg";
      bookImg.style.height = "25%";
      bookImg.style.width = "15%";
  }
  if(books[i].title === "The Pragmatic Programmer"){
    bookImg.src = "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg";
  }
  bookRead.appendChild(bookImg);
  document.getElementById("content")
  .getElementsByTagName("ul")[0].appendChild(bookRead);
    
 }
  

 };


 

 const books = [
   {
    title: "The Design of Everyday Things",
     author: "Don Norman",
    alreadyRead: false,
    // bookLink:"https://images-eu.ssl-images-amazon.com/images/I/410RTQezHYL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
   },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    // bookLink:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrianchristian.org%2Fthe-most-human-human%2F&psig=AOvVaw1kznufSTg-jh4Ip_BwPtHh&ust=1611258281567000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCzqf-iq-4CFQAAAAAdAAAAABAD"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    // bookLink:"https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg"
  }
];

readingList(books);