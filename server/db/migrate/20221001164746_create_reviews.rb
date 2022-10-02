class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :body
      t.string :name
      t.integer :book_id
      t.float :rating
      t.timestamps
  end
end
