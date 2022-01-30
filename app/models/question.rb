class Question < ApplicationRecord
    belongs_to :questionable, polymorphic: true
    belongs_to :user

    validates :genre, presence: true
    validates :question, presence: true
    validates :questionable_type, presence: true
    validates :questionable_id, presence: true
    validates :questionable_id, uniqueness: true
    validates :user_id, presence: true
end
