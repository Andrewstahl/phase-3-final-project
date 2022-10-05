import React, { useEffect, useState } from "react";
import Book from "./Book";
import NewBook from "./NewBook";

export default function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then(r => r.json())
      .then(data => setBooks(data))
  }, [])

  const bookElements = books.map(book => {
    return (
      <div>
        <Book key={book.id} book={book} author={book.author}/>
      </div>
    )
  })
  
  return (
    <>
      {/* <NewBook /> */}
      <div className="add-new-div">
        <button className="add-new-button">Add New Book</button>
      </div>
      <div className="book-list-elements-div">
        {bookElements}
      </div>
    </>
  )
}