export const HepatitisBForm = ({handleHepBSubmit, handleHepBEditSubmit, handleChange, child_id, button, hepB}) => {
    const options = ["Select a dose", "First", "Second", "Third", "Fourth", "Fifth"]
    function handleSubmit(event){
        event.preventDefault()
        button === "Add" ? handleHepBSubmit(event) : handleHepBEditSubmit(event)
    }
    return(
        <form onSubmit = {handleSubmit}>
            <label>Clinic Name:<input onChange={handleChange} type="text" name="hepatitis_b_vaccine-place_given"/></label><br/>
            <label>Date:<input onChange={handleChange} type="date" name="hepatitis_b_vaccine-date"/></label><br/>
            <label>Given by:
                <select onChange={handleChange} name="hepatitis_b_vaccine-route">
                    <option value="oral">Mouth</option>
                    <option value="injection">Injection</option>
                </select>
            </label><br/>
            <label>Name of Doctor or Nurse: <input type="text" name="hepatitis_b_vaccine-given_by" onChange={handleChange}/></label><br/>

            <button type="submit">{button}</button>
        </form>
    )
}