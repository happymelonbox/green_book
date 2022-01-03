import React from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <h3>Welcome {this.props.user.username} </h3>
                <Link to='/children' onClick={this.props.handleClick}>Children</Link> 
                <Link to='/important_information'>Important Information</Link>
                <Link to='/visits'>Visits</Link>
            </div>
        )
    }
}

export default Dashboard