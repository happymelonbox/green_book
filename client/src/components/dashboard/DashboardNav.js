import React from 'react'
import { Link } from 'react-router-dom'

class DashboardNav extends React.Component {
    render(){
        return(
            <div>
                <Link to='/children'>Children</Link>
                <Link to='/appointments_to_keep'>Appointments To Keep</Link>
                <Link to='/growth_and_health_record'>Growth and Health Record</Link>
                <Link to='/immunisation_records'>Immunisation Records</Link>
                <Link to='/visits'>Visits</Link>
                <Link to='/useful_information'>Useful Information</Link>
            </div>
        )
    }
}

export default DashboardNav