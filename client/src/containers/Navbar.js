
import React from 'react'
import '../style/index.css'

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <h2 className='Logo'>Green_Book</h2>
        <button onClick={this.props.handleLogout} className="logout_link">Log Out</button>
      </div>
    );
  }
}

export default Navbar;