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
                    <h3 className="welcome_banner">Welcome back, {this.props.user.first_name} </h3>
                    {console.log(this.props.user)}
                    {this.props.user.children === undefined ? <p>Please begin by adding children under the "children" tab</p> : null}
                    <DashboardNav />
                    <Footer loggedInStatus={this.props.loggedInStatus} handleLogout={this.props.handleLogout}/>
                </div>
            </div>
        )
    }
}

export default Dashboard