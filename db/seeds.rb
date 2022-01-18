
users = User.create([
    {username: "happymelon", first_name: "Justin", last_name: "Berger Howes", contact_number: "0478658779", address_unit_number: "Unit 1", address_street_number: "39A", address_street_name: "Balaclava Road", address_suburb: "St Kilda East", address_city: "Melbourne", address_state: "VIC", address_country: "Australia", email: "howes.j.j@gmail.com", password_digest: "testingPassword"}
])
fathers = Father.create([
    {first_name: "Adam", middle_name: "Stanley", last_name: "Jones", birth_day: 12, birth_month: 5, birth_year: 1982, nationality: "Australia"},
    {first_name: "Justin", middle_name: "James", last_name: "Berger Howes", birth_day: 6, birth_month: 6, birth_year: 1983, nationality: "United States of America"},
    {first_name: "Justin", middle_name: "Paul", last_name: "Chancellor", birth_day: 12, birth_month: 1, birth_year: 1980, nationality: "Australia"}
])

mothers = Mother.create([
    {first_name: "Mary", middle_name: "Kate", last_name: "Jones", birth_day: 14, birth_month: 2, birth_year: 1984, nationality: "Australia"},
    {first_name: "Meredith", middle_name: "Olivia", last_name: "Chancellor", birth_day: 12, birth_month: 1, birth_year: 1980, nationality: "Australia"},
    {first_name: "Nathalie", middle_name: "Judy", last_name: "Berger Howes", birth_day: 24, birth_month: 8, birth_year: 1994, nationality: "Australia"}
])

children = Child.create([
    {first_name: "James", middle_name: "Jack", last_name: "Jones", user_id: 1},
    {first_name: "Olive", middle_name: "Grace", last_name: "Chancellor", user_id: 1},
    {first_name: "Sarah", middle_name: "Kate", last_name: "Jones", user_id: 1},
    {first_name: "Jake", middle_name: "Simon", last_name: "Berger Howes", user_id: 1},
])

hospitals = Hospital.create([
    {name: "Cabrini" , address_line_1: "181 Wattletree Road", address_line_2: "", address_suburb: "Malvern", address_state: "Victoria", address_postcode: 3144, address_country: "Australia", address_city: "Melbourne"},
    {name: "The Alfred", address_line_1: "55 Commercial Road", address_line_2: "", address_suburb: "Melbourne", address_state: "Victoria", address_postcode: 3004, address_country: "Australia", address_city: "Melbourne"},
    {name: "Sandringham General", address_line_1: "193 Bluff Road", address_line_2: "", address_suburb: "Sandringham", address_state: "Victoria", address_postcode: 3191, address_country: "Australia", address_city: "Melbourne"},
    {name: "Caulfield Private", address_line_1: "260-294 Kooyong Road", address_line_2: "", address_suburb: "Caulfield", address_state: "Victoria", address_postcode: 3162, address_country: "Australia", address_city: "Melbourne"}
    ])

births = Birth.create([
    {birth_day: 12, birth_month: 6, birth_year: 2020, home_birth: "true", examiner_name: "Scott Morris", delivery_method: "Emergency Caesarian", delivery_time: "2020-06-12T10:30:00.000Z", severe_jaundice: "false", weight: 7.5, length: 35, head_circumference: 28, estimated_gestation: 38, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2020-06-13T00:00:00.000Z", apgar_one_minute: 7, apgar_five_minute: 9, problems_requiring_treatment: "", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 1, child_id: 1, mother_id: 1, father_id: 1},
    {birth_day: 15, birth_month: 8, birth_year: 2020, home_birth: "false", examiner_name: "Simon Jones", delivery_method: "Natural", delivery_time: "2020-08-15T20:45:00.000Z", severe_jaundice: "false", weight: 3.6, length: 55, head_circumference: 32, estimated_gestation: 40, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2020-08-16T00:00:00.000Z", apgar_one_minute: 9, apgar_five_minute: 9, problems_requiring_treatment: "", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 1, child_id: 2, mother_id: 3, father_id: 3},
    {birth_day: 13, birth_month: 9, birth_year: 2021, home_birth: "false", examiner_name: "Daniel Craig", delivery_method: "Natural", delivery_time: "2021-09-13T13:50:00.000Z", severe_jaundice: "false", weight: 4.2, length: 32, head_circumference: 31, estimated_gestation: 41, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2021-09-14T00:00:00.000Z", apgar_one_minute: 7, apgar_five_minute: 9, problems_requiring_treatment: "Blocked sinuses - Aspirated", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 2, child_id: 3, mother_id: 1, father_id: 1},
    {birth_day: 10, birth_month: 9, birth_year: 2021, home_birth: "false", examiner_name: "George Harrison", delivery_method: "Elective Caesarian", delivery_time: "2021-11-09T01:34:00.000Z", severe_jaundice: "false", weight: 5.2, length: 35, head_circumference: 28, estimated_gestation: 39, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2021-11-10T00:00:00.000Z", apgar_one_minute: 8, apgar_five_minute: 8, problems_requiring_treatment: "", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 3, child_id: 4, mother_id: 3, father_id: 2},
])

hepBVaccines = HepatitisBVaccine.create([
    {place_given: "St Kilda Medical Group", date: "2020-09-12T00:00:00.000Z", dose: "First", batch_no: 122215, given_by: "John Smith", child_id: 1},
    {place_given: "MyClinic - Elsternwick", date: "2020-12-15T00:00:00.000Z", dose: "First", batch_no: 215548, given_by: "Victoria Little", child_id: 2},
    {place_given: "MyClinic - Elsternwick", date: "2022-01-10T00:00:00.000Z", dose: "First", batch_no: 031256, given_by: "Victoria Little", child_id: 3},
    {place_given: "Ripponlea Medical", date: "2022-03-09T00:00:00.000Z", dose: "First", batch_no: 3236654, given_by: "Mary Scott", child_id: 4}
])

visits = Visit.create([
    {visit_age: "Two Weeks", date_and_time: "2020-09-26T15:00:00.000Z", name_of_nurse: "Janine Morris", weight: 8.2, head_circumference: 31, length: 42, child_id: 1},
    {visit_age: "Two Weeks", date_and_time: "2021-01-03T15:30:00.000Z", name_of_nurse: "George Smith", weight: 4.5, head_circumference: 34, length: 60, child_id: 2},
    {visit_age: "Two Weeks", date_and_time: "2022-02-11T16:00:00.000Z", name_of_nurse: "Nicole Barb", weight: 4.6, head_circumference: 34, length: 35, child_id: 3},
    {visit_age: "Two Weeks", date_and_time: "2022-03-23T10:30:00.000Z", name_of_nurse: "Tiffany Grey", weight: 6.1, head_circumference: 30, length: 41,  child_id: 4}
])

vitamin_ks = VitaminK.create([
    {place_given: "St Kilda Medical Group", date: "2020-09-12T00:00:00.000Z", dose: "First", route: "Oral", given_by: "John Smith", child_id: 1},
    {place_given: "MyClinic - Elsternwick", date: "2020-12-15T00:00:00.000Z", dose: "First", route: "Injection", given_by: "Victoria Little", child_id: 2},
    {place_given: "MyClinic - Elsternwick", date: "2022-01-10T00:00:00.000Z", dose: "First", route: "Oral", given_by: "Victoria Little", child_id: 3},
    {place_given: "Ripponlea Medical", date: "2022-03-09T00:00:00.000Z", dose: "First", route: "Oral", given_by: "Mary Scott", child_id: 4},
])