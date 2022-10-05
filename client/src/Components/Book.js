import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Book({ book, author, onUpdate, onDelete }) {
  const {id, title, read_status, finished_date, image_url, genres} = book;
  // const [bookDetails, setBookDetails] = useState()
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/books/${id}`)
  }

  return (
    <div className="book-card">
      <img 
        alt={`${title} book cover`} 
        src={image_url} 
        className="book-card-image" 
        onClick={handleClick}
      >
      </img>
      
      <div className="book-card-details">
        <h3 className="book-card-title">{title}</h3>
        {author != null 
          ? 
            <h4 className="book-card-author">{author.name}</h4>
          :
            null
        }
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
      <div className="card-action-buttons">
        <button className="card-action-button">Reviews</button>
        <button className="card-action-button">Edit</button>
        <button className="card-action-button">Delete</button>
      </div>
    </div>
  )
}