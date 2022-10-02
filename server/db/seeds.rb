puts "🌱 Seeding spices..."

# t.string :title
# t.string :genre
# t.integer :author_id
# t.string :read_status
# t.date :finished_date
# t.string :image_url

# Seed your database here
rdawkins = Author.create("Richard Dawkins")
Book.create(
  title: "The Selfish Gene"
  genre: "Science"  
)

# t.string :body
# t.string :name
# t.integer :book_id
# t.float :rating

puts "✅ Done seeding!"
