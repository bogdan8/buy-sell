class CategoriesController < ActionController::API

  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    Category.create(category_params)
  end

  def destroy
    Category.find(params[:id]).destroy!
  end

  def update
    Category.find(params[:category][:id]).update(name: params[:category][:name])
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

end
