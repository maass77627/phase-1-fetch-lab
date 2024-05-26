function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then ((resp) => resp.json())
  .then ((jsonData) => renderBooks(jsonData))
  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function fifthBook(books) {
  return books.find((book) => book.)


}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//The 5th book in the series
//The 1031st character in the series
//The total number of pages of all the books