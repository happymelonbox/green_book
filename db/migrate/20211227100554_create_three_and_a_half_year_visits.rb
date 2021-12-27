class CreateThreeAndAHalfYearVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :three_and_a_half_year_visits do |t|
      t.date :date

      t.timestamps
    end
  end
end
