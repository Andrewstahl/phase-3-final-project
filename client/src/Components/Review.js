import React from "react";
import { useNavigate } from "react-router-dom";

export default function Review({ review, book, onEdit, onDelete }) {
  const {body, rating} = review
  const navigate = useNavigate();

  return (
    <div className="review-on-book-details">
      {book != null 
        ? <h4 className="review-book-title" onClick={() => navigate(`/books/${book.id}`)}>{book.title}</h4>
        : null
      }
      <span className="review-rating">Rating: {rating}</span>
      <p>{body}</p>
      <div className="card-action-buttons">
        <button className="card-action-button" onClick={() => onEdit(review)}>
          Edit
        </button>
        <button className="card-action-button" onClick={() => onDelete(review)}>
          Delete
        </button>
      </div>
    </div>
  )
}