# == Schema Information
#
# Table name: prepaid_products
#
#  id               :integer          not null, primary key
#  product_id       :uuid
#  prepaid_end_date :datetime
#

class PrepaidProduct < ActiveRecord::Base
  belongs_to :product
end
