const refs = {
  form: document.querySelector("#form"),
  btn: document.querySelector(".submitBtn"),
  bookList: document.querySelector(".bookList"),
  name: document.querySelector(".name"),
  author: document.querySelector(".author"),
  priority: document.querySelector(".priority"),
  category: document.querySelector(".category"),
};

const books = JSON.parse(localStorage.getItem("books")) || [];
books.map((book) => showBook(book));

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = {
    name: refs.name.value,
    author: refs.author.value,
    priority: refs.priority.value,
    category: refs.category.value,
  };
  showBook(newBook);
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  refs.name.value = "";
  refs.author.value = "";
  refs.priority.value = "";
  refs.category.value = "";
});

function showBook(book) {
  refs.bookList.insertAdjacentHTML(
    "afterbegin",
    `<li>
        <p class="bookName">${book.name}</p>
        <p class="bookAuthor">${book.author}</p>
        <p >${book.priority}</p>
        <p >${book.category}</p>
    </li>`
  );
}
