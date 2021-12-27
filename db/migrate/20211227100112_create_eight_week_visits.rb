class CreateEightWeekVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :eight_week_visits do |t|
      t.string :date

      t.timestamps
    end
  end
end
