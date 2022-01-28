export const HepatitisBForm = ({handleHepBSubmit, handleChange, child_id}) => {
    const options = ["Select a dose", "First", "Second", "Third", "Fourth", "Fifth"]
    return(
        <form onSubmit = {handleHepBSubmit}>
            <label>Clinic Name:<input onChange={handleChange} type="text" name="vitamink_place_given"/></label><br/>
            <label>Date:<input onChange={handleChange} type="date" name="vitamink_date"/></label><br/>
            <label>Dose:<select onChange={handleChange} type="text" name="vitamink_dose">
                {options.map(option => {
                    return(<option key={option} value={option}>{option}</option>)
                })}
                </select>
            </label><br/>
            <label>Given by:
                <input onChange = {handleChange} type="radio" name="vitamink_route" value="Oral"/><label>Mouth</label>
                <input onChange = {handleChange} type="radio" name="vitamink_route" value="Injection"/><label>Injection</label>
            </label><br/>
            <label>Name of Doctor or Nurse: <input type="text" name="vitamink_given_by" onChange={handleChange}/></label><br/>
            <input type="hidden" value={child_id} name="child_id"/>

            <button type="submit">Add</button>
        </form>
    )
}