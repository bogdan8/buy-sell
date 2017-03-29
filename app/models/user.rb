class User < ActiveRecord::Base
  validates :email, uniqueness: true

  belongs_to :role
  has_many :products

  has_secure_password

  has_attached_file :avatar,
                    styles: {
                        thumb: '50x',
                        small: '128x96#',
                        medium: '520x',
                        large: '720x'
                    },
                    url: '/system/:class/:attachment/:id/:style/:filename',
                    path: ':rails_root/public/system/:class/:attachment/:id/:style/:filename'

  validates_attachment :avatar, content_type: { content_type: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'] }
end