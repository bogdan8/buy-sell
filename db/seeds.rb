unless Role.first
  Role.create!(role_name: 'admin')
  Role.create!(role_name: 'user')
  puts 'Ролі додано'
end
