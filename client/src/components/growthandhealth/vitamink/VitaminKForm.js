export const VitaminKForm = ({handleVitaminKSubmit, handleVitKEditSubmit, handleChange, child_id, button}) => {
    const options = ["Select a dose", "First", "Second", "Third"]
    function handleSubmit(event){
        event.preventDefault()
        button === "Add" ? handleVitaminKSubmit(event) : handleVitKEditSubmit(event)
    }
    return(
        <div>
            <form className="record_form" onSubmit = {handleSubmit}>
                <label>Clinic Name:<input className="records_form_inputs" onChange={handleChange} type="text" name="vitamink-place_given"/></label>
                <label>Date:<input className="records_date_input" onChange={handleChange} type="date" name="vitamink-date"/></label>
                <label>Dose:<select className="record_inputs" onChange={handleChange} type="text" name="vitamink-dose">
                    {options.map(option => {
                        return(<option key={option} value={option}>{option}</option>)
                    })}
                    </select>
                </label>
                <label >Given by:
                    <div className="records_radio_inputs">
                        <input onChange = {handleChange} type="radio" name="vitamink-route" value="Oral"/><label>Mouth</label>
                        <input onChange = {handleChange} type="radio" name="vitamink-route" value="Injection"/><label>Injection</label>
                    </div>
                </label>
                <label>Name of Doctor or Nurse: <input className="records_form_inputs" type="text" name="vitamink-given_by" onChange={handleChange}/></label>
                <input type="hidden" value={child_id} name="child_id"/>

                <input className="button_add_record_details" value={`Submit ${button}`} type="submit"/>
            </form>
        
        </div>
    )
}