import React from 'react'
import '../style/index.css'

class Footer extends React.Component {

  handleClick = () => {
    const target = document.getElementById("copyright_details")
    target.hasAttribute("class", "hidden") ? target.removeAttribute("class", "hidden") : target.setAttribute("class", "hidden")
  }

  render() {
    return (
      <div className="footer_container">
        <button onClick={this.props.handleLogout} className="logout_link">Log Out</button>
        <div className="footer_info">
          <p className='copywrite'><span onClick = {this.handleClick} className="pointer" id='copyright_symbol'>©</span> <span id="copyright_details" className='hidden'>2007 - 2022<br/> Website content and images protected by Australian Copyright Law</span></p>
          <p className='acknowledgement'>The team behind Green_Book acknowledge the Boonwurrung People - Traditional Custodians of the land on which we are fortunate to dream, create, live and work, and recognises their continuing connection to land, water and community. We pay our respects to Elders past, present and emerging.</p>
        </div>
      </div>
    );
  }
}

export default Footer;