class Documentaries < ActiveRecord::Migration[5.0]
  def change
    create_table :documentaries do |t|
      t.string :title
      t.integer :views
      t.boolean :timeline
      t.boolean :watchlist
    end
  end
end
