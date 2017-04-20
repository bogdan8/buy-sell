class UserTokenController < Knock::AuthTokenController
  def create
    user_id =  auth_token.payload[:sub]
    user = User.find_by_id(user_id)
    render json: {
        jwt: auth_token.token,
        id: user.id,
        role: user.role.role_name,
        avatar: user.avatar_file_name
    }, status: :created
  end
end
