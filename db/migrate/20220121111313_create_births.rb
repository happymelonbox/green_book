class CreateBirths < ActiveRecord::Migration[7.0]
  def change
    create_table :births do |t|
      t.integer :birth_day
      t.integer :birth_month
      t.integer :birth_year
      t.boolean :home_birth
      t.string :examiner_name
      t.string :delivery_method
      t.time :delivery_time
      t.boolean :severe_jaundice
      t.integer :weight
      t.integer :length
      t.float :head_circumference
      t.float :estimated_gestation
      t.boolean :exchange_transfusion_for_jaundice
      t.boolean :newborn_bloodspot_screening_test_completed
      t.date :bloodspot_sample_date
      t.integer :apgar_one_minute
      t.integer :apgar_five_minute
      t.string :problems_requiring_treatment
      t.boolean :admission_to_intensive_care_nursery_48hours
      t.string :intensive_care_reason
      t.boolean :admission_to_special_care_nursery_48hours
      t.string :special_care_reason
      t.timestamps

      t.references :father, index: true, foreign_key: true
      t.references :mother, index: true, foreign_key: true
      t.references :hospital, index: true, foreign_key: true
      t.references :child, index: true, foreign_key: true
    end
  end
end