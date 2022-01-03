
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/index.css'

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <h2 className='Logo'>Green_Book</h2>
        <Link to='/' onClick={this.props.handleClick} className="logout_link">Log Out</Link>
      </div>
    );
  }
}

export default Navbar;