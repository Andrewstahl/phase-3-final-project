import React from "react";
import ActionButtons from './ActionButtons'

export default function Review({ review, onEdit, onDelete }) {
  const {id, body, rating, book} = review

  function handleEdit() {
    
  }
  
  function handleDelete() {
    console.log("I'm being deleted", id)
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
      <h4>{book.title}</h4>
      <span>Rating: {rating}</span>
      <p>{body}</p>
      <ActionButtons onEdit={handleEdit} onDelete={handleDelete}/>
    </div>

  )
}