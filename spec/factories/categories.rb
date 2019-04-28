# == Schema Information
#
# Table name: categories
#
#  id   :uuid             not null, primary key
#  name :string
#

FactoryBot.define do
  factory :category, class: Category do
    name Faker::Name.title
  end
end
