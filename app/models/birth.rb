class Birth < ApplicationRecord
    belongs_to :child
    has_one :father
    has_one :mother
    belongs_to :hospital

    validates :birth_day, presence: true
    validates :birth_month, presence: true
    validates :birth_year, presence: true
    validates :home_birth, inclusion: { in: [ true, false ] }
    validates :examiner_name, presence: true
    validates :delivery_method, presence: true
    validates :delivery_time, presence: true
    validates :severe_jaundice, inclusion: { in: [ true, false ] }
    validates :weight, presence: true
    validates :length, presence: true
    validates :head_circumference, presence: true
    validates :estimated_gestation, presence: true
    validates :exchange_transfusion_for_jaundice, inclusion: { in: [ true, false ] }
    validates :newborn_bloodspot_screening_test_completed, inclusion: { in: [ true, false ] }
    validates :bloodspot_sample_date, presence: true
    validates :apgar_one_minute, presence: true
    validates :apgar_five_minute, presence: true
    validates :admission_to_intensive_care_nursery_48hours, inclusion: { in: [ true, false ] }
    validates :admission_to_special_care_nursery_48hours, inclusion: { in: [ true, false ] }
    validates :child_id, presence: true
    validates :child_id, uniqueness: true
end
