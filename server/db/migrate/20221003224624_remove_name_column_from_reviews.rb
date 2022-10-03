class RemoveNameColumnFromReviews < ActiveRecord::Migration[6.1]
  def change
    change_table :reviews do |t|
      t.remove :name
    end
  end
end
