import React from "react";

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${props.imageurl}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            id={`select-${props.id}`}
            onChange={(e) => props.handleselect(e)}
          >
            <option value="">
              Move to...
            </option>
            <option value="1">Currently Reading</option>
            <option value="2">Want to Read</option>
            <option value="3">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.author}</div>
    </div>
  );
};
export default Book;
