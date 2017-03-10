class ProductsController < ActionController::API

  def index
    @products = params[:approved] ? Product.all.where(approved: params[:approved]) : Product.all
    render json: @products
  end

  def create
    Product.create(product_params)
  end

  def approved
    @product = Product.find(params[:id]).update(approved: params[:product][:approved])
  end

  private

  def product_params
    params.require(:product).permit(:text, :price, :user_id, :category_id, :approved, :image)
  end

end
