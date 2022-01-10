class CreateChildBirths < ActiveRecord::Migration[7.0]
  def change
    create_table :child_births do |t|
      t.integer :child_id
      t.integer :birth_id

      t.timestamps
    end
  end
end
