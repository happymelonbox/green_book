import React from "react"


const AppointmentsByChild = ({children}) => {
    return(
        <div>
            {children.map(child => {
                if(child.appointments.length > 0){
                return(
                    <div key={child.id}>
                        <h5 className="child_names">{child.first_name} {child.last_name}</h5>
                        <h5>Appointments:</h5>
                        {child.appointments.map(appointment => {
                            const date = appointment.date_and_time.split("T")[1].slice(0,5)
                            const date_split = date.split("-")
                            const day = date_split[2]
                            const month = date_split[1]
                            const year = date_split[0]
                            const appointment_date = `${day}-${month}-${year}`
                            return(
                                <form key={appointment.id} className="appointment_details">
                                    <label>Appointment Reason: {appointment.reason === "MCHS Visit"
                                    ?
                                        <label className="appointment_details_lines">{appointment.visit_age} {appointment.reason}<br/></label>
                                    :
                                        <label className="appointment_details_lines">{appointment.reason}<br/></label>
                                    }</label>
                                    <label className="appointment_details_lines">Date: {appointment.date_and_time.split("T")[0]}<br/></label>
                                    <label className="appointment_details_lines">Time: {appointment_date}<br/></label><br/>
                                    <label className="appointment_details_lines"><strong>Location:</strong><br/></label>
                                    <label className="appointment_details_lines_location_details">
                                        {appointment.location_name}<br/>
                                        {appointment.location_address_number} {appointment.location_street_name}<br/>
                                        {appointment.location_suburb}<br/>
                                        {appointment.location_state} {appointment.location_postcode}
                                    </label>
                                    <input type="hidden" name="appointment_id"value={appointment.id}/>
                                </form>
                            )
                        })}
                    </div>
                )}
            })}
        </div>
    )}
export default AppointmentsByChild