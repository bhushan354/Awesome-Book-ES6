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

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
