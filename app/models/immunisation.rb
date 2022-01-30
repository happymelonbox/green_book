class Immunisation < ApplicationRecord
    belongs_to :child

    validates :age, presence: true
    validates :vaccination_name, presence: true
    validates :protects_against, presence: true
    validates :batch_number, presence: true
    validates :date_given, presence: true
    validates :nurse_name, presence: true
    validates :clinic, presence: true
    validates :date_of_next_dose, presence: true
    validates :child_id, presence: true
end
