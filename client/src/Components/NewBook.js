import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function NewReview({ onSubmit }) {
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
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        
      </form>
    </div>
  )

}