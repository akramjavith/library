
const addBookButton = document.querySelector('.add-book-button');
const modalContainer = document.querySelector('.modal-container');
const exitModalButton = document.querySelector('.exit-modal');
const submitButton = document.querySelector('.submit-button');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

  const inputTitle = document.querySelector('#title');
  const inputAuthor = document.querySelector('#author');
  const inputPages = document.querySelector('#pages');
  const inputCheckbox = document.querySelector('#read');

  if (inputTitle.value === '' || inputAuthor.value === 0 || inputPages.value === '') {
    alert('Please fill out all fields')
    return;
  } else {
    let book = new Book(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputCheckbox.checked,
    );
    myLibrary.push(book);

    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputCheckbox.checked = false;
    modalContainer.style.display = 'none';
    displayBook();
  }
}

function displayBook() {
  
  const table = document.querySelector('tbody');
  const tableRow = document.createElement('tr');
  const tableTitle = document.createElement('td');
  const tableAuthor = document.createElement('td');
  const tablePages = document.createElement('td');
  const tableRead = document.createElement('td');
  const checkBox = document.createElement('input');
  const deleteButton = document.createElement('button');

  tableRow.classList.add('book');
  tableRow.setAttribute('data-index', myLibrary.length);
  table.appendChild(tableRow);

  tableTitle.classList.add('title');
  tableTitle.textContent = myLibrary[myLibrary.length - 1].title;
  tableRow.appendChild(tableTitle);

  tableAuthor.classList.add('author');
  tableAuthor.textContent = myLibrary[myLibrary.length - 1].author;
  tableRow.appendChild(tableAuthor);

  tablePages.classList.add('pages');
  tablePages.textContent = myLibrary[myLibrary.length - 1].pages;
  tableRow.appendChild(tablePages);

  checkBox.type = 'checkbox';
  checkBox.name = 'read';
  checkBox.id = 'read';
  checkBox.checked = myLibrary[myLibrary.length - 1].read;
  tableRow.appendChild(tableRead);
  tableRead.appendChild(checkBox);

  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'x';
  tableRow.appendChild(deleteButton);

  deleteButton.addEventListener('click', (e) => {
    deleteBook(e);
  });
}

function deleteBook(e) {
  myLibrary.splice(
    e.target.parentNode.dataset.index - 1,
    e.target.parentNode.dataset.index,
  );
  e.target.parentNode.remove();
}


addBookButton.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
});


exitModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});


submitButton.addEventListener('click', () => {
  addBookToLibrary();
});