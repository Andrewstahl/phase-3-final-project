
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Get Requests
  get "/books" do
    books = Book.all
    books.to_json(
      include: {
        author: {
          only: [
            :name
          ]
        }
      }
    )
  end
  
  get "/books/:id" do
    book = Book.find(params[:id])
    book.to_json(
      include: [
        reviews: {only: [:id, :body, :rating]},
        author: {only: [:name]}
      ]
    )
  end
  
  get "/reviews" do
    reviews = Review.all
    reviews.to_json(
      include: {
        book: {
          only: [
            :id, :title, :image_url
          ]
        }
      }
    )
  end
  
  get "/reviews/:id" do
    review = Review.find(params[:id])
    review.to_json(
      include: {
        book: {
          only: [
            :title, :id
          ]
        }
      }
    )
  end
  
  get "/authors" do
    authors = Author.all
    authors.to_json(
      include: {
        books: {
          only: [
            :title, :image_url
          ]
        }
      }
    )
  end
  
  get "/authors/:id" do
    author = Author.find(params[:id])
    author.to_json(
      include: {
        books: {
          only: [
            :title, :image_url
          ]
        }
      }
    )
  end

  # Post Requests
  post '/books' do
    new_book = Book.create(
      title: params[:title],
      genres: [],
      author: Author.find_or_create_by(name: params[:author]),
      read_status: params[:read_status],
      finished_date: params[:finished_date],
      image_url: params[:image_url],
    )
    new_book.update(
      genres: params[:genres] || []
    )
    new_book.to_json
  end
  
  post '/reviews' do
    new_review = Review.create(
      body: params[:body],
      book: Book.find_or_create_by(title: params[:book_title]),
      rating: params[:rating]
    )
    new_review.to_json
  end
  
  post '/authors' do
    new_author = Author.create(name: params[:name])
    new_author.to_json
  end
  
  # Patch Requests
  patch '/books/:id' do
    book = Book.find(params[:id])
    book.update(
      title: params[:title] || book.title,
      read_status: params[:read_status] || book.read_status,
      finished_date: params[:finished_date] || book.finished_date,
      image_url: params[:image_url] || book.image_url, 
      genres: params[:genres] || book.genres,
      author: Author.find_or_create_by(name: params[:author])
    )
    book.to_json
  end
  
  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      book: Book.find_or_create_by(title: params[:book_title]),
      body: params[:body],
      rating: params[:rating]
    )
    review.to_json(
      include: {
        book: {
          only: [
            :title
          ]
        }
      }
    )
  end

  patch '/authors/:id' do
    author = Author.find(params[:id])
    author.update(
      name: params[:name]
    )
    author.to_json(
      include: {
        books: {
          only: [
            :title, :image_url
          ]
        }
      }
    )
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
