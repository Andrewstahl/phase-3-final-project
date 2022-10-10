import React from "react";

export default function Review({ review, book, onEdit, onDelete }) {
  const {id, body, rating} = review

  return (
    <div className="review-on-book-details">
      {book != null 
        ? <h4 className="review-book-title">{book.title}</h4>
        : null
      }
      <span className="review-rating">Rating: {rating}</span>
      <p>{body}</p>
      <div className="card-action-buttons">
        <button className="card-action-button" onClick={() => onEdit(review)}>
          Edit
        </button>
        <button className="card-action-button" onClick={() => onDelete(review)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}