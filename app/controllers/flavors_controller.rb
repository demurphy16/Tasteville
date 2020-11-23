class FlavorsController < ApplicationController
  # GET /flavors
  def index
    @flavors = Flavor.all

    render json: @flavors
  end
end
