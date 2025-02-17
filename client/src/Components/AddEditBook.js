import React, { useState, useEffect } from "react";

export default function AddEditBook({ currentBook, fetchMethod, onSubmit, onCancel }) {
  const [bookData, setBookData] = useState(() => {
    if (currentBook !== undefined)  {
      return ({
        title: currentBook.title,
        author: currentBook.author.name,
        read_status: currentBook.read_status.toLowerCase(),
        finished_date: currentBook.finished_date,
        image_url: currentBook.image_url,
        genres: currentBook.genres.join(",")
      })
    } else {
      return ({
        title: "",
        author: "",
        read_status: "Unread",
        finished_date: null,
        image_url: "",
        genres: ""
      })
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setBookData({
      ...bookData,
      [name]: value
    })
  }
  
  function handleSelect(e) {
    e.preventDefault();
    
    const selectedOption = e.target.options[e.target.selectedIndex].text
    const finishedDate = selectedOption === "unread" ? null : bookData.finished_date
    
    setBookData({
      ...bookData,
      read_status: selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1),
      finished_date: finishedDate
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const genresSplit = bookData.genres.replace(", ", ",").split(",")
    
    let fetchUrl;
    
    if (currentBook !== undefined) {
      fetchUrl = `http://localhost:9292/books/${currentBook.id}`
    } else {
      fetchUrl = `http://localhost:9292/books`
    }

    fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        "CONTENT-TYPE": "application/json"
      },
      body: JSON.stringify({...bookData, genres: genresSplit})
    })
    .then(r => r.json())
    .then(data => onSubmit(data))
    
  }
  
  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={bookData.title}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={bookData.author}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="read_status">Read Status</label>
        <select 
          name="read_status" 
          id="read_status" 
          value={bookData.read_status.toLowerCase()} 
          onChange={(e) => handleSelect(e)}
          required
        >
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
        {bookData.read_status.toLowerCase() === "read"
          ? (<>
              <label htmlFor="finished_date">Finished Date</label>
              <input
                type="date"
                name="finished_date"
                id="finished_date"
                value={bookData.finished_date}
                max={new Date().toJSON().slice(0, 10)}
                onChange={(e) => handleChange(e)}
              />
            </>)
          : null
        }
        <label htmlFor="image_url">Image URL</label>
        <input
          type="text"
          name="image_url"
          id="image_url"
          value={bookData.image_url}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="genres">Genres (separate by commas)</label>
        <input
          type="text"
          name="genres"
          id="genres"
          value={bookData.genres}
          onChange={(e) => handleChange(e)}
          required
        />
        <div className="form-action-buttons">
          <input type="submit" value="Submit" />
          <button className="cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}