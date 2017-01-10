class API::MoviesController < ApplicationController

  def index
    movies = Movies.all
    render json: movies, status: 201
  end

  def create
    movie = Movies.create(movie_params)
    render json: movie
  end

  def update
    movie = Movies.find_by_name(movie_params.title)
    movie.update(movie_params)
  end

  def destroy
    movie = Movies.find_by_name(movie_params.title)
    movie.destroy
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :timeline, :watchlist)
  end
end