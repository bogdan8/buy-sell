require 'spec_helper'

describe UserTokenController, type: :controller do
  it "responds successfully" do
    @user = FactoryGirl.create(:user)
    post :create, { params: { auth: { email: @user.email , password: @user.password } }, format: :json }

    assert_response :success
  end
end