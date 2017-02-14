require 'spec_helper'

def authenticated_header
  token = Knock::AuthToken.new(payload: { sub: 1 }).token

  {
      'Authorization': "Bearer #{token}"
  }
end

describe "sign_in", type: :feature, js: true do
  it "responds successfully" do
    visit '/sign_in'
    within('.form-sign-in') do
      fill_in 'email', with: 'test@test.com'
      fill_in 'password', with: '123456'
      click_button 'Ввійти'
    end
    Capybara.register_driver :authenticated_test do |app|
      Capybara::RackTest::Driver.new(:headers => authenticated_header)
    end
    expect(page).to have_http_status(200)
  end
end