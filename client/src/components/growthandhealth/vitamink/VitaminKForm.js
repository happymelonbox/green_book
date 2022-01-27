export const VitaminKForm = ({handleVitaminKSubmit, handleVitaminKChange, child_id}) => {
    const options = ["Select a dose", "First", "Second", "Third", "Fourth", "Fifth"]
    return(
        <form onSubmit = {handleVitaminKSubmit}>
            <label>Clinic Name:<input onChange={handleVitaminKChange} type="text" name="place_given"/></label><br/>
            <label>Date:<input onChange={handleVitaminKChange} type="date" name="date"/></label><br/>
            <label>Dose:<select onChange={handleVitaminKChange} type="text" name="dose">
                {options.map(option => {
                    return(<option key={option} value={option}>{option}</option>)
                })}
                </select>
            </label><br/>
            <label>Given by:
                <input onChange = {handleVitaminKChange} type="radio" name="route" value="Oral"/><label>Mouth</label>
                <input onChange = {handleVitaminKChange} type="radio" name="route" value="Injection"/><label>Injection</label>
            </label><br/>
            <label>Name of Doctor or Nurse: <input type="text" name="given_by" onChange={handleVitaminKChange}/></label><br/>
            <input type="hidden" value={child_id} name="child_id"/>

            <button type="submit">Add</button>
        </form>
    )
}