import React, { useEffect, useState } from "react";
import AddEditAuthor from "./AddEditAuthor";
import Author from './Author'

export default function AuthorList() {
  const [authors, setAuthors] = useState([])
  const [currentAuthor, setCurrentAuthor] = useState()
  const [showEditAuthor, setShowEditAuthor] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/authors")
      .then(r => r.json())
      .then(data => setAuthors(data))
  }, [])

  function handleEditClick(author) {
    setCurrentAuthor(author)
    setShowEditAuthor(!showEditAuthor)
  }
  
  function handleEditSubmit(editedAuthor) {
    const updatedAuthors = authors.map(author => {
      if (author.id === editedAuthor.id) {
        return editedAuthor
      } else {
        return author
      }
    })
    setAuthors(updatedAuthors)
    setShowEditAuthor(false)
  }
  
  function handleDelete(deletedAuthor) {
    fetch(`http://localhost:9292/authors/${deletedAuthor.id}`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => {
      const updatedAuthors = authors.filter(author => author.id !== deletedAuthor.id)
      setAuthors(updatedAuthors)
    })
  }

  function deleteEmptyAuthors() {
    fetch(`http://localhost:9292/authors/empty-books`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json"
      }
    })
    .then(r => r.json())
    .then(data => {
      const deletedAuthorIds = data.map(author => author.id)
      const updatedAuthors = authors.filter(author => !deletedAuthorIds.includes(author.id))
      setAuthors(updatedAuthors)
    })
  }
  
  const authorElements = authors.map(author => {
    return (
      <div>
        <Author 
          key={author.id} 
          author={author} 
          onEdit={handleEditClick} 
          onDelete={handleDelete}
        />
      </div>
    )
  })
  
  return (
    <>
      {showEditAuthor 
        ? <AddEditAuthor 
            currentAuthor={currentAuthor}
            fetchMethod={"PATCH"}
            onSubmit={handleEditSubmit}
            onCancel={() => setShowEditAuthor(!showEditAuthor)}
          />
        : null
      }
      <div className="add-edit-button-div">
        <button className="add-edit-button" onClick={deleteEmptyAuthors}>Delete Authors with No Books</button>
      </div>
      <div>
        {authorElements}
      </div>
    </>
  )
}