class Api::ListsController < ApplicationController

  def index
    render json: List.all
  end

  def create
    list = List.new(list_params)
    if list.save
      render json: list
    else
      render json: { errors: list.errors }, status: :unprocessable_entity
    end
  end

  def update
    list = List.find(params[:id])
    render json: list
  end

  def destroy
    List.find(params[:id]).destroy
    render json: { message: 'List deleted' }
  end

  private

  def item_params
    params.require(:list).permit(:name)
  end

end
