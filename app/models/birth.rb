class Birth < ApplicationRecord
    has_one :child
    has_one :father
    has_one :mother
    belongs_to :hospital
end
