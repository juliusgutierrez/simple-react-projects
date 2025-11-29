import React, { useContext, useEffect } from "react";
import { BookContext } from "../BookContext";
import { useLocation } from "react-router-dom";

const Books = () => {
  const query = new URLSearchParams(useLocation().search);
  const books = useContext(BookContext);

  const search = query.get("search") || "";
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    console.log(search);
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
