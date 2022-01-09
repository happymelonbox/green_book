class Child < ApplicationRecord

    has_one :birth
    has_one :user, through: :user_child
end
