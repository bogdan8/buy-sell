class ApplicationController < ActionController::API
  include Knock::Authenticable

  protected

  def set_pagination_header(name)
    scope = instance_variable_get("@#{name}")

    page = {}
    page[:first] = 1 if scope.total_pages > 1 && !scope.first_page?
    page[:last] = scope.total_pages if scope.total_pages > 1 && !scope.last_page?
    page[:next] = scope.current_page + 1 unless scope.last_page?
    page[:prev] = scope.current_page - 1 unless scope.first_page?
    headers['Pagination_links'] = page.to_json

    params = {}
    params[:current_page] = scope.current_page
    params[:total_objects] = scope.total_count

    headers['Pagination_params'] = params.to_json
  end
end
