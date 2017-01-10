class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :timeline, :watchlist
end
