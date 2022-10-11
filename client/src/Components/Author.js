import React from "react";

export default function Author({ author, onEdit, onDelete }) {
  const {name, books} = author
  return (
    <div className="author-details">
      <h3>{name}</h3>
      {books.map(book => {
        return (
          <p className="book-span">{book.title}</p>
        )
      })}
      <div className="card-action-buttons">
        <button className="card-action-button" onClick={() => onEdit(author)}>
          Edit
        </button>
        <button className="card-action-button" onClick={() => onDelete(author)}>
          Delete
        </button>
      </div>
    </div>
  )
}