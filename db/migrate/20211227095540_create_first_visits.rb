class CreateFirstVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :first_visits do |t|
      t.date :date

      t.timestamps
    end
  end
end
