import React from 'react'
import DashboardNav from './DashboardNav'

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <h3>Welcome {this.props.user.username} </h3>
                <DashboardNav />
            </div>
        )
    }
}

export default Dashboard