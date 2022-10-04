import React, { useEffect, useState } from "react";
import Author from './Author'

export default function Authors() {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/authors")
      .then(r => r.json())
      .then(data => setAuthors(data))
  }, [])

  const authorElements = authors.map(author => {
    return (
      <div>
        <Author key={author.id} author={author}/>
      </div>
    )
  })
  
  return (
    <div>
      {authorElements}
    </div>
  )
}