class VitaminK < ApplicationRecord
    belongs_to :child

    validates :place_given, presence: true
    validates :date, presence: true
    validates :dose, presence: true
    validates :route, presence: true
    validates :given_by, presence: true
    validates :child_id, presence: true
end
