import React from "react"


const AppointmentsByChild = ({children}) => {
    return(
        <div>
            {children.map(child => {
                if(child.appointments.length > 0){
                return(
                    <div key={child.id}>
                        <h4 className="child_names">{child.first_name} {child.last_name}</h4>
                        <h5>Appointments:</h5>
                        {child.appointments.map(appointment => {
                            return(
                                <div key={appointment.id} className="appointment_details">
                                    {appointment.reason === "MCHS Visit" ? 
                                        <h6 className="appointment_details_lines">{appointment.visit_age} {appointment.reason}</h6>
                                    :
                                        <h6 className="appointment_details_lines">{appointment.reason}</h6>
                                    }
                                    <h6 className="appointment_details_lines">Date: {appointment.date_and_time.split("T")[0]}</h6>
                                    <h6 className="appointment_details_lines">Time: {appointment.date_and_time.split("T")[1].slice(0,5)}</h6>
                                    <h6 className="appointment_details_lines">Location:</h6>
                                        <p className="appointment_details_lines_location_details">{appointment.location_name}<br/>
                                        {appointment.location_address_number} {appointment.location_street_name}<br/>
                                        {appointment.location_suburb}<br/>
                                        {appointment.location_state} {appointment.location_postcode}
                                        </p>
                                </div>
                            )
                        })}
                    </div>
                )}
            })}
        </div>
    )}
export default AppointmentsByChild