import React from "react";

export default function Author({ author }) {
  const {id, name, books} = author
  // console.log(books)
  return (
    <div>
      <h3>{name}</h3>
      {books.map(book => {
        return (
          <span className="book-span">{book.title}</span>
        )
      })}
    </div>
  )
}