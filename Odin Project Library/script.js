//objects 
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() { 
    return title + " by " + author + ", " + pages + " pages, " + (read ? "read" : "not read yet");
  }
}

function addBookToLibrary(newBook) {
  if(!this.isInLibary(newBook)){
    this.push(newBook)
  }
}


function isInLibary(newBook) {
  return this.every((book) => book === newBook)
}

function displayLibrary() {
  var booksString = ''
  this.array.forEach(element => {
    booksString += Object.values(person) 
  })
  document.getElementById(booksGrid).innerHTML = booksString
}

let myLibrary = []

//example
var book1 = new Book("Animal Farm", "Someone", 120, true)
var book2 = new Book("Scarlet Letter", "Someone 2", 150, false)
myLibrary.addBookToLibrary(book1)
myLibrary.addBookToLibrary(book2)

myLibrary.displayLibrary()
