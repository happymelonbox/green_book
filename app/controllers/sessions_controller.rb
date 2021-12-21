class SessionsController < ApplicationController

    def create
      @user = User.find_by(user_name: params[:user_name])

      if !!@user && @user.authenticate(params[:password])

        session[:user_id] = @user.id
        flash[:notice] = "Welcome back #{@user.first_name}"
        redirect_to user_path(@user)
      else
        flash[:notice] = "Something went wrong! Make sure your username and password are correct"
        redirect_to login_path
      end
    end

    def destroy
      session[:user_id] = nil
      redirect_to root_path
    end
  
end