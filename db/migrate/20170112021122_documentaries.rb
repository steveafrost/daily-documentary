class Documentaries < ActiveRecord::Migration[5.0]
  def change
    create_table :documentaries do |t|
      t.string :title
      t.boolean :timeline
      t.boolean :watchlist
    end
  end
end
