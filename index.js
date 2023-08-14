import UI from './modules/classUI.js';
import Book from './modules/classBOOK.js';
import { DateTime } from './luxon.js';

const librarySection = document.getElementById('library');
const formSection = document.getElementById('newbook');
const contactSection = document.getElementById('contact');
const libraryLink = document.getElementById('librarylink');
const newBookLink = document.getElementById('newbooklink');
const contactLink = document.getElementById('contactlink');
const time = document.getElementById('time');

formSection.style.display = 'none';
contactSection.style.display = 'none';

function Form() {
  formSection.style.display = 'block';
  contactSection.style.display = 'none';
  librarySection.style.display = 'none';
}

function Contact() {
  contactSection.style.display = 'block';
  formSection.style.display = 'none';
  librarySection.style.display = 'none';
}

function List() {
  librarySection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
}

newBookLink.addEventListener('click', Form);
contactLink.addEventListener('click', Contact);
libraryLink.addEventListener('click', List);

setInterval(() => {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

// classBook

// classUI

document.getElementById('book-form').addEventListener('submit',
  (e) => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const book = new Book(title, author);

    const ui = new UI();

    if (title === '' || author === '') {
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      ui.addBook(book);

      ui.showAlert('Book Added', 'success');

      ui.clearFields();
    }
    e.preventDefault();
  });

document.getElementById('book-list').addEventListener('click',
  (e) => {
    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
  });

// data and time
const displayTime = document.querySelector('#time');

const currentTime = DateTime.local();
const formattedDate = currentTime.toLocaleString({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

setInterval(() => {
  const formattedTime = currentTime.toLocaleString(DateTime.TIME_WITH_SECONDS);
  displayTime.innerHTML = `
    <p>${formattedDate} &nbsp ${formattedTime}</p>
  `;
}, 1000);