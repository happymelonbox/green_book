
import React from "react";


const VitaminK = ({vitK}) => {
    let fullDate = vitK.date.split("-")
    let year = fullDate[0]
    let month = fullDate[1]
    let day = fullDate[2]
    let date = `${day}-${month}-${year}`
    return(
        <div>
            <p>
                Clinic: {vitK.place_given}<br/>
                Date given: {date}<br/>
                Given by: {vitK.route}<br/>
                Nurse/Doctors name: {vitK.given_by}
            </p>
        </div>
    )
}



export default VitaminK