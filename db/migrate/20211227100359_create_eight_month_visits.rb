class CreateEightMonthVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :eight_month_visits do |t|
      t.date :date

      t.timestamps
    end
  end
end
