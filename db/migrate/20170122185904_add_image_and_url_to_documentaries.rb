class AddImageAndUrlToDocumentaries < ActiveRecord::Migration[5.0]
  def change
    add_column :documentaries, :image, :string
    add_column :documentaries, :url, :string
  end
end
