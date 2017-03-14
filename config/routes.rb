Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  scope constraints: ->(req) { req.format == :json } do
    resources :products do
      post :approved, on: :member
      post :prepaid, on: :member
      get :all_prepaid_product, on: :collection
    end

    resources :categories
  end
  get '*path' => 'static#index', constraints: lambda { |req| req.format != 'json' }

  resources :users;
end
