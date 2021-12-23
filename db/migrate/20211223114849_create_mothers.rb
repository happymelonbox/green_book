class CreateMothers < ActiveRecord::Migration[7.0]
  def change
    create_table :mothers do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.integer :birth_day
      t.string :birth_month
      t.integer :birth_year
      t.string :nationality

      t.timestamps
    end
  end
end
