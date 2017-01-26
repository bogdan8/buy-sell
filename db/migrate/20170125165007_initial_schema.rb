class InitialSchema < ActiveRecord::Migration[5.0]
  enable_extension "uuid-ossp" unless extension_enabled?('uuid-ossp')
  def change

    create_table "categories", id: :uuid, default: 'uuid_generate_v4()'  do |t|
      t.string "name"
    end

    create_table "products", id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string "text"
      t.string "price"
      t.uuid "user_id"
      t.string "photo_url"
      t.uuid "category_id"
    end

    create_table "roles", id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string "role_name"
    end

    create_table "users", id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string "telephone"
      t.uuid "role_id"  
      t.string "password" 
      t.string "email"    
      t.string "username" 
    end

  end
end
