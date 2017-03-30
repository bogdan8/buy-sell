class Product < ActiveRecord::Base

  belongs_to :user
  has_many :prepaid_products

  has_attached_file :image,
                    styles: {
                        thumb: '50x',
                        small: '128x96#',
                        medium: '520x',
                        large: '720x'
                    },
                    url: '/system/:class/:attachment/:id/:style/:filename',
                    path: ':rails_root/public/system/:class/:attachment/:id/:style/:filename'

  validates_attachment :image, content_type: { content_type: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'] }

  def self.with_pagination(param, per)
    if param[:category_id] && param[:category_id] != '0'
      self.where(approved: true, category_id: param[:category_id]).page(param[:page]).per(per)
    else
      self.where(approved: true).page(param[:page]).per(per)
    end
  end
end