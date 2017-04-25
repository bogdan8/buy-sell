require 'rails_helper'

RSpec.describe UserTokenController, type: :controller do
  before(:each) do
    role = FactoryGirl.create(:admin_role)
    @user = FactoryGirl.create(:user, role_id: role.id)
  end

  it 'responds successfully' do
    post :create, { params: { auth: { email: @user.email, password: @user.password } }, format: :json }

    assert_response :success
  end
end