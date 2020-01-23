Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :userbooks, only: [:new, :create, :show, :destroy]
  resources :books

  root to: 'books#index'
  get '/genres', to: 'bestsellers#genres'
  get '/bestsellers/:genre', to: 'bestsellers#show'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
