Rails.application.routes.draw do
  root to: 'homes#index'

  resources :jumps, only: [:new, :index]
  resource :dashboard, only: [:show]
  namespace :api do
    namespace :v1 do
      resources :jumps, only: :create
    end
  end
end
