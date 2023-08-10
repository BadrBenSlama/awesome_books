// Create class for booklist
class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookListElement = document.getElementById('bookList');
    this.bookTileEntry = document.getElementById('bookTitle');
    this.bookAuthorEntry = document.getElementById('bookAuthor');
    this.submitBtn = document.getElementById('submitBtn');

    // Add an event listner to submit button
    this.submitBtn.addEventListener('click', () => {
      this.addBook();
      this.renderBooks();
      this.bookTitleEntry.value = '';
      this.bookAuthorEntry.value = '';
    });
    this.renderBooks();
  }

  // create variables within addbook function
  // Declared trim method to remove whitespace
  addBook() {
    const title = this.bookTileEntry.value.trim();
    const author = this.bookAuthorEntry.value.trim();
    if (title !== '' && author !== '') {
      const book = { title, author };
      this.books.push(book);
      this.saveBooks();
    }
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  renderBooks() {
    this.bookListElement.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.textContent = `${book.title} writen by ${book.author}`;

      // Create const variable and functionalities for remove
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.style.marginTop = '5px';
      removeButton.classList.add('remove-button');
      // eslint-disable-next-line no-use-before-define
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
        this.renderBooks();
      });

      // Append User Interface for li remove
      li.appendChild(removeButton);
      this.bookListElement.appendChild(li);
    });
  }
}

function renderBooksOnLoad() {
  const bookList = new BookList();
  bookList.renderBooks();
}

document.addEventListener('DOMContentLoaded', renderBooksOnLoad);
