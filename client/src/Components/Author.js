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
      {/* <div className="card-action-buttons">
        <button className="card-action-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="card-action-button" onClick={handleDelete}
        >
          Delete
        </button>
      </div> */}
    </div>
  )
}