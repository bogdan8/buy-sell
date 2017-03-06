class ProductController < ActionController::API
  def upload
    Product.create(product_params)
  end

  private

  def product_params
    params.require(:product).permit(:image)
  end

end
