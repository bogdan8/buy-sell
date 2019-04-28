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

class User < ActiveRecord::Base
  belongs_to :role
  has_many :products

  has_secure_password

  validates :password, length: { minimum: 6}, on: :create
  validates :email, uniqueness: true
  validates :email, presence: true
  validates :telephone, presence: true

  has_attached_file :avatar,
                    styles: {
                        thumb: '50x',
                        small: '128x96#',
                        medium: '520x',
                        large: '720x'
                    },
                    url: '/system/:class/:attachment/:id/:style/:filename',
                    path: ':rails_root/public/system/:class/:attachment/:id/:style/:filename',
                    default_url: '/missing/missing.png'

  validates_attachment :avatar, content_type: { content_type: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'] }
end
