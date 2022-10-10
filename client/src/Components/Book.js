import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButtons from "./ActionButtons";

export default function Book({ book, author }) {
  const {id, title, read_status, finished_date, image_url, genres} = book;
  const navigate = useNavigate();

  function handleShowBookDetails() {
    navigate(`/books/${id}`)
  }

  return (
    <div className="book-card">
      <img 
        alt={`${title} book cover`} 
        src={image_url} 
        className="book-card-image" 
        onClick={handleShowBookDetails}
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
    </div>
  )
}