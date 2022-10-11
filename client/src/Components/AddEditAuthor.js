import React, { useState, useEffect } from "react";

export default function AddEditAuthor({ currentAuthor, fetchMethod, onSubmit, onCancel }) {
  const [authorData, setAuthorData] = useState(() => {
    if (currentAuthor !== undefined) {
      return {name: currentAuthor.name}
    } else {
      return {name: ""}
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setAuthorData({
      ...authorData,
      [name]: value
    })
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let fetchUrl = `http://localhost:9292/authors/${currentAuthor.id}`

    fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        "CONTENT-TYPE": "application/json"
      },
      body: JSON.stringify(authorData)
    })
    .then(r => r.json())
    .then(data => onSubmit(data))
  }
  
  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={authorData.name}
          onChange={(e) => handleChange(e)}
        />
        <div className="form-action-buttons">
          <input type="submit" value="Submit" />
          <button className="cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )

}