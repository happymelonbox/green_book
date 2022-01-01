import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/registrations/Login'
import Signup from '../components/registrations/Signup'
import '../style/index.css'

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.loggedInStatus ?
          <Link to='/logout' onClick={this.props.handleClick}>Log Out</Link> :
          <div>
            <Link to='/login'>Log In</Link>
            <br></br>
            <Link to='/signup'>Sign Up</Link>
            <br></br>
          </div>
        }
      </div>
    );
  }
}

export default Navbar;