class CreatePrepaidProduct < ActiveRecord::Migration[5.0]
  def change
    create_table :prepaid_products do |t|
      t.uuid :product_id
      t.datetime :prepaid_end_date
    end
  end
end
