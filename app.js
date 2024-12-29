"use strict";
function Book(title, author, pages, haveRead) {
    return {
        title,
        author,
        pages,
        haveRead,
        getInfo: function () {
            return `Title: ${title} is by author ${author}, is ${pages} pages long and ${haveRead ? "has been read" : "has not been read"}`;
        },
    };
}
const book = Book("River God", "Wilbur Smith", 500, true);
const bookLibrary = [];
function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = Book(title, author, pages, haveRead);
    bookLibrary.push(newBook);
}
addBookToLibrary("Bravo Two Zero", "Andy McNab", 350, false);
addBookToLibrary("River God", "Wilbur Smith", 500, true);
addBookToLibrary("The Count of Monte Cristo", "Alexandre Dumas", 1000, false);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 600, false);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 1500, true);
console.log(bookLibrary);
