# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_20_111431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "births", force: :cascade do |t|
    t.integer "birth_day"
    t.integer "birth_month"
    t.integer "birth_year"
    t.boolean "home_birth"
    t.string "examiner_name"
    t.string "delivery_method"
    t.time "delivery_time"
    t.boolean "severe_jaundice"
    t.integer "weight"
    t.integer "length"
    t.float "head_circumference"
    t.float "estimated_gestation"
    t.boolean "exchange_transfusion_for_jaundice"
    t.boolean "newborn_bloodspot_screening_test_completed"
    t.date "bloodspot_sample_date"
    t.integer "apgar_one_minute"
    t.integer "apgar_five_minute"
    t.string "problems_requiring_treatment"
    t.boolean "admission_to_intensive_care_nursery_48hours"
    t.string "intensive_care_reason"
    t.boolean "admission_to_special_care_nursery_48hours"
    t.string "special_care_reason"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "father_id"
    t.bigint "mother_id"
    t.bigint "hospital_id"
    t.bigint "child_id"
    t.index ["child_id"], name: "index_births_on_child_id"
    t.index ["father_id"], name: "index_births_on_father_id"
    t.index ["hospital_id"], name: "index_births_on_hospital_id"
    t.index ["mother_id"], name: "index_births_on_mother_id"
  end

  create_table "children", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_children_on_user_id"
  end

  create_table "fathers", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.integer "birth_day"
    t.string "birth_month"
    t.integer "birth_year"
    t.string "nationality"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hepatitis_b_vaccines", force: :cascade do |t|
    t.string "place_given"
    t.date "date"
    t.string "dose"
    t.integer "batch_no"
    t.string "given_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "child_id"
    t.index ["child_id"], name: "index_hepatitis_b_vaccines_on_child_id"
  end

  create_table "hospitals", force: :cascade do |t|
    t.string "name"
    t.string "address_line_1"
    t.string "address_line_2"
    t.string "address_suburb"
    t.string "address_state"
    t.integer "address_postcode"
    t.string "address_country"
    t.string "address_city"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "mothers", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.integer "birth_day"
    t.string "birth_month"
    t.integer "birth_year"
    t.string "nationality"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notes", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.string "notable_type"
    t.bigint "notable_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["notable_type", "notable_id"], name: "index_notes_on_notable"
  end

  create_table "questions", force: :cascade do |t|
    t.string "genre"
    t.string "question"
    t.string "questionable_type"
    t.bigint "questionable_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["questionable_type", "questionable_id"], name: "index_questions_on_questionable"
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "contact_number"
    t.string "address_unit_number"
    t.string "address_street_number"
    t.string "address_street_name"
    t.string "address_suburb"
    t.string "address_city"
    t.string "address_state"
    t.string "address_country"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "uid"
    t.string "provider"
  end

  create_table "visits", force: :cascade do |t|
    t.string "visit_age"
    t.datetime "date_and_time", precision: 6
    t.string "name_of_nurse"
    t.float "weight"
    t.float "head_circumference"
    t.float "length"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "child_id"
    t.index ["child_id"], name: "index_visits_on_child_id"
  end

  create_table "vitamin_ks", force: :cascade do |t|
    t.string "place_given"
    t.date "date"
    t.string "dose"
    t.string "route"
    t.string "given_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "child_id"
    t.index ["child_id"], name: "index_vitamin_ks_on_child_id"
  end

  add_foreign_key "questions", "users"
end
