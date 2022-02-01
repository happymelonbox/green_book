import React from 'react'
import DashboardNav from './DashboardNav'
import Navbar from '../../containers/Navbar'
import Footer from '../../containers/Footer'


class Dashboard extends React.Component {
    render(){
        return(
            <div className="dashboard_container">
                <div>
                    <Navbar />
                </div>
                <div>
                    <h3 className="welcome_banner">Welcome back {this.props.user.first_name} </h3>
                    <DashboardNav />
                    <Footer handleLogout={this.props.handleLogout}/>
                </div>
            </div>
        )
    }
}

export default Dashboard