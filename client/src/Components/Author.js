import React from "react";

export default function Author({ author }) {
  const {id, name, books} = author
  return (
    <div className="author-details">
      <h3>{name}</h3>
      {books.map(book => {
        return (
          <p className="book-span">{book.title}</p>
        )
      })}
    </div>
  )
}