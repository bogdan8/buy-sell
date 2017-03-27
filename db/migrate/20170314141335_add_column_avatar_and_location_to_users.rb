class AddColumnAvatarAndLocationToUsers < ActiveRecord::Migration[5.0]
  def up
    add_attachment :users, :avatar
    add_column :users, :location, :text
  end

  def down
    remove_attachment :users, :avatar
    remove_column :users, :location, :text
  end
end
