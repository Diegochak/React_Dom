import React from "react";
import Book from "./Book";
const ShelfBook = (props) => {
  const filteredBooks = props.books.filter(
    (bookItem) =>{   
      return props.type == bookItem.shelf });
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {filteredBooks.map((bookItem) => {
          return (
            <Book
              key={bookItem.id}
              title={bookItem.title}
              author={bookItem.authors[0]}
              imageurl={bookItem.imageLinks.thumbnail}
              handleselect={(eventinho) =>
                props.handleselect(bookItem.id, eventinho.target.value)
              }
            />
          );
        })}
      </ol>
    </div>
  );
};
export default ShelfBook;
