Rails.application.routes.draw do

  root to: 'home#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  get '/auth/:provider/callback', to: 'sessions#omniauth'

  resources :users, only: [:create, :destroy]
  resources :notes

  namespace :api do
    namespace :v1 do
      resources :children, only: [:index, :create, :destroy, :update]
      resources :hospitals, only: [:index, :create, :destroy, :update]
      resources :births, only: [:index, :create, :destroy, :update]
      resources :mothers, only: [:index, :create, :destroy, :update]
      resources :fathers, only: [:index, :create, :destroy, :update]
      resources :vitamin_ks, only: [:index, :create, :destroy, :update]
      resources :hepatitis_b_vaccines, only: [:index, :create, :destroy, :update]
      resources :visits, only: [:index, :create, :destroy, :update]
    end
  end

end