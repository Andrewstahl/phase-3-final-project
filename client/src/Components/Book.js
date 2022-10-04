import React, { useState } from "react";

export default function Book({ book }) {
  // const bookData = book
  const {id, title, read_status, finished_date, image_url, genres} = book;
  
  return (
    <div>
      <h3>{book.title}</h3>
      <h4>{title}</h4>
      <img alt={`${title} book cover`} src={image_url}></img>
      <p>{read_status}</p>
      <p>{finished_date}</p>
      <p>{genres}</p>
    </div>
  )
}