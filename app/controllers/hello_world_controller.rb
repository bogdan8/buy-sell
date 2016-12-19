class HelloWorldController < ActionController::API
  def index
    @hello_world_props = { name: "Stranger" }
    render json: @hello_world_props
  end
end
