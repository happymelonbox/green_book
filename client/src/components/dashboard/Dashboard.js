import React from 'react'
import DashboardNav from './DashboardNav'
import Navbar from '../../containers/Navbar'
import Footer from '../../containers/Footer'


class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <Navbar handleLogout={this.props.handleLogout}/>
                </div>
                <div>
                    <h3>Welcome {this.props.user.first_name} </h3>
                    <DashboardNav />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Dashboard