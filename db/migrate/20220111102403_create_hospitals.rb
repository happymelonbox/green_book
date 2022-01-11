class CreateHospitals < ActiveRecord::Migration[7.0]
  def change
    create_table :hospitals do |t|
      t.string :name
      t.string :address_line_1
      t.string :address_line_2
      t.string :address_suburb
      t.string :address_state
      t.integer :address_postcode
      t.string :address_country

      t.timestamps
    end
  end
end
