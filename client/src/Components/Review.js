import React from "react";

export default function Review({ review }) {
  const {id, body, rating, book} = review

  return (
    <div className="review">
      <h4>{book.title}</h4>
      <span>Rating: {rating}</span>
      <p>{body}</p>
    </div>
  )
}