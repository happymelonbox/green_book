class Father < ApplicationRecord
    belongs_to :birth
    has_many :children
end
