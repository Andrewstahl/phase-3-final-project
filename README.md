# Stahl's Book Tracker

This is the repository of my Phase 3 final project for Flatiron School.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)*

## Goal

The goal of this project is to leverage my knowledge of Ruby, Rails, Sinatra, Active Record, JavaScript, React, client-side routing, server-manipulation, and APIs to create a single-page application.

## Getting Starting
Before you begin, you will need to install dependencies and run individual servers on the client-side and server-side modules. Once in the "client" repository, you will want to run `npm install` to install the client dependencies for this project and `npm run` to start the project. Separately in the "server" repository, run `bundle install` to install the server dependencies. Then, run `bundle exec rake db:migrate db:seed` to create the migrations and seed the database. Finally, run `bundle exec rake server` to start the server.

## Project Overview
This site provides sample data for book/review tracking. This leverages a homegrown API utilizing Ruby, ActiveRecord, and Sinatra with separate but connected databases for books, reviews, and authors.  Leveraging React, the client-side also uses different links that render data pertinent to what the user wants to see.

Check out this gif for a quick walkthrough of the final project (this might take about 10-15 seconds to load):
![](https://github.com/Andrewstahl/phase-3-final-project/blob/main/media/Flatiron%20Phase%203%20-%20Book%20Tracker%20Walkthrough.gif)

## Database Migration Structure
Here is a quick visual for the database structure.
![](https://github.com/Andrewstahl/phase-3-final-project/blob/main/media/Flatiron%20Phase%203%20DB%20Structure%20-%20Book%20Tracker.png)

### **Home**
The simple home page gives the user an overview of what they can expect to find when looking through the rest of the website. 

### **Books**
The "Books" page will show the user all books that are houses on the server. This renders everything in a column with each book showcasing it's book cover image and some basic data (title, author, read status, finished date, and genres). From here, there are two actions the user can take. There is a button at the top, "Add New Book", that opens up a form for the user to create a new book for the database. You can also click on the book cover image to navigate to a Book Details page (see below)

### **Book Details**
This is a page that the user can navigate to either by clicking on the book cover image on the "Books" page or by going to "/books/id" (with the book ID at the end of the URL). This page displays the book details at the top (the same details that show on the main "Books" page) and also shows all reviews for that book. This page has multiple actions you can take, including adding/editing/deleting reviews and editing/deleting the book.

### **Reviews**
The "Reviews" page will allow the user to see all reviews from the database. This page also gives them the option to edit/delete reviews.

### **Author**
The "Author" page shows you all authors from the database. This page will allow you to edit/delete authors and new ones.

## Outline of Responsibilities
Here's a quick outline of the responsibilities for this project:
- As the page loads, it will pull in the book, author, and reviews from the API
  - The **Book**, **Author**, and **Review** tabs will all include this data
- The API is built through the Ruby gems Sinatra and ActiveRecord and needs to handle full CRUD capabilities for the book, author, and review databases
- If the user clicks on any one of the pages, it should render a specific component and route to it so that each component has it's own URL
- On the **Book** page, the user should have the ability to see each book along with basic details and options for CRUD capabilities
- On the **Review** page, the user should have the ability to see each review along with basic details and options for edit/delete
- On the **Author** page, the user should have the ability to see each author along with basic details and options for edit/delete

## Additional Posts
- [YouTube walkthrough of the project](https://youtu.be/S_coqhNVLxM)
- [Medium blog post about React Router crash course](https://medium.com/@andrewstahl96/react-router-dom-crash-course-9e61f4bfaaec)