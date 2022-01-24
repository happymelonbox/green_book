import React from "react"


const AppointmentsByAppointment = ({appointments}) => {
    return(
        <div>
            <h5>Appointments</h5>
            {appointments.map(appt => {
                const splitDateAndTime = appt.date_and_time.split("T")
                const date = splitDateAndTime[0].split("-")
                const reorganisedDate = `${date[2]}-${date[1]}-${date[0]}`
                
                return(
                    <div key={appt.id}>
                        
                        <h4 className="appointment_details_lines">{reorganisedDate}</h4>
                        <h5 className="appointment_details_lines">{appt.child.first_name} {appt.child.last_name}</h5>
                        <h5 className="appointment_details_lines">{appt.reason}</h5>
                        <h5 className="appointment_details_lines">{splitDateAndTime[1].slice(0,5)}</h5>
                        <h6 className="appointment_details_lines">Location:</h6>
                                        <p className="appointment_details_lines_location_details"><strong>{appt.location_name}</strong><br/>
                                        {appt.location_address_number} {appt.location_street_name}<br/>
                                        {appt.location_suburb}<br/>
                                        {appt.location_state} {appt.location_postcode}
                                        </p>
                    </div>
                )
            })}
        </div>
    )}
export default AppointmentsByAppointment