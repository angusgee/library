const bookLibrary: Book[] = [];
const container = document.querySelector(".container");
const submitBtn = document.getElementById("submit");

interface Book {
    title: string;
    author: string;
    pages: number;
    haveRead: boolean;
    getInfo(): string;
}

function Book(
    title: string,
    author: string,
    pages: number,
    haveRead: boolean
): Book {
    return {
        title,
        author,
        pages,
        haveRead,
        getInfo: function (): string {
            return `Title: ${title} is by author ${author}, is ${pages} pages long and ${
                haveRead ? "has been read" : "has not been read"
            }`;
        },
    };
}

function addBookToLibrary(
    title: string,
    author: string,
    pages: number,
    haveRead: boolean
): void {
    const newBook = Book(title, author, pages, haveRead);
    bookLibrary.push(newBook);
}

addBookToLibrary("Bravo Two Zero", "Andy McNab", 350, false);
addBookToLibrary("River God", "Wilbur Smith", 500, true);
addBookToLibrary("The Count of Monte Cristo", "Alexandre Dumas", 1000, false);
addBookToLibrary("The Da Vinci Code", "Dan Brown", 600, false);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 1500, true);

bookLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("p");
    title.innerHTML = `Title: ${book.title}`;
    card.appendChild(title);
    const author = document.createElement("p");
    author.innerHTML = book.author;
    author.innerHTML = `By: ${book.author}`;
    card.appendChild(author);
    const pages = document.createElement("p");
    pages.innerHTML = `Pages: ${book.pages.toString()}`;
    card.appendChild(pages);
    container?.appendChild(card);
});

submitBtn?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted!");
});
