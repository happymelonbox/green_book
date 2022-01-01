import React from 'react'
import { Link} from 'react-router-dom'
import '../style/index.css'

class Navbar extends React.Component {

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