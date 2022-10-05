import React from "react";
import ActionButtons from './ActionButtons'

export default function Review({ review }) {
  const {id, body, rating, book} = review

  return (
    <div className="review-on-book-details">
      <h4>{book.title}</h4>
      <span>Rating: {rating}</span>
      <p>{body}</p>
      <ActionButtons />
    </div>

  )
}