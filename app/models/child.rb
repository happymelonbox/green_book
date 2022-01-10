class Child < ApplicationRecord
    has_one :child_birth
    has_one :birth, through: :child_birth
    has_one :user, through: :user_child
    has_one :father, through: :birth
    has_one :mother, through: :birth
end
