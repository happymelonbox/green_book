export const ImmunisationForm = ({handleImmunisationSubmit, handleImmEditSubmit, handleChange, handleSelectChange, child_id, button}) => {
    const options = ["Select an Age", "Six Weeks", "Four Months", "Six Months", "Ten Months", "Twelve Months", "Eighteen Months", "Four Years"]
    function handleSubmit(event){
        event.preventDefault()
        button === "Add" ? handleImmunisationSubmit(event) : handleImmEditSubmit(event)
    }
    return(
        <div>
            <form className="record_form" onSubmit = {handleSubmit}>
            <label><select className="record_inputs" name="immunisation-age" onChange={handleSelectChange}>
                {options.map(option=>{
                    return <option value={option} key={option}>{option}</option>
                })}
                </select></label>
                <label className="hidden" id="ageinput">Enter an age: <input className="records_form_inputs" type="text" name="immunisation-age" onChange={handleChange}/></label>
                <label>Date: <input className="records_date_input" type="date" name="immunisation-date_given" onChange={handleChange}/></label>
                <label>Vaccination Name: <input className="records_form_inputs" type="text" name="immunisation-vaccination_name" onChange={handleChange}/></label>
                <label>Protects against: <input className="records_form_inputs" type="text" name="immunisation-protects_against" onChange={handleChange}/></label>
                <label>Batch number: <input className="records_form_inputs" type="text" name="immunisation-batch_number" onChange={handleChange}/></label>
                <label>Clinic Name: <input className="records_form_inputs" type="text" name="immunisation-clinic" onChange={handleChange}/></label>
                <label>Name of Doctor or Nurse: <input className="records_form_inputs" type="text" name="immunisation-nurse_name" onChange={handleChange}/></label>
                <label>Date of Next Dose:<br/> (if last dose, enter todays date) <input className="records_date_input" type="date" name="immunisation-date_of_next_dose" onChange={handleChange}/></label>
                <input type="hidden" value={child_id} name="child_id"/>

                <input className="button_add_record_details" value={`Submit ${button}`} type="submit"/>
            </form>
        </div>
    )
}