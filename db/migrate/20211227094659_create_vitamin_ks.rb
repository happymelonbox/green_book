class CreateVitaminKs < ActiveRecord::Migration[7.0]
  def change
    create_table :vitamin_ks do |t|
      t.string :place_given
      t.date :date
      t.string :dose
      t.string :route
      t.string :given_by
      t.references :child, index: true, foreign_key: true

      t.timestamps
    end
  end
end
