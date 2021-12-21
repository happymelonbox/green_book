class ApplicationController < ActionController::API
    include ActionController::Cookies

    def home
    end
  
    def current_user
      @current_user ||= User.find_by_id(session[:user_id]) if !!session[:user_id]
    end
  
    def logged_in?
      !!session[:user_id]
    end
  
    def authentication_redirect
      redirect_to root_path unless logged_in?
    end
    
  end
