class ItemsController < ApplicationController
  respond_to :json

  def index
    respond_with Item.all
  end

  def create
    respond_with Item.create(item_params)
  end

  def update
    respond_with Item.find(params[:id]).update_attributes(item_params)
  end

  def destroy
    respond_with Item.destroy(params[:id])
  end

  private

  def item_params
    params.require(:item).permit(:id, :title, :author, :url, :current_page, :total_pages, :publisher, :start_date, :due_date, :daily_pace, :in_progress, :notes)
  end
end
