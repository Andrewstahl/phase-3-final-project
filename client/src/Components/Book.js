import React, { useState } from "react";

export default function Book({ book }) {
  const {id, title, author, read_status, finished_date, image_url, genres} = book;
  
  return (
    <div>
      <h3>{title}</h3>
      <h4>{author.name}</h4>
      <img alt={`${title} book cover`} src={image_url}></img>
      <p>{read_status}</p>
      <p>{finished_date}</p>
      {genres.map(genre => {
        return (
          <span className="genre-span">{genre}</span>
        )
      })}
    </div>
  )
}