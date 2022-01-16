class Api::V1::BirthsController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_birth, :only => [:show, :edit, :update, :destroy]

    def index
        @births = Birth.all
        if @births
            render json: {
                births: @births
            }
        else
            render json:{
                status: 500,
                errors: ['no births found']
            }
        end
    end

    def create
        @birth = Birth.new(birth_params)
        @birth.save
        if @birth.save
            render json: {
                status: :created,
                birth: @birth
            }
        else
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end

    def update
        @birth.update(params.permit(:birth_day, :birth_month, :birth_year, :home_birth, :hospital_id, :examiner_name, :delivery_method, :delivery_time, :severe_jaundice, :weight, :length, :head_circumference, :estimated_gestation, :exchange_transfusion_for_jaundice, :newborn_bloodspot_screening_test_completed, :bloodspot_sample_date, :apgar_one_minute, :apgar_five_minute, :problems_requiring_treatment, :admission_to_intensive_care_nursery_48hours, :intensive_care_reason, :admission_to_special_care_nursery_48hours, :special_care_reason))
        if @birth.update    
            render json: {
                status: :updated,
                birth: @birth
            }
        else
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end

    def destroy
        @birth.destroy
    end

  private

    def set_birth
        @birth = Birth.find(params[:id])
    end

    def birth_params
        params.require(:birth).permit(:child_id, :birth_day, :birth_month, :birth_year, :home_birth, :hospital_id, :examiner_name, :delivery_method, :delivery_time, :severe_jaundice, :weight, :length, :head_circumference, :estimated_gestation, :exchange_transfusion_for_jaundice, :newborn_bloodspot_screening_test_completed, :bloodspot_sample_date, :apgar_one_minute, :apgar_five_minute, :problems_requiring_treatment, :admission_to_intensive_care_nursery_48hours, :intensive_care_reason, :admission_to_special_care_nursery_48hours, :special_care_reason, :user_id)
    end
     
  end