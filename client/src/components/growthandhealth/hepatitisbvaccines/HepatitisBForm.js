export const HepatitisBForm = ({handleHepBSubmit, handleHepBEditSubmit, handleChange, child_id, button}) => {
    function handleSubmit(event){
        event.preventDefault()
        button === "Add" ? handleHepBSubmit(event) : handleHepBEditSubmit(event)
    }
    return(
        <div>
        <form className="record_form" onSubmit = {handleSubmit}>
            <label>Clinic Name:<input className="records_form_inputs" onChange={handleChange} type="text" name="hepatitis_b_vaccine-place_given"/></label>
            <label>Date:<input className="records_date_input" onChange={handleChange} type="date" name="hepatitis_b_vaccine-date"/></label>
            <label>Given by:
                <select className="record_inputs" onChange={handleChange} name="hepatitis_b_vaccine-route">
                    <option value="oral">Mouth</option>
                    <option value="injection">Injection</option>
                </select>
            </label><br/>
            <label>Name of Doctor or Nurse: <input className="records_form_inputs" type="text" name="hepatitis_b_vaccine-given_by" onChange={handleChange}/></label>
            <input type="hidden" value={child_id} name="child_id"/>

            <input className="button_add_record_details" value={`Submit ${button}`} type="submit"/>
        </form>
    </div>
    )
}