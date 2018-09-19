Rails.application.routes.draw do
  resources :events, only: [:show] do
    resources :tasks, only: [:index]
  end 

  resources :tasks, only: [:create, :update, :destroy]
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
