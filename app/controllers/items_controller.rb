class ItemsController < ApplicationController
  respond_to :json

  def index
    respond_with Item.all
  end

  def destroy
    respond_with Item.destroy(params[:id])
  end
end
