import React, { useEffect, useState } from "react";
import { useParams, redirect } from "react-router-dom";
import Book from "./Book";
import Review from "./Review";
import AddEditReview from "./AddEditReview";
import AddEditBook from "./AddEditBook";

export default function BooksDetails( onDelete ) {
  const [book, setBook] = useState()
  const [bookReviews, setBookReviews] = useState()
  const [currentReview, SetCurrentReview] = useState();
  const [fetchMethod, setFetchMethod] = useState();
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
    .then(data => {
      setBook(data)
      setBookReviews(data.reviews)
    })
  }, [params.id])

  function handleEditReviewClick(editedReview) {
    SetCurrentReview(editedReview)
    setFetchMethod("PATCH")
    ToggleEditReview()
  }
  
  function handleEditReviewSubmit(editedReview) {
    if (fetchMethod === "PATCH") {
      const updatedReviews = bookReviews.map(review => {
        if (review.id == editedReview.id) {
          return editedReview
        } else {
          return review
        }
      })
      setBookReviews(updatedReviews)
    } else {
      setBookReviews([...bookReviews, editedReview])
    }
    setShowNewReview(false)
  }
  
  function handleDeleteReview(deletedReview) {
    fetch(`http://localhost:9292/reviews/${deletedReview.id}`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => null)

    const updatedReviews = bookReviews.filter(review => review.id !== deletedReview.id)
    setBookReviews(updatedReviews)
  }
  
  function handleEditBookClick(editedBook) {
    setShowEditBook(false)
    setShowNewReview(false)
    setBook(editedBook)
  } 

  function handleDeleteBook() {
    fetch(`http://localhost:9292/books/${params.id}`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => null)

    redirect("/books")
  }

  if (book == null) {
    return <h3>Loading Book Details...</h3>
  } else if (book === "Not Found") {
    return <h3>Book data not found. Try searching for a different book or add a new one.</h3>
  }
  
  function ToggleEditReview(reviewOption) {
    setShowNewReview(!showNewReview)
    setShowEditBook(false)
    if (reviewOption === "new") {
      SetCurrentReview()
      setFetchMethod("POST")
    }
  }

  function ToggleEditBook() {
    setShowNewReview(false)
    setShowEditBook(!showEditBook)
  }

  const bookElement = <Book key={book.id} book={book} author={book.author}/>
  
  const reviewElements = bookReviews.map(review => {
      return <Review review={review} onEdit={() => handleEditReviewClick(review)} onDelete={() => handleDeleteReview(review)}/>
    }
  )
  
  return (
    <>
      {showNewReview ?
        <AddEditReview 
          currentReview={currentReview}
          currentBook={book}
          fetchMethod={fetchMethod} 
          onSubmit={handleEditReviewSubmit}
          onCancel={() => setShowNewReview(false)}
        />
        :
        null
      }
      {showEditBook ?
        <AddEditBook 
          currentBook={book} 
          fetchMethod={"PATCH"} 
          onSubmit={handleEditBookClick} 
          onCancel={() => setShowEditBook(false)}
        />
        :
        null
      }
      <div className="add-new-div">
        <button className="add-new-button" onClick={() => ToggleEditReview("new")}>Add New Review</button>
        <button className="add-new-button" onClick={() => ToggleEditBook()}>Edit Book Details</button>
        <button className="add-new-button" onClick={() => handleDeleteBook()}>Delete Book</button>
      </div>
      <div className="book-list-elements-div">
        {bookElement}
        {reviewElements}
      </div>
    </>
  )
}