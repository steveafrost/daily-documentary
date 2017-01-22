class DocumentarySerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :url, :timeline, :watchlist
end
