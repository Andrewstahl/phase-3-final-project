import React, { useEffect, useState } from "react";
import Book from "./Book";

export default function BookList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then(r => r.json())
      .then(data => console.log(data))
  }, [])

  const bookElements = books.map(book => {
    return (
      <div className="book-element">
        <Book key={book.id} book={book} />
      </div>
    )
  })
  
  return (
    <div>
      {bookElements}
    </div>
  )
}