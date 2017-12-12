class Api::MenuItemsController < ApplicationController
  before_action :set_menuItem, only: [:show, :update, :destroy]

  def index
    render json: MenuItems.all
  end

  def show
    render json: @menuItem
  end

  def create
  end

  def update
    if @menuItem.update(menuItem_params)
      render json: @menuItem
    else
      render json: @menuItem.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @menuItem.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menuItem
      @menuItem = MenuItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menuItem_params
      params.require(:menuItem).permit(:name, :description, :price)
    end
end
