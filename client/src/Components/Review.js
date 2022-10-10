import React from "react";

export default function Review({ review, book, onEdit, onDelete }) {
  const {id, body, rating} = review

  function handleEdit() {
    console.log("Review.js I'm being edited", id)
    
  }
  
  function handleDelete() {
    console.log("Review.js I'm being deleted", id)
    // fetch(`http://localhost:9292/reviews/${id}`, {
    //   method: "DELETE", 
    //   headers: {
    //     "CONTENT-TYPE": "application/json"
    //   },
    //   body: JSON.stringify({})
    // })
    //   .then(r => r.json())
    //   .then(data => onDelete(data))
  }

  return (
    <div className="review-on-book-details">
      {book != null 
        ? <h4 className="review-book-title">{book.title}</h4>
        : null
      }
      <span className="review-rating">Rating: {rating}</span>
      <p>{body}</p>
      <div className="card-action-buttons">
        <button className="card-action-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="card-action-button" onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>

  )
}