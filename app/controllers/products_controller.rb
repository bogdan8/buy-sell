class ProductsController < ApplicationController
  before_action :set_product, only: [:destroy, :approved, :prepaid, :unpaid]
  before_action :authenticate_user, except: [:index, :pagination]
  before_action :is_admin, except: [:index, :create, :pagination]
  after_action only: [:pagination, :pagination_admin] { set_pagination_header(:products, 15) }

  def index
    @products = params[:approved] ? Product.all.where(approved: params[:approved]) : Product.all
    render json: @products.to_json(include: [:prepaid_products, :user])
  end

  def create
    product = Product.new product_params
    message(product.save, 'Очікуйте підтвердження адміністратором сайту!', product.errors.full_messages.to_sentence)
  end

  def destroy
    message(@product.destroy, 'Видалено!', @product.errors.full_messages.to_sentence)
  end

  def approved
    message(@product.update(approved: params[:product][:approved]), (params[:product][:approved] == 'true' ? 'Затверджено!' : 'Відхилено!'), @product.errors.full_messages.to_sentence)
  end

  def prepaid
    product = @product.prepaid_products.new(prepaid_end_date: params[:product][:prepaid_end_date])
    product.save ? msg = { type: 'success', text: 'Предоплачено!' } : msg = { type: 'error', text: product.errors.full_messages.to_sentence }
    render json: {
        message: msg,
        products: Product.all.to_json(include: [:prepaid_products, :user])
    }
  end

  def unpaid
    product = PrepaidProduct.where(product_id: @product.id).first.delete
    product.save ? msg = { type: 'success', text: 'Відхилено предоплату!' } : msg = { type: 'error', text: product.errors.full_messages.to_sentence }
    render json: {
        message: msg,
        products: Product.all.to_json(include: [:prepaid_products, :user])
    }
  end

  def pagination
    headers['per'] = (params[:per] && params[:per] != 'undefined' ? params[:per].to_i : 15)
    @products = Product.with_pagination(params, 15)
    render json: @products.to_json(include: [:prepaid_products, :user])
  end

  def pagination_admin
    @products = Product.with_pagination_fo_admin(params, 15)
    render json: @products.to_json(include: [:prepaid_products, :user])
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
