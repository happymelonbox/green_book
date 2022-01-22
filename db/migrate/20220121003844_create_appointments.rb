class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :reason
      t.datetime :date_and_time
      t.string :location_name
      t.string :location_address_number
      t.string :location_street_name
      t.string :location_suburb
      t.integer :location_postcode
      t.string :location_city
      t.string :location_state
      t.string :location_country
      t.string :location_contact_number
      t.string :visit_age
      t.references :child, index: true, foreign_key: true

      t.timestamps
    end
  end
end
