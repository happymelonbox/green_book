class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :contact_number
      t.string :address_unit_number
      t.string :address_street_number
      t.string :address_street_name
      t.string :address_suburb
      t.string :address_city
      t.string :address_state
      t.string :address_country
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
