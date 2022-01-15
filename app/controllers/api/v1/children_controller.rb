class Api::V1::ChildrenController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_child, :only => [:edit, :show, :update, :destroy]

    def index
        @user ||= current_user
        @children = Child.all.where("user_id = ?", @user.id)
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
        if @child.save!
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
        if @child.update.(child_params)
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
        @child.destroy
    end

  private

    def set_child
        @child = Child.find(params[:id])
    end
      
     def child_params
         params.require(:child).permit(:first_name, :middle_name, :last_name, :user_id)
     end
     
  end