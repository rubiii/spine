class VouchersController < ApplicationController

  def index
    render :json => Voucher.all
  end

  def show
    render :json => Voucher.find(params[:id])
  end

  def create
    voucher = Voucher.new(params[:voucher]).save
    render :json => voucher
  end

  def update
    voucher = Voucher.find(params[:id])
    voucher.update_attributes! params[:voucher]
    render :json => voucher
  end

end
