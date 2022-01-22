class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true
    validates :email, uniqueness: true

    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

    has_many :children
    has_many :appointments, through: :children
    has_many :visits, through: :children

    def self.from_omniauth(response)
        User.find_or_create_by(uid: response[:uid], provider: response[:provider]) do |u|
            u.email = response[:info][:email]
            u.password = SecureRandom.hex(15)
        end
    end

end
