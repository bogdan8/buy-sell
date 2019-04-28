# == Schema Information
#
# Table name: users
#
#  id                  :uuid             not null, primary key
#  telephone           :string
#  role_id             :uuid
#  password_digest     :string
#  email               :string
#  username            :string
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  location            :text
#

FactoryBot.define do
  factory :user, class: User do
    email Faker::Internet.email
    password Faker::Internet.password
    telephone Faker::Number.number(10)
  end
end
