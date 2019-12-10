Rails.application.routes.draw do
  get 'home/index'
  devise_for :users
  resources :userbooks, only: [:new, :create, :show, :destroy]
  resources :books

  root to: "books#index"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
