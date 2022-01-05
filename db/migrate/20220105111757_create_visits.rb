class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.string :visit_age
      t.datetime :date_and_time
      t.string :name_of_nurse
      t.float :weight
      t.float :head_circumference
      t.float :length

      t.timestamps
    end
  end
end
