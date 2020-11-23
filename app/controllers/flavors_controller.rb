class FlavorsController < ApplicationController
  before_action :set_flavor, only: [:show, :update, :destroy]

  # GET /flavors
  def index
    @flavors = Flavor.all

    render json: @flavors
  end

  # GET /flavors/1
  def show
    render json: @flavor
  end

  # POST /flavors
  def create
    @flavor = Flavor.new(flavor_params)

    if @flavor.save
      render json: @flavor, status: :created, location: @flavor
    else
      render json: @flavor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /flavors/1
  def update
    if @flavor.update(flavor_params)
      render json: @flavor
    else
      render json: @flavor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /flavors/1
  def destroy
    @flavor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flavor
      @flavor = Flavor.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def flavor_params
      params.require(:flavor).permit(:name)
    end
end
