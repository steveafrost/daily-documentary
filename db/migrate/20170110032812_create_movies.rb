class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.boolean :timeline
      t.boolean :watchlist
    end
  end
end
