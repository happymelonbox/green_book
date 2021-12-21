Rails.application.routes.draw do
  root 'static#home'
  
  get '/login' => 'sessions#login'
  post '/login' => 'sessions#create'
  post '/logout' => 'sessions#destroy'
  get '/logout' => 'sessions#destroy'

  resources :users

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
