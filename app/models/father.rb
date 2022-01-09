class Father < ApplicationRecord
    belongs_to :birth
    has_many :children, through: :birth
end
