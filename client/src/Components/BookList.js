import React, { useEffect, useState } from "react";
import Book from "./Book";
import AddEditBook from "./AddEditBook";
import { redirect } from "react-router-dom";

export default function BookList() {
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

  function handleAddBook(addedBook) {
    setBooks([...books, addedBook])
    setShowAddBook(false)
  }
  
  return (
    <>
      {showAddBook ?
        <AddEditBook 
          currentBook={undefined} 
          fetchMethod={"POST"} 
          onSubmit={handleAddBook} 
          onCancel={() => setShowAddBook(!showAddBook)} 
        />
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