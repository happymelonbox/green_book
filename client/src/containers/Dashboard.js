import React from 'react'
import { Link } from 'react-router-dom'
class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <h3>Welcome {this.props.username} </h3>
                <Link to='/fathers' onClick={this.props.handleClick}>Father</Link> 
                <Link to='/login'>Log In</Link>
                <br></br>
            <Link to='/signup'>Sign Up</Link>
            <br></br>
          </div>
        )
    }
}

export default Dashboard