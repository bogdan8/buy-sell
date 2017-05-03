Rails.application.routes.draw do
  scope constraints: ->(req) { req.format == :json } do
    post 'user_token' => 'user_token#create'
    concern :pagination do
      get '/:page', action: 'pagination', on: :collection
    end

    get 'products/pagination_admin/:page' => 'products#pagination_admin'
    resources :products, concerns: :pagination do
      post :approved, on: :member
      post :prepaid, on: :member
      post :unpaid, on: :member
    end

    resources :categories, concerns: :pagination
    resources :users, concerns: :pagination do
      get :roles, on: :collection
      post :change_role, on: :member
    end
  end
  get '*path' => 'static#index', constraints: lambda { |req| req.format != 'json' }
  root 'static#index'
end
