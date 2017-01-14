class API::DocumentariesController < ApplicationController

  def index
    documentaries = Documentary.all
    render json: documentaries, status: 201
  end

  def create
    Documentary.find_or_create(documentary_params)
    if request.headers["Profile-Type"] == "watchlist"
      render json: Documentary.where(watchlist: true)
    else
      render json: Documentary.where(timeline: true)
    end
  end

  def update
    documentary = Documentary.find_by_name(documentary_params.title)
    documentary.update(movie_params)
  end

  def destroy
    documentary = Documentary.find_by_name(documentary_params.title)
    documentary.destroy
  end

  private

  def documentary_params
    params.require(:documentary).permit(:title, :timeline, :watchlist)
  end
end