class Father < ApplicationRecord
    has_many :births
    has_many :children, through: :births
end
