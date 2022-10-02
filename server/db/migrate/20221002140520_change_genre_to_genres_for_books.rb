class ChangeGenreToGenresForBooks < ActiveRecord::Migration[6.1]
  def change
    change_table :books do |t|
      t.remove :genre
      t.text :genres
    end
  end
end
