class Api::V1::VisitsController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_visit, :only => [:show, :edit, :update, :destroy]

    def index
        @visits = Visit.all
        if @visits
            render json: @visits.to_json(include: {
                child: {}
            })
        else
            render json:{
                status: 500,
                errors: ['no visits found']
            }
        end
    end

    def create
        @visit = Visit.new(visit_params)
        @visit.save
        if @visit.save
            render json: {
                status: :created,
            }
        else
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end

    def update
        @visit.update(visit_params)
        if @visit.update
            render json: {
                status: :updated
            }
        else
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end

    def destroy
        @visit.destroy
    end

  private

    def set_visit
        @visit = Visit.find(params[:id])
    end

    def visit_params
        params.require(:visit).permit(:visit_age, :visit_day, :visit_month, :visit_year, :visit_time, :name_of_nurse, :weight, :head_circumference, :length)
    end

  end