import  '../../src/App.css';
import  '../../src/index.css';
import React, { useEffect, useState } from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';

/**
 * App Hierarchy
 * 
 * App
 * ├─── Header
 * ├─── NavBar
 * ├─── Books
 *      ├─── Book
 *      ├─── Book
 *      └─── Book
 * ├─── Reviews
 *      ├─── Review
 *      ├─── Review
 *      └─── Review
 * └─── Authors
 *      ├─── Author
 *      ├─── Author
 *      └─── Author
 * 
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
