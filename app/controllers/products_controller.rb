class ProductsController < ApplicationController
  before_action :set_product, only: [:destroy, :approved, :prepaid]
  before_action :authenticate_user, except: [:index, :all_prepaid_product]

  def index
    @products = params[:approved] ? Product.all.where(approved: params[:approved]) : Product.all
    render json: @products
  end

  def create
    product = Product.new product_params
    message(product.save, 'Створено!', product.errors.full_messages.to_sentence)
  end

  def destroy
    message(@product.destroy, 'Видалено!', @product.errors.full_messages.to_sentence)
  end

  def approved
    message(@product.update(approved: params[:product][:approved]), (params[:product][:approved] == 'true' ? 'Затверджено!' : 'Відхилено!'), @product.errors.full_messages.to_sentence)
  end

  def prepaid
    product = @product.prepaid_products.new(prepaid_end_date: params[:product][:prepaid_end_date])
    message(product.save, 'Предоплачено!', product.errors.full_messages.to_sentence)
  end

  def all_prepaid_product
    all_prepaid = PrepaidProduct.all
    render json: all_prepaid
  end

  private

  def message(action, success, error)
    action ? msg = { message: { type: 'success', text: success } } : msg = { message: { type: 'error', text: error } }
    render json: msg
  end

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:text, :price, :user_id, :category_id, :approved, :image)
  end

end
