import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";
import AddEditReview from "./AddEditReview";
import AddEditBook from "./AddEditBook";

export default function BooksDetails() {
  const [book, setBook] = useState()
  const [showNewReview, setShowNewReview] = useState(false)
  const [showEditBook, setShowEditBook] = useState(false)
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

  function handleEditReview(editedReview) {
    console.log("Book Details - I've Been Edited", editedReview)
  }
  
  function handleDeleteReview(deletedReview) {
    console.log("Book Details - I've Been Deleted", deletedReview.id)
  }

  if (book == null) {
    return <h3>Loading Book Details...</h3>
  } else if (book === "Not Found") {
    return <h3>Book data not found. Try searching for a different book or add a new one.</h3>
  }
  
  const bookElement = <Book key={book.id} book={book}/>
  const reviewElements = book.reviews.map(review => {
    const reviewId = review.id;
    return (
      <div className="review-on-book-details">
        <h4>Rating: {review.rating}</h4>
        <p>{review.body}</p>
        <div className="card-action-buttons">
          <button 
            className="card-action-button"
            onClick={() => handleEditReview(reviewId)}
            >
            Edit
          </button>
          <button 
            className="card-action-button"
            onClick={() => handleDeleteReview(review)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  })

  function AddReview() {
    setShowNewReview(!showNewReview)
    setShowEditBook(false)
  }

  function EditBook() {
    setShowNewReview(false)
    setShowEditBook(!showEditBook)
  }

  return (
    <>
      {showNewReview ?
        <AddEditReview />
        :
        null
      }
      {showEditBook ?
        <AddEditBook currentBook={book} />
        :
        null
      }
      <div className="add-new-div">
        <button className="add-new-button" onClick={() => AddReview()}>Add New Review</button>
        <button className="add-new-button" onClick={() => EditBook()}>Edit Book Details</button>
        <button className="add-new-button" onClick={() => console.log("Book Details - Delete Book")}>Delete Book</button>
      </div>
      <div className="book-list-elements-div">
        {bookElement}
        {reviewElements}
      </div>
    </>
  )
}