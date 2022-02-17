class CreateHepatitisBVaccines < ActiveRecord::Migration[6.1]
  def change
    create_table :hepatitis_b_vaccines do |t|
      t.string :place_given
      t.date :date
      t.integer :batch_no
      t.string :given_by
      t.references :child, index: true, foreign_key: true

      t.timestamps
    end
  end
end
