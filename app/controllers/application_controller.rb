class ApplicationController < ActionController::API
  include Knock::Authenticable

  protected

  def is_admin
    session[:return_to] ||= request.referer
    redirect_to session.delete(:return_to) if current_user.role.role_name != 'admin'
  end

  def set_pagination_header(name, per)
    scope = instance_variable_get("@#{name}")

    page = {}
    page[:first] = 1 if scope.total_pages > 1 && !scope.first_page?
    page[:last] = scope.total_pages if scope.total_pages > 1 && !scope.last_page?
    page[:next] = scope.current_page + 1 unless scope.last_page?
    page[:prev] = scope.current_page - 1 unless scope.first_page?
    headers['Pagination_links'] = page.to_json

    params = {}
    params[:per] = per
    params[:current_page] = scope.current_page
    params[:total_objects] = scope.total_count
    params[:total_pages] = (scope.total_count.to_f / per).round

    headers['Pagination_params'] = params.to_json
  end
end
