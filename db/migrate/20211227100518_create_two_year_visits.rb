class CreateTwoYearVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :two_year_visits do |t|
      t.date :date

      t.timestamps
    end
  end
end
