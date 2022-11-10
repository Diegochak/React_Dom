import React from "react";
import Book from "./Book";
const ShelfBook = (props) => {
  const filteredBooks = props.books.filter(
    (bookItem) => bookItem.type === props.type
  );
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {filteredBooks.map((bookItem) => {
          return (
            <Book
              id={bookItem.id}
              key={bookItem.id}
              title={bookItem.title}
              author={bookItem.author}
              imageurl={bookItem.imageurl}
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
