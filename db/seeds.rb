unless Role.first
  Role.create!(role_name: 'admin')
  Role.create!(role_name: 'user')
  puts 'Ролі додано'
end

unless User.first
  admin = Role.where(role_name: 'admin').first
  user = Role.where(role_name: 'user').first
  User.create!(email: 'admin@admin.com', password: '123456789', role_id: admin.id)
  User.create!(email: 'user@user.com', password: '123456789', role_id: user.id)
end
