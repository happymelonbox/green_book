export const VisitForm = ({handleVisitSubmit, handleChange, handleSelectChange, child_id}) => {
    const options = [ "Select a visit", "First Home", "Two Week", "Four Week", "Eight Week", "Four Month", "Six Month", "Twelve Month", "Eighteen Month", "Two Year", "Three and a Half Year", "Other"]
    return(
        <form onSubmit = {handleVisitSubmit}>
            <label>Visit age:<select type="text" name="visit-visit_age" onChange={handleSelectChange}>
                {options.map(option => {
                    return <option value={option} key={option}>{option}</option>
                })}
            </select></label><br/>
            <label className="hidden" id="visit_ageinput">Enter an age: <input type="text" name="visit-age" onChange={handleChange}/></label><br/>
            <label>Date:<input onChange={handleChange} type="date" name="visit-date"/></label><br/>
            <label>Name of Doctor or Nurse: <input type="text" name="visit-name_of_nurse" onChange={handleChange}/></label><br/>
            <label>Weight: <input type="text" name="visit-weight" onChange={handleChange}/>kg</label><br/>
            <label>Lengtht: <input type="text" name="visit-length" onChange={handleChange}/>cm</label><br/>
            <label>Head Circumference: <input type="text" name="visit-head_circumference" onChange={handleChange}/>cm</label><br/>
            <input type="hidden" value={child_id} name="child_id"/>

            <button type="submit">Add</button>
        </form>
    )
}