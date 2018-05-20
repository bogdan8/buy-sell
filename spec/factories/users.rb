FactoryBot.define do
  factory :user, class: User do
    email Faker::Internet.email
    password Faker::Internet.password
    telephone Faker::Number.number(10)
  end
end
