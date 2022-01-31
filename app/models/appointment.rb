class Appointment < ApplicationRecord
    belongs_to :child

    validates :reason, presence: true
    validates :date_and_time, presence: true
    validates :location_contact_number, format: { with: /\A(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}\z/, on: :create}
    validates :child_id, presence: true
end
