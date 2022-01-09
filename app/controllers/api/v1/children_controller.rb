class Api::V1::ChildrenController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user, :only => [:show]

    def index
        @children = Child.all
        if @children
            render json: {
                children: @children
            }
        else
            render json:{
                status: 500,
                errors: ['no children found']
            }
        end
    end

    def create
        @user ||= current_user
        @child = @user.children.new(child_params)
        if @child.save
            render json: {
                status: :created,
                user: @user,
                child: @child
            }
        else 
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end

    def update
        @user ||= current_user
        @child = @user.children.find(params[:id])
        if @child.update
            render json: {
                status: :created,
                user: @user,
                child: @child
            }
        else 
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end


    def destroy
        @user ||= current_user
        @user.children.destroy(params[:id])
    end

  private
      
     def child_params
         params.require(:child).permit(:first_name, :middle_name, :last_name, :user_id)
     end
     
  end