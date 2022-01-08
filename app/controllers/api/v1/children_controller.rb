class Api::V1::ChildrenController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user, :only => [:show]

    def index
        respond_with Child.all
    end

    def create
        @user ||= current_user
        respond_with :api, :v1, @user.children.new(child_params)
    end

    def update
        @user ||= current_user
        child = @user.children.find(params['id'])
        child.update_attributes(child_params)
        respond_with child, json: child
    end

    def destroy
        respond_with Child.destroy(params['id'])
    end

  private
      
     def child_params
         params.require(:child).permit(:first_name, :middle_name, :last_name, :user_id)
     end
     
  end