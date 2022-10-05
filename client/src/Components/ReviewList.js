import React, { useEffect, useState } from "react";
import Review from "./Review";

export default function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then(r => r.json())
      .then(data => setReviews(data))
  }, [])

  function handleEdit(review) {

  }

  function handleDelete(deletedReview) {
    const updatedReviews = reviews.filter(review => review.id !== deletedReview.id)
    setReviews(updatedReviews)
  }

  const reviewElements = reviews.map(review => {
    return (
      <div>
        <Review key={review.id} review={review} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>
    )
  })
  
  return (
    <>
      <div className="add-new-div">
          <button className="add-new-button">Add New Review</button>
        </div>
      <div>
        {reviewElements}
      </div>
    </>
  )
}