import React, { useEffect, useState } from "react";

export default function AddEditReview({ currentReview, currentBook, fetchMethod, onSubmit, onCancel }) {
  const [rating, setRating] = useState(() => {
    return currentReview !== undefined ? currentReview.rating : 0.0
  })
  const [textarea, setTextarea] = useState(() => {
    return currentReview !== undefined ? currentReview.body : ""
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleChange(e) {
    const name = e.target.name;
    if (name === "rating") {
      setRating(parseFloat(e.target.value))
    }
    else if (name === "body") {
      setTextarea(e.target.value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let fetchUrl;
    if (currentReview !== undefined) {
      fetchUrl = `http://localhost:9292/reviews/${currentReview.id}`
    } else {
      fetchUrl = `http://localhost:9292/reviews`
    }
    
    fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        "CONTENT-TYPE": "application/json"
      },
      body: JSON.stringify({
        book_title: currentBook.title || currentReview.book.title,
        body: textarea,
        rating: rating
      })
    })
    .then(r => r.json())
    .then(data => onSubmit(data))
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="rating">Review Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          step="0.1"
          min="0"
          max="5"
          value={rating}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="body">Review Body</label>
        <textarea id="body" name="body" value={textarea} rows="20" onChange={(e) => handleChange(e)} required/>
        <div className="form-action-buttons">
          <input type="submit" value="Submit" />
          <button className="cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}