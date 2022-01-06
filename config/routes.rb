Rails.application.routes.draw do

  root to: 'home#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  resources :users, only: [:create, :show, :index]
  resources :fathers
  resources :mothers
  resources :children
  resources :notes

end