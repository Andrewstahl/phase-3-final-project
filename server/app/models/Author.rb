class Author < ActiveRecord::Base
  has_many :books
  has_many :reviews, through: :books

  def self.empty_books
    empty_books_array = []
    self.all.each do |author|
      if author.books.count == 0
        empty_books_array << author
      end
    end
    empty_books_array
  end

end