# == Schema Information
#
# Table name: categories
#
#  id   :uuid             not null, primary key
#  name :string
#

class Category < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :name, length: { minimum: 3 }
end
