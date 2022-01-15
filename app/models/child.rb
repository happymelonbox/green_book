class Child < ApplicationRecord
    belongs_to :user
    belongs_to :birth
    has_one :father, through: :birth
    has_one :mother, through: :birth
    has_one :hepatitis_b_vaccine
    has_many :visits
    has_many :vitamin_k
end
