import React from "react"


const AppointmentsByAppointment = ({children, appointments, handleAppointmentSubmit, handleAppointmentEdit}) => {


    return(
        <div>
            <h5>Appointments</h5>
            {appointments.map(appt => {
                const splitDateAndTime = appt.date_and_time.split("T")
                const date = splitDateAndTime[0].split("-")
                const reorganisedDate = `${date[2]}-${date[1]}-${date[0]}`

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
                    <div key={appt.id}>
                        <form onSubmit={handleAppointmentSubmit} >
                            <label><strong>{reorganisedDate}<input className={`${appt.id}appointment_inputs hidden`} defaultValue={appt.date_and_time} type="datetime-local" name="appointment_date_and_time" /></strong><br/></label>
                            <label>Child: {appt.child.first_name} {appt.child.last_name}<select defaultValue={appt.child.id} className={`${appt.id}appointment_inputs hidden`}  name="appointment_child_id" >
                                {children.map(child =>{
                                return <option key={child.id} value={child.id}>{child.first_name} {child.last_name}</option>
                            })}
                                </select><br/></label>
                            <label>Reason: {appt.reason} <select defaultValue={appt.reason} className={`${appt.id}appointment_inputs hidden`} name="appointment_reason" id={`${appt.id}_appointment_reason`} onChange={handleReasonChange}>
                                <option value="MCHS Visit">MCHS Visit</option>
                                <option value="GP">GP</option>
                                <option value="Paediatrician">Paediatrician</option>
                                <option value="Dentist">Dentist</option>
                                <option value="Other">Other</option>
                                </select><br/></label>
                            <label id={`${appt.id}visit_age_select`} className="hidden">Visit age: <select defaultValue={appt.visit_age} name="appointment_visit_age" >
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
                            </select><br/></label>
                            <label className="hidden" id={`${appt.id}other_reason_input`}>Input another reason: <input defaultValue={appt.reason} name="appointment_other_reason" type="text"/><br/></label>
                            <label>Time: {splitDateAndTime[1].slice(0,5)}</label><br/>
                            <label><strong>Location:</strong><br/></label>
                            <label>{appt.location_name}<input defaultValue={appt.location_name} className={`${appt.id}appointment_inputs hidden`} name="appointment_location_name" type="text" /><br/>
                            {appt.location_address_number} {appt.location_street_name}<input defaultValue={appt.location_address_number} className={`${appt.id}appointment_inputs hidden`} type="text" name="appointment_location_address_number" /><input defaultValue={appt.location_street_name} className={`${appt.id}appointment_inputs hidden`} type="text" name="appointment_location_street_name" /><br/>
                            {appt.location_suburb}<input defaultValue={appt.location_suburb} className={`${appt.id}appointment_inputs hidden`} type="text" name="appointment_location_suburb" /><br/>
                            {appt.location_city} {appt.location_state} {appt.location_postcode}<input defaultValue={appt.location_city} className={`${appt.id}appointment_inputs hidden`} type="text" name="appointment_location_city" /><input defaultValue={appt.location_state} className={`${appt.id}appointment_inputs hidden`} name="appointment_location_state" type="text" /><input defaultValue={appt.location_postcode} className={`${appt.id}appointment_inputs hidden`} type="number" name="appointment_location_postcode" />
                            </label><br/>
                            <label>{appt.location_country}<input defaultValue={appt.location_country} className={`${appt.id}appointment_inputs hidden`} name="appointment_location_country" type="text" /><br/></label>
                            <label>{appt.location_contact_number}<input defaultValue={appt.location_contact_number} className={`${appt.id}appointment_inputs hidden`} name="appointment_location_contact_number" type="text" /><br/></label>
                            <input type="hidden" name="appointment_id" value={appt.id}/>
                            <button className={`${appt.id}appointment_inputs hidden`} type="submit">Submit Changes</button>
                        </form>
                        <button id={`${appt.id}appointment_inputs`} onClick={handleAppointmentEdit}>Edit appointment</button><br/>
                    </div>
                )
            })}
        </div>
    )}
export default AppointmentsByAppointment