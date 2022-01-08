class Child < ApplicationRecord

    has_one :birth
    belongs_to :user
end
