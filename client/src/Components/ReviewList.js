import React, { useEffect, useState } from "react";
import AddEditReview from "./AddEditReview";
import Review from "./Review";

export default function ReviewList() {
  const [reviews, setReviews] = useState([])
  const [currentReview, setCurrentReview] = useState()
  const [showEditReview, setShowEditReview] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then(r => r.json())
      .then(data => setReviews(data))
  }, [])

  function handleEditClick(review) {
    setCurrentReview(review)
    setShowEditReview(!showEditReview)
  }
  
  function handleEditSubmit(editedReview) {
    const updatedReviews = reviews.map(review => {
      if (review.id === editedReview.id) {
        return editedReview
      } else {
        return review
      }
    })
    setReviews(updatedReviews)
    setShowEditReview(false)
  }
  
  function handleDelete(deletedReview) {
    fetch(`http://localhost:9292/reviews/${deletedReview.id}`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => {
      const updatedReviews = reviews.filter(review => review.id != deletedReview.id)
      setReviews(updatedReviews)
    })
  }

  const reviewElements = reviews.map(review => {
    return (
      <div>
        <Review 
          key={review.id} 
          review={review} 
          book={review.book} 
          onEdit={handleEditClick} 
          onDelete={handleDelete}
        />
      </div>
    )
  })
  
  return (
    <>
      {showEditReview 
        ? <AddEditReview 
            currentReview={currentReview}
            currentBook={currentReview.book}
            fetchMethod={"PATCH"} 
            onSubmit={handleEditSubmit}
            onCancel={() => setShowEditReview(!showEditReview)} 
          />
        : null
      }
      <div>
        {reviewElements}
      </div>
    </>
  )
}