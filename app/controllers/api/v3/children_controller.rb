class Api::V3::ChildrenController < Api::V3::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_child, :only => [:edit, :show, :update, :destroy]

    def index
        @children = current_user.children.all.order(:last_name, :first_name)
        if @children
            render json: @children.to_json(include: {
                birth: {},
                appointments: {},
                hepatitis_b_vaccine: {},
                visits: {},
                vitamin_ks: {},
                immunisations: {}
            })
        else
            render json:{
                status: 500,
                errors: ['no children found']
            }
        end
    end

    def create
        @child = current_user.children.find_or_create_by(child_params)
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
        @child = current_user.children.find(params[:id])
    end

     def child_params
         params.require(:child).permit(:first_name, :middle_name, :last_name, :user_id)
     end

  end