class CreateUserChildren < ActiveRecord::Migration[7.0]
  def change
    create_table :user_children do |t|
      t.integer :user_id
      t.integer :child_id

      t.timestamps
    end
  end
end
