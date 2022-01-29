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

let myLibrary = []

var bookBtn = document.getElementById('addBookBtn')
var bookContainer = document.getElementById('booksGrid')
var bookSubmitBtn = document.getElementById("submitBook")
var bookName = document.getElementById('title')
var bookAuthor = document.getElementById('author')
var bookPages = document.getElementById('pages')
var bookRead = document.getElementById('read')
var bookUnread = document.getElementById('unread')
var bookNum = 0;

//adding a book to the library 
bookBtn.addEventListener('click', () => displayPrompt())
bookSubmitBtn.addEventListener('click', () => createNewBook())

function displayPrompt() {
  const prompt = document.createElement('div')
  prompt.className = 'bookPrompt'
  // const userInput = new Book(prompt('Title?'), prompt('Author?'), prompt('Pages?'));
  //   // add book object to myLibrary and display it
  //   myLibrary.addBookToLibrary(userInput);
  //   updateLibrary();
    console.log("this button has been clicked")
    bookContainer.classList.add('active')
}

function createNewBook() {
  var newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, 'unread')
  addBookToLibrary(newBook)
}

function addBookToLibrary(newBook) {
  if(!this.isInLibary(newBook)){
    this.push(newBook)
  }
  displayLibrary()
}


function isInLibary(newBook) {
  return this.every((book) => book === newBook)
}

function displayLibrary() {
  const bookShelf = document.createElement('p')
  bookShelf.innerHTML = "check"
  bookShelf.insertBefore(bookContainer)
}





