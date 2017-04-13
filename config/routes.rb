Rails.application.routes.draw do
  devise_for :users

  root 'application#landing'

  namespace :api do
    resources :documentaries
    get '/timeline', to: 'profile#timeline'
    get '/watchlist', to: 'profile#watchlist'
  end

  get '*unmatched_route', :to => 'application#landing'
end
