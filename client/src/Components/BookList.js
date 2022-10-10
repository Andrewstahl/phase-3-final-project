import React, { useEffect, useState } from "react";
import Book from "./Book";
import AddEditBook from "./AddEditBook";

export default function Books() {
  const [books, setBooks] = useState([])
  const [showAddBook, setShowAddBook] = useState(false)

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
      {showAddBook ?
        <AddEditBook currentBook={undefined} />
        :
        null
      }
      <div className="add-new-div">
        <button className="add-new-button" onClick={() => setShowAddBook(!showAddBook)}>Add New Book</button>
      </div>
      <div className="book-list-elements-div">
        {bookElements}
      </div>
    </>
  )
}