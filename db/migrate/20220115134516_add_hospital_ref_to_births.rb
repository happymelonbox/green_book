class AddHospitalRefToBirths < ActiveRecord::Migration[7.0]
  def change
    add_reference :births, :hospital, index: true
  end
end
