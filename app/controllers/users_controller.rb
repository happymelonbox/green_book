class UsersController < ApplicationController

    # before_action :current_user

    def index
        @users = User.all
        if @users
            render json: @users.to_json(include: {
                children: {}
            })
        else
            render json: {
            status: 500,
            errors: ['no users found']
        }
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render json: @user.to_json(include: {
                children: {}
            })
        else
            render json: {
                status: 500,
                errors: ["User doesn't exist"]
            }
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login! 
            render json: @user.to_json(include: {
                children: {},
                appointments: {},
        })
        else 
            render json: {
            status: 500,
            errors: @user.errors.full_messages
        }
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :contact_number, :address_unit_number, :address_street_number, :address_street_name, :address_suburb, :address_city, :address_state, :address_country, :email, :password, :password_confirmation)
    end
end