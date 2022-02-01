import React from 'react'
import { Link } from 'react-router-dom'

class DashboardNav extends React.Component {
    render(){
        return(
            <div className="dashboard_nav">
                <Link className="dashboard_links" to='/children'>Children</Link><br/>
                <Link className="dashboard_links" to='/appointments_to_keep'>Appointments To Keep</Link><br/>
                <Link className="dashboard_links" to='/records'>Growth and Health Records</Link><br/>
                <Link className="dashboard_links" to='/useful_information'>Useful Information</Link><br/>
            </div>
        )
    }
}

export default DashboardNav