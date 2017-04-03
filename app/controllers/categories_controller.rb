class CategoriesController < ApplicationController
  before_action :set_category, only: [:update, :destroy]
  before_action :authenticate_user, except: [:index, :pagination]
  before_action :is_admin, except: [:index, :pagination]
  after_action only: [:pagination] { set_pagination_header(:categories, 15) }

  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    category = Category.new category_params
    message(category.save, 'Створено!', category.errors.full_messages.to_sentence)
  end

  def update
    message((@category.update category_params), 'Відредаговано!', @category.errors.full_messages.to_sentence)
  end

  def destroy
    message(@category.destroy, 'Видалено!', @category.errors.full_messages.to_sentence)
  end

  def pagination
    @categories = Category.page(params[:page]).per(15)
    render json: @categories
  end

  private

  def message(action, success, error)
    action ? msg = { message: { type: 'success', text: success } } : msg = { message: { type: 'error', text: error } }
    render json: msg
  end

  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name)
  end

end
