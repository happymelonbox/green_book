class CreateHepatitisBVaccines < ActiveRecord::Migration[7.0]
  def change
    create_table :hepatitis_b_vaccines do |t|
      t.string :place_given
      t.date :date
      t.string :dose
      t.integer :batch_no
      t.string :given_by

      t.timestamps
    end
  end
end
