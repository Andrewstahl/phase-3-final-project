puts "🌱 Seeding spices..."

# t.string :title
# t.string :genre
# t.integer :author_id
# t.string :read_status
# t.date :finished_date
# t.string :image_url

# Seed your database here
author1 = Author.create(name: "Richard Dawkins")
book1 = Book.create(
  title: "The Selfish Gene",
  genres: ["Science", "Nonfiction", "Biology", "Philosophy"],
  author_id: author1.id,
  read_status: "Read",
  finished_date: Date.parse("Oct 06, 2018"),
  image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465422718i/30390901.jpg"
)
review1 = Review.create(
  body: "This book is an exhilarating read for anyone even remotely interested in biology, zoology, or the nature of humankind. While most non-professionals stop at Darwin's theories for evolutionary, Dawkins takes things a step further and shows us how our genes are passed down from generation to generation. This book is best read and appreciated with complete focus, as the material can sometimes go a bit over your head. If nothing else, this book arms you with the ability to question things deeply about our genetics and to look at the world through a different lens. The world is not as it seems, and Dawkin's feels almost likely a detective pointing out what was under our noses the whole time. Very great and insightful read!",
  book_id: book1.id,
  rating: 4.5
)

author2 = Author.create(name: "Chris Voss")
book2 = Book.create(
  title: "Never Split the Difference: Negotiating As If Your Life Depended On It",
  genres: ["Business", "Nonfiction", "Psychology"],
  author_id: author2.id,
  read_status: "Read",
  finished_date: Date.parse("Apr 30, 2020"),
  image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1458427910i/29555865.jpg"
)
Review.create(
  body: "Tales from an FBI negotiating veteran, who wouldn't want to see the world through his eyes? Chris Voss gives us a window in the high stakes world of international hostage negotiation and shows us just how applicable those tactics to success are to our daily lives. It still baffles me how every book or article I read on communication and human nature are all based on the simplest principles. And yet - it is the simplest principles that can make a world of difference in our interactions. Voss's effective, tried and true methods for negotiating, including labeling emotions, asking calibrated questions, and tactical listening show us how we can understand our counter parties and get to the best outcome. He states that “the most vital principle to keep in mind is never to look at your counterpart as an enemy.” The more we look at others as enemies, the less we're going to see them for who they are. No one really wants to understand a person they hate, but everyone wants to understand someone they see as a partner. See others as a partner, and you'll be well on your way to master any negotiation.",
  book_id: book2.id,
  rating: 4.8
)

author3 = Author.create(name: "Ernest Cline")
book3 = Book.create(
  title: "Ready Player One",
  genres: ["Science", "Fiction", "Future"],
  author_id: author3.id,
  read_status: "Read",
  finished_date: Date.parse("May 18, 2019"),
  image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1500930947i/9969571.jpg"
)
Review.create(
  body: "Ready Player One is an enchanting story about the fight for freedom. Wade Watts helps leads the charge against an evil corporation which seeks to take over something that the entire world has come to rely on as their last true safe haven. Entire friendships, relationships, and lives are spent logged into the ultra virtual reality system, the OASIS, which connects billions of people together by allowing them to live in a different, better world. Anything goes in the OASIS, and its creator, John Halliday, spent much of his life in isolation designing it. His last will and testament sparks the hunt of a lifetime, rewarding its winner a multi-billion dollar payout and, more importantly, control over the OASIS. It's a game unlike any other and its prize will ultimately determine life itself.",
  book_id: book3.id,
  rating: 4.7
)

# Same author as the first
book4 = Book.create(
  title: "Ready Player Two",
  genres: ["Science", "Fiction", "Future"],
  author_id: author3.id,
  read_status: "Read",
  finished_date: Date.parse("May 30, 2021"), 
  image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594220208i/26082916.jpg"
)

Review.create(
  body: "Back at it again, Ernest Cline brings a mixture of action, adventure, technology, and '80s throwbacks like no one else can!",
  book_id: book4.id,
  rating: 4.3
)
Review.create(
  body: "Great ride, thought the first one was better though",
  book_id: book4.id,
  rating: 3.9
)

author5 = Author.create(name: "James Paterson")
book5 = Book.create(
  title: "The President is Missing",
  genres: ["History", "Fiction", "Legal Drama"],
  author_id: author5.id,
  read_status: "Read",
  finished_date: Date.parse("Sep 5, 2019"),
  image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1510789132i/35097255.jpg"
)
Review.create(
  body: "The President is thrust into the 11th hour of a cyber time bomb that will irreparably damage everything that this country runs on. In a race against the clock, he'll go where no president has gone before in an effort to keep his country from falling apart.",
  book_id: book5.id,
  rating: 4.3
)

puts "✅ Done seeding!"
