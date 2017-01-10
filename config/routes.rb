Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#landing'

  namespace :api, defaults: {format: :json} do
    resources :movies
  end

  get '*unmatched_route', :to => 'application#landing'
end
