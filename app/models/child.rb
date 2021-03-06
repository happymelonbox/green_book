class Child < ApplicationRecord
    belongs_to :user
    has_one :birth
    has_one :father, through: :birth
    has_one :mother, through: :birth
    has_one :hepatitis_b_vaccine
    has_many :appointments
    has_many :vitamin_ks
    has_many :visits
    has_many :immunisations

    validates :first_name, presence: true
    validates :middle_name, presence: true
    validates :last_name, presence: true
    validates :user_id, presence: true
end
