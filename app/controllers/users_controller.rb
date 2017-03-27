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

  def roles
    @roles = Role.all
    render json: @roles
  end

  def change_role
    user = User.find(params[:id])
    message(user.update(role_id: params[:user][:role_id]), 'Роль змінено!', user.errors.full_messages.to_sentence)
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
