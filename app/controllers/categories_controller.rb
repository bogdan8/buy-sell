class CategoriesController < ActionController::API

  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    Category.create(category_params)
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

end
