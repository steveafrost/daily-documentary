class DocumentarySerializer < ActiveModel::Serializer
  attributes :id, :title, :timeline, :watchlist
end
