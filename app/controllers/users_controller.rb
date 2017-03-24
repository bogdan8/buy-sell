class UsersController < ApplicationController
  before_action :authenticate_user, except: :create

  def index
    @users = User.all
    render json: @users
  end

  def create
    user = User.new user_params
    message(user.save, 'Зареєстровано!', user.errors.full_messages.to_sentence)
  end

  private

  def message(action, success, error)
    action ? msg = { message: { type: 'success', text: success } } : msg = { message: { type: 'error', text: error } }
    render json: msg
  end


  def user_params
    role = Role.where(role_name: 'user').first
    params.require(:user).permit(:avatar, :username, :password, :email, :telephone, :location).merge(role_id: role.id)
  end
end
