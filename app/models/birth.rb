class Birth < ApplicationRecord
    belongs_to :child
    has_one :father
    has_one :mother
    belongs_to :hospital
end
