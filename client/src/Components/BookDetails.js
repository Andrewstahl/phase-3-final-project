import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";
import ActionButtons from "./ActionButtons";

export default function BooksDetails() {
  const [book, setBook] = useState()
  const [editedBook, setEditedBook] = useState()
  const [showNewReview, setShowNewReview] = useState(false)
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

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setEditedBook({
      ...editedBook,
      [name]: value
    })
  }

  // setEditedBook(book)

  function handleEditReview(editedReview) {
    console.log("Book Details - I've Been Edited", editedReview.id)
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
    return (
      <div className="review-on-book-details">
        <h4>Rating: {review.rating}</h4>
        <p>{review.body}</p>
        {/* <ActionButtons onEdit={() => console.log("Details Edited")} onDelete={handleDeleteReview(review)}/> */}
        <div className="card-action-buttons">
          <button 
            className="card-action-button"
            onClick={() => handleEditReview(review)}
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

  return (
    <>
      {showNewReview ?
        <div>
          <form>
            <input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={(e) => handleChange(e)}
              placeholder={book.title}
            >
            </input>
          </form>
        </div>
        :
        null
      }
      <div className="add-new-div">
        <button className="add-new-button" onClick={() => setShowNewReview(!showNewReview)}>Add New Review</button>
      </div>
      <div className="book-list-elements-div">
        {bookElement}
        {reviewElements}
      </div>
    </>
  )
}