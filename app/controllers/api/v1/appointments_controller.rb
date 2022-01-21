class Api::V1::AppointmentsController < Api::V1::BaseController
    before_action :authentication_redirect, :only => [:index, :show]
    before_action :current_user
    before_action :set_appointment, :only => [:show, :edit, :update, :destroy]

    def index
        @appointments = Appointment.all
        if @appointments
            render json: @appointments.to_json(include: {
                child: {}
            })
        else
            render json:{
                status: 500,
                errors: ['no appointments found']
            }
        end
    end

    def create
        @appointment = Appointment.new(appointment_params)
        @appointment.save
        if @appointment.save
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
        @appointment.update(appointment_params)
        if @appointment.update
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
        @appointment.destroy
    end

  private

    def set_appointment
        @appointment = Appointment.find(params[:id])
    end

    def appointment_params
        params.require(:appointment).permit(:reason, :appointment_age, :date_and_time, :location_name, :location_address_number, :location_street_name, :location_suburb, :location_city, :location_state, :location_country, :name_of_nurse, :weight, :head_circumference, :length)
    end

  end