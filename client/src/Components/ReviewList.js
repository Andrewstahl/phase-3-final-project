import React, { useEffect, useState } from "react";
import Review from "./Review";

export default function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then(r => r.json())
      .then(data => setReviews(data))
  }, [])

  const reviewElements = reviews.map(review => {
    return (
      <div>
        <Review key={review.id} review={review}/>
      </div>
    )
  })
  
  return (
    <div>
      {reviewElements}
    </div>
  )
}