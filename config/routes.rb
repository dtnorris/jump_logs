Rails.application.routes.draw do
  root to: 'homes#index'

  resources :jumps, only: [:new, :index]
  resource :dashboard, only: [:show]
end
