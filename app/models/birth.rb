class Birth < ApplicationRecord
    belongs_to :child
    has_one :father
    has_one :mother
    belongs_to :hospital

    validates :birth_day, presence: true
    validates :birth_month, presence: true
    validates :birth_year, presence: true
    validates :home_birth, presence: true
    validates :examiner_name, presence: true
    validates :delivery_method, presence: true
    validates :delivery_time, presence: true
    validates :severe_jaundice, presence: true
    validates :weight, presence: true
    validates :length, presence: true
    validates :head_circumference, presence: true
    validates :estimated_gestation, presence: true
    validates :exchange_transfusion_for_jaundice, presence: true
    validates :newborn_bloodspot_screening_test_completed, presence: true
    validates :bloodspot_sample_date, presence: true
    validates :apgar_one_minute, presence: true
    validates :apgar_five_minute, presence: true
    validates :problems_requiring_treatment, presence: true
    validates :admission_to_intensive_care_nursery_48hours, presence: true
    validates :admission_to_special_care_nursery_48hours, presence: true
    validates :child_id, presence: true
    validates :child_id, uniqueness: true
end
