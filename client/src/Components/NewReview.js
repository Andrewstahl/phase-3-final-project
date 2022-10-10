import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function NewReview({ onSubmit }) {
  const params = useParams();
  const [rating, setRating] = useState(0.0)
  const [textarea, setTextarea] = useState("")

  function handleChange(e) {
    const name = e.target.name;
    // The rating comes over as a string
    if (name === "rating") {
      setRating(parseFloat(e.target.value))
    }
    else if (name === "body") {
      setTextarea(e.target.value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      book_id: parseInt(params.id),
      body: textarea,
      rating: rating
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="rating">Review Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          step="0.5"
          min="0"
          max="5"
          value={rating}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="body">Review Body</label>
        <textarea id="body" name="body" value={textarea} rows="5" onChange={(e) => handleChange(e)}/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )

}