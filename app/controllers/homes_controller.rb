class HomesController < ApplicationController
  def index
    redirect_to dashboard_path
  end
end
