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

  def self.with_pagination_fo_admin(param, per)
    if param[:approved] == 'true' && param[:deflected] == 'true' && param[:prepaid] == 'true'
      self.all.page(param[:page]).per(per)
    elsif param[:approved] == 'true' && param[:prepaid] == 'true'
      self.where(approved: true).joins(:prepaid_products).page(param[:page]).per(per)
    elsif param[:approved] == 'true' && param[:deflected] == 'true'
      self.left_joins(:prepaid_products).where('prepaid_products.id is NULL').page(param[:page]).per(per)
    elsif param[:deflected] == 'true' && param[:prepaid] == 'true'
      self.where(approved: false).joins(:prepaid_products).page(param[:page]).per(per)
    elsif param[:approved] == 'true'
      self.where(approved: true).left_joins(:prepaid_products).where('prepaid_products.id is NULL').page(param[:page]).per(per)
    elsif param[:deflected] == 'true'
      self.where(approved: false).left_joins(:prepaid_products).where('prepaid_products.id is NULL').page(param[:page]).per(per)
    elsif param[:prepaid] == 'true'
      self.joins(:prepaid_products).page(param[:page]).per(per)
    else
      self.all.page(param[:page]).per(per)
    end
  end
end