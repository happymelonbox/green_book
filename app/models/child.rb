class Child < ApplicationRecord

    validates :mother, presence: true
    validates :father, presence: true
    validates :user_id, presence: true

    has_one :birth
    belongs_to :mother
    belongs_to :father
    belongs_to :user
    
end
