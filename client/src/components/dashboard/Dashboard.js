import React from 'react'
import DashboardNav from './DashboardNav'

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <h3>Welcome {this.props.user.first_name} </h3>
                <DashboardNav />
            </div>
        )
    }
}

export default Dashboard