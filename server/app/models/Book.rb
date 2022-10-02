class Book < ActiveRecord::Base
  belongs_to :author
  has_many :reviews

  serialize :genres, Array
end