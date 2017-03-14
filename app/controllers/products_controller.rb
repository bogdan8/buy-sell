class ProductsController < ActionController::API

  before_action :set_product, only: [:destroy, :approved, :prepaid]

  def index
    @products = params[:approved] ? Product.all.where(approved: params[:approved]) : Product.all
    render json: @products
  end

  def create
    Product.create(product_params)
  end

  def destroy
    @product.destroy!
  end

  def approved
    @product.update(approved: params[:product][:approved])
  end

  def prepaid
    @product.prepaid_products.create(prepaid_end_date: params[:product][:prepaid_end_date])
  end

  def all_prepaid_product
    all_prepaid = PrepaidProduct.all
    render json: all_prepaid
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:text, :price, :user_id, :category_id, :approved, :image)
  end

end
