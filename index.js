import Book from './modules/bookClass.js';
import { changeDisplayedPage, redIndicator } from './modules/changeDisplay.js';
// I need to import from modules to use the code, but dont actually need to read it again
// on this file.
// eslint-disable-next-line no-unused-vars
import setInterval from './modules/currentTime.js';

const addButton = document.querySelector('.add_button');
const list = document.querySelector('#list');
const add = document.querySelector('#add');
const contact = document.querySelector('#contact');
const bookList = document.querySelector('.bookList');
const addBooks = document.querySelector('.addBooks');
const contactInformation = document.querySelector('.contact_information');

const bookObject = new Book();
addButton.addEventListener('click', () => {
  bookObject.addBook();
});

window.onload = bookObject.bookArray.forEach(bookObject.displayBookDetails);

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
