import React from "react";

export default function ActionButtons(onEdit, onDelete) {
  return (
    <div className="card-action-buttons">
      <button 
        className="card-action-button"
        onClick={() => onEdit}
        >
        Edit
      </button>
      <button 
        className="card-action-button"
        onClick={() => onDelete}
      >
        Delete
      </button>
    </div>
  )
}