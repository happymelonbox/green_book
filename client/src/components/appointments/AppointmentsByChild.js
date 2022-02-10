
const AppointmentsByChild = ({children, handleAppointmentSubmit, handleAppointmentEdit}) => {
    return(
        <div>
            {children.map(child => {
                if(child.appointments.length > 0){
                    return(
                        <div key={child.id}>
                            <h5 className="child_names">{child.first_name} {child.last_name}</h5>
                            <div>
                                {child.appointments.map(appointment => {
                                    const date_and_time = appointment.date_and_time.split("T")
                                    const time = date_and_time[1].slice(0,5)
                                    const date_split = date_and_time[0].split("-")
                                    const day = date_split[2]
                                    const month = date_split[1]
                                    const year = date_split[0]
                                    const appointment_date = `${day}-${month}-${year}`
                                    function handleReasonChange(event){
                                        const value = event.target.value
                                        const id = event.target.id.split("_")[0]
                                        if(value === "Other"){
                                            document.getElementById(`${id}other_reason_input`).classList.remove("hidden")
                                            document.getElementById(`${id}visit_age_select`).classList.add("hidden")
                                        } else if (value === "MCHS Visit"){
                                            document.getElementById(`${id}visit_age_select`).classList.remove("hidden")
                                            document.getElementById(`${id}other_reason_input`).classList.add("hidden")
                                        }
                                    }

                                    return(
                                        <div key={appointment.id}>
                                            <form onSubmit={handleAppointmentSubmit}>
                                                <label>Appointment Reason: {appointment.reason} {appointment.visit_age} <select defaultValue={appointment.reason} className={`${appointment.id}appointment appointment_inputs hidden`} name="appointment_reason" id={`${appointment.id}_appointment_reason`} onChange={handleReasonChange}>
                                                    <option value="MCHS Visit">MCHS Visit</option>
                                                    <option value="GP">GP</option>
                                                    <option value="Paediatrician">Paediatrician</option>
                                                    <option value="Dentist">Dentist</option>
                                                    <option value="Other">Other</option>
                                                </select><br className="appointment_breaks"/></label>
                                                <label id={`${appointment.id}visit_age_select`} className="hidden">Visit age: <select defaultValue={appointment.visit_age} name="appointment_visit_age" >
                                                    <option value="First Home">First Home</option>
                                                    <option value="Two Week">Two Week</option>
                                                    <option value="Four Week">Four Week</option>
                                                    <option value="Eight Week">Eight Week</option>
                                                    <option value="Four Month">Four Month</option>
                                                    <option value="Six Month">Six Month</option>
                                                    <option value="Twelve Month">Twelve Month</option>
                                                    <option value="Eighteen Month">Eighteen Month</option>
                                                    <option value="Two Year">Two Year</option>
                                                    <option value="Three and a Half Year">Three and a Half Year</option>
                                                </select><br className="appointment_breaks"/></label>
                                                <label className="hidden" id={`${appointment.id}other_reason_input`}>Input another reason: <input defaultValue={appointment.reason} name="appointment_other_reason" type="text"/><br className="appointment_breaks"/></label>
                                                <label>Date: {appointment_date} <br className="appointment_breaks"/></label>
                                                <label>Time: {time}<input className={`${appointment.id}appointment appointment_inputs hidden`} defaultValue={appointment.date_and_time} type="datetime-local" name="appointment_date_and_time"/><br/></label>
                                                <label><strong>Location:</strong><br/></label>
                                                    <label>{appointment.location_name}<input defaultValue={appointment.location_name} className={`${appointment.id}appointment appointment_inputs hidden`} name="appointment_location_name" type="text" /><br className="appointment_breaks"/>
                                                    {appointment.location_address_number} {appointment.location_street_name}<input defaultValue={appointment.location_address_number} className={`${appointment.id}appointment appointment_inputs hidden`} type="text" name="appointment_location_address_number" /><input defaultValue={appointment.location_street_name} className={`${appointment.id}appointment appointment_inputs hidden`} type="text" name="appointment_location_street_name" /><br className="appointment_breaks"/>
                                                    {appointment.location_suburb}<input defaultValue={appointment.location_suburb} className={`${appointment.id}appointment appointment_inputs hidden`} type="text" name="appointment_location_suburb" /><br className="appointment_breaks"/>
                                                    {appointment.location_city} {appointment.location_state} {appointment.location_postcode}<input defaultValue={appointment.location_city} className={`${appointment.id}appointment appointment_inputs hidden`} type="text" name="appointment_location_city" /><input defaultValue={appointment.location_state} className={`${appointment.id}appointment appointment_inputs hidden`} name="appointment_location_state" type="text" /><input defaultValue={appointment.location_postcode} className={`${appointment.id}appointment appointment_inputs hidden`} type="number" name="appointment_location_postcode" />
                                                    </label><br className="appointment_breaks"/>
                                                    <label>{appointment.location_country}<input defaultValue={appointment.location_country} className={`${appointment.id}appointment appointment_inputs hidden`} name="appointment_location_country" type="text" /><br className="appointment_breaks"/></label>
                                                    <label>{appointment.location_contact_number}<input defaultValue={appointment.location_contact_number} className={`${appointment.id}appointment appointment_inputs hidden`} name="appointment_location_contact_number" type="text" /><br className="appointment_breaks"/></label>
                                                    <input type="hidden" name="appointment_id" value={appointment.id}/>
                                                    <input type="hidden" name="appointment_child_id" value={appointment.child_id}/>
                                                    <input value="Submit" className={`${appointment.id}appointment appointment_inputs hidden`} type="submit"/>
                                                </form>
                                                <button id={`${appointment.id}appointment-appointment_inputs`} onClick={handleAppointmentEdit}>Edit appointment</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default AppointmentsByChild