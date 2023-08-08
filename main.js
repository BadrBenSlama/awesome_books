// JavaScript code to manipulate the DOM
document.addEventListener('DOMContentLoaded', () => {
  // Create variables
  const bookTitleEntry = document.getElementById('bookTitle');
  const bookAuthorEntry = document.getElementById('bookAuthor');
  const submitBtn = document.getElementById('submitBtn');
  const addBooks = document.getElementById('addBooks');

  // Create variables and localstorage JSON Initialization
  const storedBooks = localStorage.getItem('books');
  const books = storedBooks ? JSON.parse(storedBooks) : [];

  function saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
  }

  function renderBooks() {
    addBooks.innerHTML = '';
    books.forEach((book, index) => {
      const li = document.createElement('li');

      const titleElement = document.createElement('p');
      titleElement.textContent = `${book.title}`;

      const authorElement = document.createElement('p');
      authorElement.textContent = `${book.author}`;

      // Create const variable and functionalities for remove
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.style.marginTop = '5px';
      // eslint-disable-next-line no-use-before-define
      removeButton.addEventListener('click', () => deleteBook(index));

      li.appendChild(titleElement);
      li.appendChild(authorElement);
      li.appendChild(removeButton);

      addBooks.appendChild(li);
    });
  }

  function deleteBook(index) {
    books.splice(index, 1);
    saveBooksToLocalStorage();
    renderBooks();
  }

  // eventLister functoinalities to add book item
  function addBook() {
    const title = bookTitleEntry.value;
    const author = bookAuthorEntry.value;
    if (title.trim() !== '' && author.trim() !== '') {
      const book = { title, author };
      books.push(book);

      saveBooksToLocalStorage();
      renderBooks();
      bookTitleEntry.value = '';
      bookAuthorEntry.value = '';
    }
  }

  submitBtn.addEventListener('click', addBook);
  renderBooks();
});