class Api::V3::MothersController < Api::V3::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_mother, :only => [:show, :edit, :update, :destroy]

    def index
        @mothers = Mother.all
        if @mothers
            render json: @mothers.to_json(include: {
                births: {},
                children: {}
            })
        else
            render json:{
                status: 500,
                errors: ['no mothers found']
            }
        end
    end

    def create
        @mother = Mother.new(mother_params)
        @mother.save
        if @mother.save
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
        @mother.update(mother_params)
        if @mother.update
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
        @mother.destroy
    end

  private

    def set_mother
        @mother = Mother.find(params[:id])
    end

    def mother_params
        params.require(:mother).permit(:first_name, :middle_name, :last_name, :birth_day, :birth_month, :birth_year, :nationality)
    end

  end