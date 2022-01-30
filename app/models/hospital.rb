class Hospital < ApplicationRecord
    has_many :births

    validates  :name, presence: true
    validates  :address_line_1, presence: true
    validates  :address_line_2, presence: true
    validates  :address_suburb, presence: true
    validates  :address_state, presence: true
    validates  :address_postcode, presence: true
    validates  :address_country, presence: true
    validates  :address_city, presence: true
    validates  :contact_number, phone: { possible: true, allow_blank: true, types: [:voip, :mobile] }
end
