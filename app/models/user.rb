class User < ActiveRecord::Base
  belongs_to :role
  has_many :products

  has_secure_password

  validates :password, length: { minimum: 6}, on: :create
  validates :email, uniqueness: true
  validates :email, presence: true

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