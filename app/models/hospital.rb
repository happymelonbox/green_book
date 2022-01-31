class Hospital < ApplicationRecord
    has_many :births

    validates  :name, presence: true
    validates  :address_line_1, presence: true
    validates  :address_suburb, presence: true
    validates  :address_state, presence: true
    validates  :address_postcode, presence: true
    validates  :address_country, presence: true
    validates  :address_city, presence: true
    validates :contact_number, format: { with: /\A(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}\z/, on: :create}

end
