FactoryBot.define do
  factory :admin_role, class: Role do
    role_name :admin
  end

  factory :user_role, class: Role do
    role_name :user
  end
end
