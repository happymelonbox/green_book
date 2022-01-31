class CreateImmunisations < ActiveRecord::Migration[7.0]
  def change
    create_table :immunisations do |t|
      t.string :age
      t.string :vaccination_name
      t.string :protects_against
      t.string :batch_number
      t.date :date_given
      t.string :nurse_name
      t.string :clinic
      t.string :date_of_next_dose

      t.timestamps

      t.references :child, index: true, foreign_key: true
    end
  end
end
