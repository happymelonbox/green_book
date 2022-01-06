class ChildrenController < ApplicationController
    
    def index
        @children = Child.all
           if @children
              render json: {
              children: @children
           }
          else
              render json: {
              status: 500,
              errors: ['no children found']
          }
         end
    end
  def show
       @child = Child.find(params[:id])
           if @child
              render json: {
              child: @child
           }
           else
              render json: {
              status: 500,
              errors: ['child not found']
            }
           end
      end
      
      def create
         @child = Child.new(child_params)
             if @child.save
                 login!  
                 render json: {
                 status: :created,
                 child: @child
             }
            else 
                render json: {
                status: 500,
                errors: @child.errors.full_messages
            }
            end
      end
  private
      
     def child_params
         params.require(:child).permit(:first_name, :middle_name, :last_name)
     end
  end