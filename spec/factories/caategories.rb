FactoryGirl.define do
  factory :category, class: Category do
    name Faker::Name.title
  end
end
