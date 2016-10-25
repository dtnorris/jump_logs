class Api::V1::JumpsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    jump = Jump.new(location: params["jump"]["location"])
    result = jump.save
    render status: 200, json: { status: result }
  end
end
