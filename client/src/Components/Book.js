import React, { useState } from "react";

export default function Book({ book, onUpdate, onDelete }) {
  const {id, title, author, read_status, finished_date, image_url, genres} = book;
  const [bookDetails, setBookDetails] = useState()

  return (
    <div className="book-card">
      <img alt={`${title} book cover`} src={image_url} className="book-card-image"></img>
      
      <div className="book-card-details">
        <h3 className="book-card-title">{title}</h3>
        <h4 className="book-card-author">{author.name}</h4>
        <p>Read Status: {read_status}</p>
        <p>Finished Reading: {finished_date}</p>
        <div className="book-card-genres-div">
          {genres.map(genre => {
            return (
              <span className="book-card-genre">{genre}</span>
            )
          })}
        </div>
      </div>
      <div className="book-card-action-buttons">
        <button className="book-card-action-button">Reviews</button>
        <button className="book-card-action-button">Edit</button>
        <button className="book-card-action-button">Delete</button>
      </div>
    </div>
  )
}