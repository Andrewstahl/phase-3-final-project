import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";
import ActionButtons from "./ActionButtons";

export default function BooksDetails() {
  const [book, setBook] = useState()
  const params = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:9292/books/${params.id}`)
    .then(r => {
      if (r.ok) {
        return r.json()
      } else {
        setBook("Not Found")
        throw Error(`Request rejected with status ${r.status}`)
      }
    })
    .then(data => setBook(data))
  }, [params.id])

  if (book == null) {
    return <h3>Loading Book Details...</h3>
  } else if (book === "Not Found") {
    return <h3>Book data not found. Try searching for a different book or add a new one.</h3>
  }
  
  const bookElement = <Book key={book.id} book={book}/>
  const reviewElements = book.reviews.map(review => {
    return (
      <div className="review-on-book-details">
        <h4>Rating: {review.rating}</h4>
        <p>{review.body}</p>
        <ActionButtons />
      </div>
    )
  })

  return (
    <>
      <div className="add-new-div">
        <button className="add-new-button">Add New Review</button>
      </div>
      <div className="book-list-elements-div">
        {bookElement}
        {reviewElements}
      </div>
    </>
  )
}