class Category < ActiveRecord::Base

  validates :name, presence: true
  validates :name, length: { minimum: 10 }

end