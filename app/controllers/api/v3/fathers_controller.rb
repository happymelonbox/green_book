class Api::V1::FathersController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_father, :only => [:show, :edit, :update, :destroy]

    def index
        @fathers = Father.all
        if @fathers
            render json: @fathers.to_json(include: {
                children: {}
            })
        else
            render json:{
                status: 500,
                errors: ['no fathers found']
            }
        end
    end

    def create
        @father = Father.new(father_params)
        @father.save
        if @father.save
            render json: {
                status: :created,
            }
        else
            render json: {
                status: 500,
                errors: @father.errors.full_messages
            }
        end
    end

    def update
        @father.update(father_params)
        if @father.update
            render json: {
                status: :updated
            }
        else
            render json: {
                status: 500,
                errors: @father.errors.full_messages
            }
        end
    end

    def destroy
        @father.destroy
    end

  private

    def set_father
        @father = Father.find(params[:id])
    end

    def father_params
        params.require(:father).permit(:first_name, :middle_name, :last_name, :birth_day, :birth_month, :birth_year, :nationality)
    end

  end