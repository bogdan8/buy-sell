def login_admin
  role = FactoryGirl.create(:admin_role)
  user = FactoryGirl.create(:user, role_id: role.id)
  u = User.first
  expect(user.email).to eq u.email
  # expect(user.role.role_name).to eq 'user'
  visit '/sign_in'
  within('.form-sign-in') do
    fill_in 'email', with: user.email
    expect(find_field('email').value).to eq user.email
    fill_in 'password', with: user.password
    expect(find_field('password').value).to eq user.password
  end
  click_button 'Ввійти'
  sleep 3
  current_path.should == '/products'
end