export const BirthDetails = ({child, birth, hospitals, hospitalName, handleClick, handleChange, handleBirthEditSubmit}) => {

    return(
        <div>
            <form id="birth_details_container" onSubmit={handleBirthEditSubmit}>
            <label>Full name: {child.first_name} {child.middle_name} {child.last_name}<br/><br/></label>
            <label className={`${birth.id}_edit hidden`}>Birth day: <input className={`${birth.id}_edit birth_inputs hidden`} type="number" name="birth-birth_day" onChange = {handleChange}/></label>
            <label className={`${birth.id}_edit hidden`}>Birth month: <input className={`${birth.id}_edit birth_inputs hidden`} type="number" name="birth-birth_month" onChange = {handleChange}/></label>
            <label className={`${birth.id}_edit hidden`}>Birth Year: <input className={`${birth.id}_edit birth_inputs hidden`} type="number" name="birth-birth_year"  onChange = {handleChange}/></label>
                <label>Home Birth: {birth.home_birth ? "Yes" : "No" }<select name="birth-home_birth" defaultValue="Select Value" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    </select></label><br className="birth_breaks"/>
                {birth.home_birth
                ?
                null
                :
                <label>Hospital: {hospitalName}
                    <select name="birth-hospital_id" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                        {hospitals.map(hospital=>{return(<option key={hospital.id} value={hospital.id}>{hospital.name}</option>)})}
                    </select> <br className="birth_breaks"/>
                </label>}
                <label>Examined By: {birth.examiner_name} <input name="birth-examiner_name" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Delivery Method: {birth.delivery_method ? birth.delivery_method : "Not Supplied"} <select name="birth-delivery_method" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                    <option value="Elective Caesarian">Elective Caesarian</option>
                    <option value="Emergency Caesarian">Emergency Caesarian</option>
                    <option value="Natural">Natural</option>
                    <option value="Induced">Induced</option>
                    </select></label><br className="birth_breaks"/>
                <label>Delivery Time: {new Date(birth.delivery_time).toString().split(" ")[4].slice(0,5)} <input type="time" name="birth-delivery_time" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Severe Jaundice? {birth.severe_jaundice ? "Yes" : "No"}<select name="birth-severe_jaundice" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                    <option value="Select">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    </select></label><br className="birth_breaks"/>
                <label>Weight: {birth.weight ? birth.weight : "0"} kg<input type="number" step="0.01" name="birth-weight" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Length: {birth.length ? birth.length : "0"} cm<input type="number" step="0.01" name="birth-length" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Head Circumference: {birth.head_circumference ? birth.head_circumference : "0"} cm<input type="number" step="0.01" name="birth-head_circumference" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Estimated Gestation: {birth.estimated_gestation} weeks<input type="number" name="birth-estimated_gestation" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Newborn bloodspot screening complete? {birth.newborn_bloodspot_screening_test_completed ? "Yes" : "No"}<select name="birth-newborn_bloodspot_screening_test_completed" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                    <option value="Select">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    </select></label><br className="birth_breaks"/>
                <label>{birth.newborn_bloodspot_screening_test_completed ? "Bloodspot Date: " + new Date(birth.bloodspot_sample_date).toString().slice(0,15) : null}<input type="date" name="birth-birth.bloodspot_sample_date" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Apgar One Minute: {birth.apgar_one_minute}<input type="number" name="birth-apgar_one_minute" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Apgar Five Minute: {birth.apgar_five_minute}<input type="number" name="birth-apgar_five_minute" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Problems Requiring Treatment: {birth.problems_requiring_treatment ? birth.problems_requiring_treatment : "None"}<input type="string" name="birth-problems_requiring_treatment" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Exchange Transfusion for Jaundice: {birth.exchange_transfusion_for_jaundice ? " Yes" : "N/A"}<select name="birth-exchange_transfusion_for_jaundice" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                    <option value="Select">Select</option>
                    <option value="true">Yes</option>
                    </select></label><br className="birth_breaks"/>
                <label>Admission To Intensive Care Nursery in First 48 Hours? {birth.admission_to_intensive_care_nursery_48hours ? "Yes" : "No" }<select name="birth-admission_to_intensive_care_nursery_48hours" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                    <option value="Select">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    </select></label><br className="birth_breaks"/>
                <label>Intensive Care Reason:{birth.admission_to_intensive_care_nursery_48hours ? `${birth.intensive_care_reason}` : " N/A"}<input name="birth-intensive_care_reason" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <label>Admission To Special Care Nursery in First 48 Hours? {birth.admission_to_special_care_nursery_48hours ? "Yes" : "No" }<select name="admission_to_special_care_nursery_48hours" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}>
                    <option value="Select">Select</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    </select></label><br className="birth_breaks"/>
                <label>Intensive Care Reason: {birth.admission_to_special_care_nursery_48hours ? `${birth.special_care_reason}` : " N/A"}<input name="birth-special_care_reason" className={`${birth.id}_edit birth_inputs hidden`} onChange = {handleChange}/></label><br className="birth_breaks"/>
                <input value={birth.id} type="hidden" name="birth_id"/>
                <input className={`${birth.id}_edit birth_inputs hidden`} id="birth_inputs_submit" value="Submit changes" type="submit" />
            </form>
            <button id = {`${birth.id}_edit-birth_inputs`} className="button_edit_birth_details" onClick={handleClick}>Edit Birth Details</button>
        </div>
    )
}