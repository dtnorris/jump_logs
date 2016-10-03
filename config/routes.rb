Rails.application.routes.draw do
  root to: 'homes#index'

  resources :jumps, only: [:new, :index]
end
