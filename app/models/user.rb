class User < ApplicationRecord
    has_secure_password

    has_many :children
    has_many :appointments, through: :children
    has_many :visits, through: :children
    has_many :births, through: :children
    has_many :fathers, through: :births

    validates :email, presence: true
    validates :email, uniqueness: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :address_unit_number, presence: true
    validates :address_street_number, presence: true
    validates :address_street_name, presence: true
    validates :address_suburb, presence: true
    validates :address_city, presence: true
    validates :address_state, presence: true
    validates :address_country, presence: true

    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    validates :contact_number, format: { with: /\A(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}\z/, on: :create}


    def self.from_omniauth(response)
        User.find_or_create_by(uid: response[:uid], provider: response[:provider]) do |u|
            u.email = response[:info][:email]
            u.password = SecureRandom.hex(15)
        end
    end


end
