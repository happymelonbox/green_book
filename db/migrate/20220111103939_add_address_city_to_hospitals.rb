class AddAddressCityToHospitals < ActiveRecord::Migration[7.0]
  def change
    add_column :hospitals, :address_city, :string
  end
end
