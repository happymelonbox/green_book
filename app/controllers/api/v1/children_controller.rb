class Api::V1::ChildrenController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_child, :only => [:edit, :show, :update, :destroy]

    def index
        @user ||= current_user
        @children = Child.all.where("user_id = ?", @user.id)
        if @children
            render json: @children.to_json(include: {
                birth: {},
                hepatitis_b_vaccine: {},
                visits: {},
                vitamin_ks: {}
            })
        else
            render json:{
                status: 500,
                errors: ['no children found']
            }
        end
    end

    def create
        @child = Child.new(child_params)
        @child.save
        if @child.save
            render json: {
                status: :created
            }
        else
            render json: {
                status: 500,
                errors: @child.errors.full_messages
            }
        end
    end

    def update
        @child.update(params.permit(:first_name, :middle_name, :last_name))
        if @child.update
            render json: {
                status: :updated,
            }
        else
            render json: {
                status: 500,
                errors: @child.errors.full_messages
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