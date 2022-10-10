import React, { useEffect, useState } from "react";
import AddEditReview from "./AddEditReview";
import Review from "./Review";

export default function Reviews() {
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
    // console.log("ReviewList.js I've Been Edited", editedReview.id)
    const updatedReviews = reviews.map(review => {
      if (review.id == editedReview.id) {
        return editedReview
      } else {
        return review
      }
    })
    setReviews(updatedReviews)
  }
  
  function handleDelete(deletedReview) {
    // console.log("ReviewList.js I've Been Deleted", deletedReview.id)
    const updatedReviews = reviews.filter(review => review.id != deletedReview.id)
    setReviews(updatedReviews)
  }

  const reviewElements = reviews.map(review => {
    return (
      <div>
        <Review key={review.id} review={review} book={review.book} onEdit={() => handleEditClick(review)} onDelete={handleDelete}/>
      </div>
    )
  })
  
  return (
    <>
      {showEditReview ?
        <AddEditReview currentReview={currentReview} fetchMethod={"PATCH"} />
        :
        null
      }
      {/* <div className="add-new-div">
        <button className="add-new-button" onClick={() => setShowEditReview(!showEditReview)}>Add New Review</button>
      </div> */}
      <div>
        {reviewElements}
      </div>
    </>
  )
}