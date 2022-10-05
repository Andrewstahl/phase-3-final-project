import React, { useEffect, useState } from "react";
import Book from "./Book";

export default function BookList({ bookId }) {
  const [book, setBook] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/books/${bookId}`)
      .then(r => r.json())
      .then(data => setBook(data))
  }, [])

  const bookElement = <Book key={book.id} book={book}/>
  const reviewElements = book.

  return (
    <div className="book-list-elements-div">
      {bookElement}
    </div>
  )
}