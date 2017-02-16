FactoryGirl.define do
  factory :user, class: User do
    email 'test@test.com'
    password '123456'
  end
end
