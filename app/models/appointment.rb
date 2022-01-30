class Appointment < ApplicationRecord
    belongs_to :child

    validates :reason, presence: true
    validates :date_and_time, presence: true
    validates :contact_number, phone: { possible: true, allow_blank: true, types: [:voip, :mobile] }
    validates :child_id, presence: true
end
