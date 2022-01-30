class Note < ApplicationRecord
    belongs_to :notable, polymorphic: true
    belongs_to :user

    validates :title, presence: true
    validates :content, presence: true
    validates :notable_type, presence: true
    validates :notable_id, presence: true
    validates :notable_id, uniqueness: true
    validates :user_id, presence: true
end
