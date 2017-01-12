Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#landing'

  namespace :api do
    resources :documentaries
    get '/timeline', to: 'profile#timeline'
    get '/watchlist', to: 'profile#watchlist'
  end

  get '*unmatched_route', :to => 'application#landing'
end
