class User < ApplicationRecord
    has_secure_password

    has_many :children
    has_many :appointments, through: :children
    has_many :visits, through: :children
    has_many :births, through: :children
    has_many :fathers, through: :births


    def self.from_omniauth(response)
        User.find_or_create_by(uid: response[:uid], provider: response[:provider]) do |u|
            u.email = response[:info][:email]
            u.password = SecureRandom.hex(15)
            u.first_name = response[:info][:first_name]
            u.last_name =  response[:info][:last_name]
        end
    end


end
