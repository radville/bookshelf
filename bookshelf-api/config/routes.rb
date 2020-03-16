Rails.application.routes.draw do
  root to: 'books#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  get '/genres', to: 'bestsellers#genres'
  get '/bestsellers/:genre', to: 'bestsellers#show'
  
  resources :users, only: [:create, :show]
  resources :userbooks, only: [:new, :create, :show, :destroy]
  resources :books, only: [:create, :index, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
