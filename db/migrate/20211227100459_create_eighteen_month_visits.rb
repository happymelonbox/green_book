class CreateEighteenMonthVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :eighteen_month_visits do |t|
      t.date :date

      t.timestamps
    end
  end
end