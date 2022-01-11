class Birth < ApplicationRecord
    has_one :child_birth
    has_one :birth, through: :child_birth
    belongs_to :hospital
end
