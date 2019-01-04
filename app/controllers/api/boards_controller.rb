class Api::BoardsController < ApplicationController

  def index
      render json: Board.all
    end

    def create
      board = Board.new(board_params)
      if board.save
        render json: board
      else
        render json: { errors: board.errors }, status: :unprocessable_entity
      end
    end

    def update
      board = Board.find(params[:id])
      render json: board
    end

    def destroy
      Board.find(params[:id]).destroy
      render json: { message: 'Board deleted' }
    end

    private

    def item_params
      params.require(:board).permit(:name)
    end

end
