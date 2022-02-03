export const VisitForm = ({handleVisitSubmit, handleChange, handleSelectChange, child_id}) => {
    const options = [ "Select a visit", "First Home", "Two Week", "Four Week", "Eight Week", "Four Month", "Six Month", "Twelve Month", "Eighteen Month", "Two Year", "Three and a Half Year", "Other"]
    return(
        <div>
            <form onSubmit = {handleVisitSubmit}>
                <label>Visit age:<select type="text" className="record_inputs" name="visit-visit_age" onChange={handleSelectChange}>
                    {options.map(option => {
                        return <option value={option} key={option}>{option}</option>
                    })}
                </select>
                <label className="hidden" id="visit_ageinput">Enter an age: <input type="text" className="records_form_inputs" name="visit-visit_age" onChange={handleChange}/></label>
                </label>
                <label>Date:<input className="records_date_input" onChange={handleChange} type="date" name="visit-date"/></label>
                <label>Name of Doctor or Nurse: <input className="records_form_inputs" type="text" name="visit-name_of_nurse" onChange={handleChange}/></label>
                <label>Weight: <input className="records_form_inputs" type="text" name="visit-weight" onChange={handleChange}/></label>
                <label>Length: <input className="records_form_inputs" type="text" name="visit-length" onChange={handleChange}/></label>
                <label>Head Circumference: <input className="records_form_inputs" type="text" name="visit-head_circumference" onChange={handleChange}/></label>
                <input type="hidden" value={child_id} name="child_id"/>

                <input className="button_add_record_details" value="Add" type="submit"/>
            </form>
            
        </div>
    )
}