class User < ApplicationRecord
    has_secure_password

    has_many :children
    has_many :appointments, through: :children
    has_many :visits, through: :children
    has_many :births, through: :children
    has_many :fathers, through: :births

    validates :email, presence: true
    validates :email, uniqueness: true


    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
    validates :contact_number, format: { with: /\A(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}\z/, on: :create}


    def self.from_omniauth(response)
        User.find_or_create_by!(uid: response[:uid], provider: response[:provider]) do |u|
            u.email = response[:info][:email]
            u.password = SecureRandom.hex(15)
            u.first_name = response[:info][:first_name]
            u.last_name = response[:info][:last_name]
        end
    end


end
