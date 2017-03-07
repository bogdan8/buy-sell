Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'

  resources :product

  get '*path' => 'static#index', constraints: lambda { |req| req.format != 'json' }

  resources :users;
end
