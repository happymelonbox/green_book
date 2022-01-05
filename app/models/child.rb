class Child < ApplicationRecord
    has_one :birth
    belongs_to :mother
    belongs_to :user
    belongs_to :father
    
end
