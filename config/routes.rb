Rails.application.routes.draw do
  resources :boards
  resources :cards
  resources :lists
end
