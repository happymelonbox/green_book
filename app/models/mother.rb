class Mother < ApplicationRecord
    has_many :births
    has_many :children, through: :births

    validates :first_name, presence: true
    validates :middle_name, presence: true
    validates :last_name, presence: true
    validates :birth_day, presence: true
    validates :birth_month, presence: true
    validates :birth_year, presence: true
    validates :nationality, presence: true
end
