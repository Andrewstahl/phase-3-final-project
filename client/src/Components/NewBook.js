import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function NewBook({ onSubmit }) {
  const params = useParams();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    read_status: "Unread",
    finished_date: null,
    imageUrl: "",
    genres: ""
  })
  
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setNewBook({
      ...newBook,
      [name]: value
    })
    
  }

  function handleSelect(e) {
    e.preventDefault();
    setNewBook({
      ...newBook,
      read_status: e.target.options[e.target.selectedIndex].text
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newBook)
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={newBook.title}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={newBook.author}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="read-status">Read Status</label>
        <select name="read-status" id="read-status" onChange={(e) => handleSelect(e)}>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
        {newBook.read_status === "Read"
          ? (
            <>
              <label htmlFor="finished_date">Finished Date</label>
              <input
                type="date"
                name="finished_date"
                id="finished_date"
                max={new Date().toJSON().slice(0, 10)}
                onChange={(e) => handleChange(e)}
              />
            </>
          )
          : null
        }
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={newBook.imageUrl}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="genres">Genres (separate by commas)</label>
        <input
          type="text"
          name="genres"
          id="genres"
          value={newBook.genres}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )

}