import React from 'react'
import { Link } from 'react-router-dom'

class DashboardNav extends React.Component {
    render(){
        return(
            <div>
                <Link to='/children'>Children</Link>
                <Link to='/appointments_to_keep'>Appointments To Keep</Link>
                <Link to='/records'>Growth and Health Records</Link>
                <Link to='/useful_information'>Useful Information</Link>
            </div>
        )
    }
}

export default DashboardNav