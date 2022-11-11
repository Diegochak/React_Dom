import "./App.css";
import { useState, useEffect } from "react";
import Book from "./components/Book";
import ShelfBook from "./components/ShelfBook";
import {getAll} from "./BooksAPI.js"

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => {
      console.log(books)
      setBooks(books);
    });
  }, []);

  const [showSearchPage, setShowSearchpage] = useState(false);

  function handleselect(id, newType) {
    const bookIndex = books.findIndex((book) => id === book.id);
    if (bookIndex === -1) {
      return;
    }
    const bookFound = books[bookIndex];
    console.log("funcaosafada", id,newType)
    bookFound.shelf = newType;
    setBooks([...books]);
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <ShelfBook
                  type="currentlyReading"
                  books={books}
                  handleselect={handleselect}
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <ShelfBook
                  type="wantToRead"
                  books={books}
                  handleselect={handleselect}
                />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <ShelfBook
                  type="read"
                  books={books}
                  handleselect={handleselect}
                />
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
