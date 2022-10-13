class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.integer :author_id
      t.string :read_status
      t.date :finished_date
      t.timestamps
    end
  end
end