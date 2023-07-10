import Book from './modules/bookClass.js';
import { changeDisplayedPage, redIndicator } from './modules/changeDisplay.js';

const addButton = document.querySelector('.add_button');

const bookObject = new Book();
addButton.addEventListener('click', () => {
  bookObject.addBook();
});
window.onload = bookObject.bookArray.forEach(bookObject.displayBookDetails);

const list = document.querySelector('#list');
const add = document.querySelector('#add');
const contact = document.querySelector('#contact');
const bookList = document.querySelector('.bookList');
const addBooks = document.querySelector('.addBooks');
const contactInformation = document.querySelector('.contact_information');



list.addEventListener('click', () => {
  changeDisplayedPage(bookList, addBooks, contactInformation);
  redIndicator(list, add, contact);
});

add.addEventListener('click', () => {
  changeDisplayedPage(addBooks, bookList, contactInformation);
  redIndicator(add, list, contact);
});

contact.addEventListener('click', () => {
  changeDisplayedPage(contactInformation, addBooks, bookList);
  redIndicator(contact, list, add);
});