class AddChildRefToHepatitisBVaccines < ActiveRecord::Migration[7.0]
  def change
    add_reference :hepatitis_b_vaccines, :child, index: true
  end
end
