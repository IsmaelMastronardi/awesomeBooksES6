const bookTitle = document.querySelector('.book_title');
const authorName = document.querySelector('.author_name');
const article = document.querySelector('.book_details');
export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.displayBookDetails = this.displayBookDetails.bind(this);
    this.bookArray = [];
    if (localStorage.getItem('bookArray') != null) {
      this.bookArray = JSON.parse(localStorage.getItem('bookArray'));
    } else {
      this.bookArray = [{
        title: 'Mistborn',
        author: 'Brandon Sanderson',
      }];
    }
  }

  // update method
  updateLocalStorage() {
    localStorage.setItem('bookArray', JSON.stringify(this.bookArray));
  }

  // remove method
  removeBook(bookToRemove, obj) {
    article.removeChild(bookToRemove);
    this.bookArray.splice(this.bookArray.indexOf(obj), 1);
    this.updateLocalStorage();
  }

  // display method
  displayBookDetails(obj) {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    if (this.bookArray.indexOf(obj) % 2 === 1) {
      bookContainer.classList.add('white');
    }
    const bookId = `a${Math.floor(Math.random() * 100000)}`;
    bookContainer.id = bookId;
    const buttonId = `a${Math.floor(Math.random() * 100000)}`;
    bookContainer.innerHTML = `
          <p class='book_title'>'${obj.title}' by ${obj.author} </p>
          <button class='remove_button'
          id='${buttonId}'>Remove</button>
          `;
    article.append(bookContainer);
    const removeBtn = document.querySelector(`#${buttonId}`);
    removeBtn.addEventListener('click', (evt) => {
      evt.stopPropagation();
      this.removeBook(bookContainer, obj);
    });
  }

  addBook() {
    const newBook = new Book(bookTitle.value, authorName.value);
    this.bookArray.push(newBook);
    this.displayBookDetails(newBook);
    bookTitle.value = '';
    authorName.value = '';
    this.updateLocalStorage();
  }
}