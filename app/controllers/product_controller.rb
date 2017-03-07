class ProductController < ActionController::API
  def create
    Product.create(product_params)
  end

  private

  def product_params
    params.require(:product).permit(:text, :price, :user_id, :category_id, :approved, :image)
  end

end
