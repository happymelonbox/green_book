class Visit < ApplicationRecord
    belongs_to :child

    validates :visit_age, presence: true
    validates :date, presence: true
    validates :name_of_nurse, presence: true
    validates :weight, presence: true
    validates :head_circumference, presence: true
    validates :length, presence: true
    validates :child_id, presence: true
end
