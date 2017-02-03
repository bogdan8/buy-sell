Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount Knock::Engine => '/auth'

  get '*path' => 'static#index', constraints: lambda { |req| req.format != 'json' }

  resources :users;
end
