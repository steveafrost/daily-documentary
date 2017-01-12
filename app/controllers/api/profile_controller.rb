class API::ProfileController < ApplicationController

  def timeline
    timeline = Documentary.where(timeline: true)
    render json: timeline
  end

  def watchlist
    watchlist = Documentary.where(watchlist: true)
    render json: watchlist
  end
end