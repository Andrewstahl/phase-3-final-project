
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Get Requests
  get "/books" do
    books = Book.all
    books.to_json
  end
  
  get "/books/:id" do
    book = Book.find(params[:id])
    book.to_json(include: {reviews: {only: [:body, :rating]} })
  end
  
  get "/reviews" do
    reviews = Review.all
    reviews.to_json
  end
  
  get "/reviews/:id" do
    review = Review.find(params[:id])
    review.to_json
  end
  
  get "/authors" do
    authors = Author.all
    authors.to_json(include: {books: {only: [:title, :image_url]} })
  end
  
  get "/authors/:id" do
    author = Author.find(params[:id])
    author.to_json(include: {books: {only: [:title, :image_url]} })
  end

  # Post Requests
  post '/books' do
    new_book = Book.create(
      title: params[:title],
      genres: params[:genres],
      author: Author.find_or_create_by(name: params[:author]),
      read_status: params[:read_status],
      finished_date: params[:genres],
      image_url: params[:image_url],
    )
    new_book.to_json
  end
  
  post '/reviews' do
    new_review = Review.create(
      body: params[:body],
      book_title: Book.find_or_create_by(title: params[:book_title]),
      rating: params[:rating]
    )
    new_book.to_json
  end
  
  post '/authors' do
    new_author = Author.create(name: params[:name])
    new_author.to_json
  end
  
  # Patch Requests
  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(
      title: params[:title],
      read_status: params[:read_status],
      finished_date: params[:finished_date],
      image_url: params[:image_url], 
      genres: params[:genres]
    )
    book.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      body: params[:body]
    )
    review.to_json
  end

  patch '/authors/:id' do
    author = Author.find(params[:id])
    author.update(
      name: params[:name]
    )
    author.to_json
  end

  # Delete
  delete '/books/:id' do
    book = Book.find(params[:id])
    book.destroy
    book.to_json
  end
  
  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end
  
  delete '/authors/:id' do
    author = Author.find(params[:id])
    author.destroy
    author.to_json
  end

end
