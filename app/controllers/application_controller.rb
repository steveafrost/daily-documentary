class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def landing
    render 'layouts/application.html.erb'
  end
end
