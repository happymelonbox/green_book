export const ImmunisationForm = ({handleImmunisationSubmit, handleImmEditSubmit, handleChange, handleSelectChange, child_id, button}) => {
    const options = ["Select an Age", "Six Weeks", "Four Months", "Six Months", "Ten Months", "Twelve Months", "Eighteen Months", "Four Years"]
    function handleSubmit(event){
        event.preventDefault()
        button === "Add" ? handleImmunisationSubmit(event) : handleImmEditSubmit(event)
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
            <label><select name="immunisation-age" onChange={handleSelectChange}>
                {options.map(option=>{
                    return <option value={option} key={option}>{option}</option>
                })}
                </select></label><br/>
                <label className="hidden" id="ageinput">Enter an age: <input type="text" name="immunisation-age" onChange={handleChange}/><br/></label>
                <label>Date: <input type="date" name="immunisation-date_given" onChange={handleChange}/><br/></label>
                <label>Vaccination Name: <input type="text" name="immunisation-vaccination_name" onChange={handleChange}/><br/></label>
                <label>Protects against: <input type="text" name="immunisation-protects_against" onChange={handleChange}/><br/></label>
                <label>Batch number: <input type="text" name="immunisation-batch_number" onChange={handleChange}/><br/></label>
                <label>Clinic Name: <input type="text" name="immunisation-clinic" onChange={handleChange}/><br/></label>
                <label>Name of Doctor or Nurse: <input type="text" name="immunisation-nurse_name" onChange={handleChange}/><br/></label>
                <label>Date of Next Dose: (if last dose, enter todays date) <input type="date" name="immunisation-date_of_next_dose" onChange={handleChange}/><br/></label>
                <input type="hidden" value={child_id} name="child_id"/>

                <button type="submit">{button}</button>
            </form>
            <div>
                {
                    this.state.errors ? this.handleErrors() : null
                }
            </div>
        </div>
    )
}