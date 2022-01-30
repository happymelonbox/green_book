class Father < ApplicationRecord
    has_many :births
    has_many :children, through: :births

    validates :middle_name, presence: true
    validates :last_name, presence: true
    validates :birth_day, presence: true
    validates :birth_month, presence: true
    validates :birth_year, presence: true
    validates :nationality, presence: true
    validates :first_name, presence: true
end
