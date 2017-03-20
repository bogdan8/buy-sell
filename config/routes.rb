Rails.application.routes.draw do
  scope constraints: ->(req) { req.format == :json } do
    post 'user_token' => 'user_token#create'
    resources :products do
      post :approved, on: :member
      post :prepaid, on: :member
      get :all_prepaid_product, on: :collection
    end

    resources :categories
    resources :users
  end
  get '*path' => 'static#index', constraints: lambda { |req| req.format != 'json' }
end
