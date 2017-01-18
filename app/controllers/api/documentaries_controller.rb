class API::DocumentariesController < ApplicationController

  before_action :set_doc, except: [:index, :create]

  def index
    documentaries = Documentary.all
    render json: documentaries, status: 201
  end

  def create
    Documentary.create_or_update(documentary_params)
    if request.headers["Profile-Type"] == "watchlist"
      render json: Documentary.where(watchlist: true)
    else
      render json: Documentary.where(timeline: true)
    end
  end

  def destroy
    if @doc.destroy
      render json: { message: "#{@doc.title} was successfully removed" }
    else
      render json: { error: "There was an issue removing #{@doc.title}"}
    end
  end

  private

  def documentary_params
    params.require(:documentary).permit(:title, :timeline, :watchlist)
  end

  def set_doc
    @doc = Documentary.find_by_id(params[:id])
  end
end