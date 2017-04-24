require 'spec_helper'

describe 'visit page', type: :feature, js: true do
  it '#sign_in' do
    visit '/sign_in'
    current_path.should == '/sign_in'
  end
  it '#register' do
    visit '/register'
    current_path.should == '/register'
  end
  it '#moving from login page to register' do
    visit '/sign_in'
    current_path.should == '/sign_in'

    click_link 'Зареєструватись'
    current_path.should == '/register'
  end
  it '#moving from register page to login' do
    visit '/register'
    current_path.should == '/register'

    click_link 'Ввійти'
    current_path.should == '/sign_in'
  end
end

=begin
describe 'the signin process', type: :feature, js: true do
  it 'signs me in' do
    login_admin
  end
end
=end
