class CreateChildren < ActiveRecord::Migration[6.1]
  def change
    create_table :children do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
