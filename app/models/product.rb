# == Schema Information
#
# Table name: products
#
#  id                 :uuid             not null, primary key
#  text               :string
#  price              :string
#  user_id            :uuid
#  category_id        :uuid
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  approved           :boolean          default(FALSE)
#  created_at         :datetime
#  updated_at         :datetime
#

class Product < ActiveRecord::Base

  belongs_to :user
  has_many :prepaid_products

  validates :text, presence: true
  validates :text, length: { minimum: 10}

  has_attached_file :image,
                    styles: {
                        thumb: '50x',
                        small: '128x96#',
                        medium: '520x',
                        large: '720x'
                    },
                    url: '/system/:class/:attachment/:id/:style/:filename',
                    path: ':rails_root/public/system/:class/:attachment/:id/:style/:filename',
                    default_url: '/missing/missing.png'

  validates_attachment :image, content_type: { content_type: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'] }

  def self.with_pagination(param, per)
    if param[:category_id] && param[:category_id] != '0' && param[:category_id] != 'undefined'
      self.where(approved: true, category_id: param[:category_id]).left_joins(:prepaid_products).order('prepaid_products.id is not null desc').page(param[:page]).per(param[:per] && param[:per] != 'undefined' ? param[:per].to_i : per)
    else
      self.where(approved: true).left_joins(:prepaid_products).order('prepaid_products.id is not null desc').page(param[:page]).per(param[:per] && param[:per] != 'undefined' ? param[:per].to_i : per)
    end
  end

  def self.with_pagination_fo_admin(param, per)
    if param[:approved] == 'true' && param[:deflected] == 'true' && param[:prepaid] == 'true'
      self.all.order(updated_at: :desc).page(param[:page]).per(per)
    elsif param[:approved] == 'true' && param[:prepaid] == 'true'
      self.where(approved: true).joins(:prepaid_products).order(updated_at: :desc).page(param[:page]).per(per)
    elsif param[:approved] == 'true' && param[:deflected] == 'true'
      self.left_joins(:prepaid_products).where('prepaid_products.id is NULL').order(updated_at: :desc).page(param[:page]).per(per)
    elsif param[:deflected] == 'true' && param[:prepaid] == 'true'
      self.where(approved: false).joins(:prepaid_products).order(updated_at: :desc).page(param[:page]).per(per)
    elsif param[:approved] == 'true'
      self.where(approved: true).left_joins(:prepaid_products).where('prepaid_products.id is NULL').order(updated_at: :desc).page(param[:page]).per(per)
    elsif param[:deflected] == 'true'
      self.where(approved: false).left_joins(:prepaid_products).where('prepaid_products.id is NULL').order(updated_at: :desc).page(param[:page]).per(per)
    elsif param[:prepaid] == 'true'
      self.joins(:prepaid_products).page(param[:page]).order(updated_at: :desc).per(per)
    else
      self.all.order(updated_at: :desc).page(param[:page]).per(per)
    end
  end
end
