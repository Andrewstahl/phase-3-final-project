import  '../../src/App.css';
import  '../../src/index.css';
import React, { useEffect, useState } from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import BookList from './BookList';
import BookDetails from './BookDetails';
import AuthorList from './AuthorList';
import ReviewList from './ReviewList';

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
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/books/" element={<BookList />} />
        <Route exact path="/books/:id" element={<BookDetails />} />
        <Route exact path="/reviews/" element={<ReviewList />} />
        <Route exact path="/authors/" element={<AuthorList />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
