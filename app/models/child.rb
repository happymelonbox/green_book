class Child < ApplicationRecord
    has_one :birth
    has_one :user, through: :user_child
    has_one :father, through: :birth
    has_one :mother, through: :birth
end
