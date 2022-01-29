class Api::V1::ImmunisationsController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_immunisation, :only => [:show, :edit, :update, :destroy]

    def index
        @immunisations = Immunisation.all
        if @immunisations
            render json: @immunisations.to_json(include: {
                child: {}
            })
        else
            render json:{
                status: 500,
                errors: ['no immunisations found']
            }
        end
    end

    def create
        @immunisation = Immunisation.new(immunisation_params)
        @immunisation.save
        if @immunisation.save
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
        
        if @immunisation.update!(immunisation_params)
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
        @immunisation.destroy
    end

  private

    def set_immunisation
        @immunisation = Immunisation.find(params[:id])
    end

    def immunisation_params
        params.require(:immunisation).permit(:age, :vaccination_name, :protects_against, :batch_number, :date_given, :nurse_name, :clinic, :date_of_next_dose, :child_id)
    end

  end