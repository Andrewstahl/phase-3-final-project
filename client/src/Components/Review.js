import React from "react";

export default function Review({ review }) {
  const {id, body, rating, book} = review

  return (
    <div>
      <h4>{book.title}</h4>
      <span>{rating}</span>
      <p>{body}</p>
    </div>
  )
}