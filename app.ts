const bookLibrary: Book[] = [];
const container = document.querySelector(".container");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("form") as HTMLFormElement;
const sidebarHeading = document.querySelector(
    ".sidebar-heading"
) as HTMLHeadingElement;
const openArrow = document.querySelector(".open-arrow") as HTMLImageElement;
const closeArrow = document.querySelector(".close-arrow") as HTMLImageElement;

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

function createBookObject(book: Book, i: number): void {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.indexNumber = i.toString();
    const title = document.createElement("p");
    title.innerHTML = book.title;
    card.appendChild(title);
    const author = document.createElement("p");
    author.innerHTML = book.author;
    author.innerHTML = `By: ${book.author}`;
    card.appendChild(author);
    const pages = document.createElement("p");
    pages.innerHTML = `Pages: ${book.pages.toString()}`;
    card.appendChild(pages);
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add("remove-btn");
    card.appendChild(removeBtn);
    container?.appendChild(card);
}

bookLibrary.forEach((book, i) => {
    createBookObject(book, i);
});

/////////////////////////////////
// FORM

// initial state
form.style.display = "none";
openArrow.addEventListener("click", showForm);
sidebarHeading.addEventListener("click", showForm);

// show form
function showForm(): void {
    form.style.display = "block";
    openArrow.style.display = "none";
    sidebarHeading.style.display = "none";
    closeArrow.style.display = "block";
}

// hide form
closeArrow.addEventListener("click", () => {
    form.style.display = "none";
    openArrow.style.display = "block";
    closeArrow.style.display = "none";
    sidebarHeading.style.display = "block";
});

// add new book on form submission
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted!");
    const newTitle = (document.getElementById("title") as HTMLInputElement)
        .value;
    const newAuthor = (document.getElementById("author") as HTMLInputElement)
        .value;
    const newPages = parseInt(
        (document.getElementById("num-pages") as HTMLInputElement).value
    );
    // const newHaveRead = (
    //     document.getElementById("have-read") as HTMLInputElement
    // ).value;

    addBookToLibrary(newTitle, newAuthor, newPages, false);
    console.log(bookLibrary);
    createBookObject(bookLibrary[bookLibrary.length - 1], bookLibrary.length);
});

/////////////////////////////////
