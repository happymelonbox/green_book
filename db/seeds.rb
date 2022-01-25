
user = User.create!(username: "happymelon", first_name: "Justin", last_name: "Berger Howes", contact_number: "0478658779", address_unit_number: "Unit 1", address_street_number: "39A", address_street_name: "Balaclava Road", address_suburb: "St Kilda East", address_city: "Melbourne", address_state: "VIC", address_country: "Australia", email: "happymelonbox@gmail.com", password_digest: "$2a$12$lWh0fUQEsKTTR6rWFDxKq.2Hb7pF.h4rYdoAmeKs3maBEsd8syto6")

fathers = Father.create!([
    {first_name: "Adam", middle_name: "Stanley", last_name: "Jones", birth_day: 12, birth_month: 5, birth_year: 1982, nationality: "Australia"},
    {first_name: "Justin", middle_name: "James", last_name: "Berger Howes", birth_day: 6, birth_month: 6, birth_year: 1983, nationality: "United States of America"},
    {first_name: "Justin", middle_name: "Paul", last_name: "Chancellor", birth_day: 12, birth_month: 1, birth_year: 1980, nationality: "Australia"}
])

mothers = Mother.create!([
    {first_name: "Mary", middle_name: "Kate", last_name: "Jones", birth_day: 14, birth_month: 2, birth_year: 1984, nationality: "Australia"},
    {first_name: "Meredith", middle_name: "Olivia", last_name: "Chancellor", birth_day: 12, birth_month: 1, birth_year: 1980, nationality: "Australia"},
    {first_name: "Nathalie", middle_name: "Judy", last_name: "Berger Howes", birth_day: 24, birth_month: 8, birth_year: 1994, nationality: "Australia"}
])

children = user.children.create!([
    {first_name: "James", middle_name: "Jack", last_name: "Jones", user_id: 1},
    {first_name: "Olive", middle_name: "Grace", last_name: "Chancellor", user_id: 1},
    {first_name: "Sarah", middle_name: "Kate", last_name: "Jones", user_id: 1},
    {first_name: "Jake", middle_name: "Simon", last_name: "Berger Howes", user_id: 1},
])

hospitals = Hospital.create!([
    {name: "Cabrini" , address_line_1: "181 Wattletree Road", address_line_2: "", address_suburb: "Malvern", address_state: "Victoria", address_postcode: 3144, address_country: "Australia", address_city: "Melbourne"},
    {name: "The Alfred", address_line_1: "55 Commercial Road", address_line_2: "", address_suburb: "Melbourne", address_state: "Victoria", address_postcode: 3004, address_country: "Australia", address_city: "Melbourne"},
    {name: "Sandringham General", address_line_1: "193 Bluff Road", address_line_2: "", address_suburb: "Sandringham", address_state: "Victoria", address_postcode: 3191, address_country: "Australia", address_city: "Melbourne"},
    {name: "Caulfield Private", address_line_1: "260-294 Kooyong Road", address_line_2: "", address_suburb: "Caulfield", address_state: "Victoria", address_postcode: 3162, address_country: "Australia", address_city: "Melbourne"}
    ])

births = Birth.create!([
    {birth_day: 12, birth_month: 6, birth_year: 2020, home_birth: "true", examiner_name: "Scott Morris", delivery_method: "Emergency Caesarian", delivery_time: "2020-06-12T10:30:00.000Z", severe_jaundice: "false", weight: 7.5, length: 35, head_circumference: 28, estimated_gestation: 38, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2020-06-13T00:00:00.000Z", apgar_one_minute: 7, apgar_five_minute: 9, problems_requiring_treatment: "", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 1, child_id: 1, mother_id: 1, father_id: 1},
    {birth_day: 15, birth_month: 8, birth_year: 2020, home_birth: "false", examiner_name: "Simon Jones", delivery_method: "Natural", delivery_time: "2020-08-15T20:45:00.000Z", severe_jaundice: "false", weight: 3.6, length: 55, head_circumference: 32, estimated_gestation: 40, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2020-08-16T00:00:00.000Z", apgar_one_minute: 9, apgar_five_minute: 9, problems_requiring_treatment: "", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 1, child_id: 2, mother_id: 3, father_id: 3},
    {birth_day: 13, birth_month: 9, birth_year: 2021, home_birth: "false", examiner_name: "Daniel Craig", delivery_method: "Natural", delivery_time: "2021-09-13T13:50:00.000Z", severe_jaundice: "false", weight: 4.2, length: 32, head_circumference: 31, estimated_gestation: 41, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2021-09-14T00:00:00.000Z", apgar_one_minute: 7, apgar_five_minute: 9, problems_requiring_treatment: "Blocked sinuses - Aspirated", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 2, child_id: 3, mother_id: 1, father_id: 1},
    {birth_day: 10, birth_month: 9, birth_year: 2021, home_birth: "false", examiner_name: "George Harrison", delivery_method: "Elective Caesarian", delivery_time: "2021-11-09T01:34:00.000Z", severe_jaundice: "false", weight: 5.2, length: 35, head_circumference: 28, estimated_gestation: 39, exchange_transfusion_for_jaundice: "false", newborn_bloodspot_screening_test_completed: "true", bloodspot_sample_date: "2021-11-10T00:00:00.000Z", apgar_one_minute: 8, apgar_five_minute: 8, problems_requiring_treatment: "", admission_to_intensive_care_nursery_48hours: "false", intensive_care_reason: "", admission_to_special_care_nursery_48hours: "false", special_care_reason: "", hospital_id: 3, child_id: 4, mother_id: 3, father_id: 2},
])

hepBVaccines = HepatitisBVaccine.create!([
    {place_given: "St Kilda Medical Group", date: "2020-09-12T00:00:00.000Z", dose: "First", batch_no: 122215, given_by: "John Smith", child_id: 1},
    {place_given: "MyClinic - Elsternwick", date: "2020-12-15T00:00:00.000Z", dose: "First", batch_no: 215548, given_by: "Victoria Little", child_id: 2},
    {place_given: "MyClinic - Elsternwick", date: "2022-01-10T00:00:00.000Z", dose: "First", batch_no: 031256, given_by: "Victoria Little", child_id: 3},
    {place_given: "Ripponlea Medical", date: "2022-03-09T00:00:00.000Z", dose: "First", batch_no: 3236654, given_by: "Mary Scott", child_id: 4}
])

vitamin_ks = VitaminK.create!([
    {place_given: "St Kilda Medical Group", date: "2020-09-12T00:00:00.000Z", dose: "First", route: "Oral", given_by: "John Smith", child_id: 1},
    {place_given: "MyClinic - Elsternwick", date: "2020-12-15T00:00:00.000Z", dose: "First", route: "Injection", given_by: "Victoria Little", child_id: 2},
    {place_given: "MyClinic - Elsternwick", date: "2022-01-10T00:00:00.000Z", dose: "First", route: "Oral", given_by: "Victoria Little", child_id: 3},
    {place_given: "Ripponlea Medical", date: "2022-03-09T00:00:00.000Z", dose: "First", route: "Oral", given_by: "Mary Scott", child_id: 4},
])

appointments = Appointment.create!([
    {reason: "Paediatrician", date_and_time: "2022-03-01T10:00:00.000Z", location_name: "Cabrini Hospital", location_address_number: "181 ", location_street_name: "Wattletree Road", location_suburb: "Malvern", location_postcode: 3125, location_city: "Melbourne", location_state: "VIC", location_country: "Australia", location_contact_number: "85622144", visit_age: "", child_id: 4},
    {reason: "GP", date_and_time: "2022-01-29T14:30:00.000Z", location_name: "St Kilda Medical Group", location_address_number: "6", location_street_name: "Grey Street", location_suburb: "St Kilda", location_postcode: 3183, location_city: "Melbourne", location_state: "VIC", location_country: "Australia", location_contact_number: "95542353", visit_age: "", child_id: 2},
    {reason: "MCHS Visit", date_and_time: "2022-02-02T10:00:00.000Z", location_name: "MCHS Clinic Elsternwick", location_address_number: "274", location_street_name: "Glen Eira Road", location_suburb: "Elsternwick", location_postcode: 3185, location_city: "Melbourne", location_state: "VIC", location_country: "Australia", location_contact_number: "95281895", visit_age: "Two Week", child_id: 3}
])

immunisations = Immunisation.create!([
    {age: "2 Months", vaccination_name: "Pevenar13", protects_against: "Pneumococcal", batch_number: "CM5593", date_given: "2020-08-12", nurse_name: "Hugh", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-10-12", child_id: 1},
    {age: "2 Months", vaccination_name: "Infanrixhexa", protects_against: "Diptheria, Tetanus, Pertussis", batch_number: "AROL648AA", date_given: "2020-08-12", nurse_name: "Hugh", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-10-12", child_id: 1},
    {age: "2 Months", vaccination_name: "Rotarix", protects_against: "Rotovirus", batch_number: "A21CD696B", date_given: "2020-08-12", nurse_name: "Hugh", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-10-12", child_id: 1},
    {age: "4 Months", vaccination_name: "Pevenar13", protects_against: "Pneumococcal", batch_number: "PAA141109", date_given: "2020-10-15", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-12-15", child_id: 1},
    {age: "4 Months", vaccination_name: "Infanrixhexa", protects_against: "Diptheria, Tetanus, Pertussis", batch_number: "A21CD857A", date_given: "2020-10-15", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-12-15", child_id: 1},
    {age: "4 Months", vaccination_name: "Rotarix", protects_against: "Rotovirus", batch_number: "AROLC698AC", date_given: "2020-10-15", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-12-15", child_id: 1},
    {age: "6 Months", vaccination_name: "Infanrixhexa", protects_against: "Diptheria, Tetanus, Pertussis", batch_number: "A21CD857A", date_given: "2020-12-15", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "", child_id: 1},
    {age: "10 Months", vaccination_name: "Bexsero", protects_against: "Meningitis B", batch_number: "ABXB50AA", date_given: "2021-04-20", nurse_name: "Mark", clinic: "St Kilda Medical Group", date_of_next_dose: "", child_id: 1},
    {age: "2 Months", vaccination_name: "Pevenar13", protects_against: "Pneumococcal", batch_number: "CM5597", date_given: "2020-10-16", nurse_name: "Sarah", clinic: "Ripponlea Medical", date_of_next_dose: "2020-12-12", child_id: 2},
    {age: "2 Months", vaccination_name: "Infanrixhexa", protects_against: "Diptheria, Tetanus, Pertussis", batch_number: "AROL648GS", date_given: "2020-10-16", nurse_name: "Sarah", clinic: "Ripponlea Medical", date_of_next_dose: "2020-12-12", child_id: 2},
    {age: "2 Months", vaccination_name: "Rotarix", protects_against: "Rotovirus", batch_number: "A21CD696H", date_given: "2020-10-16", nurse_name: "Sarah", clinic: "Ripponlea Medical", date_of_next_dose: "2020-12-12", child_id: 2},
    {age: "4 Months", vaccination_name: "Pevenar13", protects_against: "Pneumococcal", batch_number: "PAA141165", date_given: "2020-12-12", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-02-15", child_id: 2},
    {age: "4 Months", vaccination_name: "Infanrixhexa", protects_against: "Diptheria, Tetanus, Pertussis", batch_number: "A21CD896A", date_given: "2020-12-12", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-02-15", child_id: 2},
    {age: "4 Months", vaccination_name: "Rotarix", protects_against: "Rotovirus", batch_number: "AROLC6948C", date_given: "2020-12-12", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "2020-02-15", child_id: 2},
    {age: "6 Months", vaccination_name: "Infanrixhexa", protects_against: "Diptheria, Tetanus, Pertussis", batch_number: "A54CD822A", date_given: "2020-02-15", nurse_name: "Megan", clinic: "MyClinic Elsternwick", date_of_next_dose: "", child_id: 2},
    {age: "10 Months", vaccination_name: "Bexsero", protects_against: "Meningitis B", batch_number: "ABXB90HG", date_given: "2021-08-20", nurse_name: "Mark", clinic: "St Kilda Medical Group", date_of_next_dose: "", child_id: 2}
])

visits = Visit.create!([
    {visit_age: "First Home", date: "2020-06-15", name_of_nurse: "", weight: "3.775", head_circumference: "36.5", length: "52", child_id: 1},
    {visit_age: "Two Week", date: "2020-06-26", name_of_nurse: "Robyn", weight: "3.825", head_circumference: "37.5", length: "53", child_id: 1},
    {visit_age: "Four Week", date: "2020-07-11", name_of_nurse: "Robyn", weight: "4.340", head_circumference: "38.5", length: "55.5", child_id: 1},
    {visit_age: "Eight Week", date: "2020-08-13", name_of_nurse: "Robyn", weight: "5.310", head_circumference: "41", length: "58.5", child_id: 1},
    {visit_age: "Four Month", date: "2020-10-20", name_of_nurse: "Robyn", weight: "7.310", head_circumference: "43", length: "63", child_id: 1},
    {visit_age: "Six Month", date: "2020-12-20", name_of_nurse: "Robyn", weight: "8.295", head_circumference: "45", length: "65", child_id: 1}
])