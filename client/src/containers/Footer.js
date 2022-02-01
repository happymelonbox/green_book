import React from 'react'
import '../style/index.css'

class Footer extends React.Component {

  handleClick = (event) => {
    let id =  event.target.id.split("_")[0]
    console.log(id)
    let target = document.getElementById(`${id}_details`)
    console.log(target)
    target.hasAttribute("class", "hidden") ? target.removeAttribute("class", "hidden") : target.setAttribute("class", "hidden")
  }

  render() {
    return (
      <div className="footer_container">
        <button onClick={this.props.handleLogout} className="logout_link">Log Out</button>
        <div className="footer_info">
          <p className='copywrite'><span onClick = {this.handleClick} className="pointer" id='copyright_symbol'>©</span> <span id="copyright_details" className='hidden'>2007 - 2022<br/> Website content and images protected by Australian Copyright Law</span></p>
          <p><span id='acknowledgement_brief' onClick={this.handleClick}>The team behind Green_Book acknowledge the Boonwurrung People</span><span id="acknowledgement_details" className='hidden'> - Traditional Custodians of the land on which we are fortunate to dream, create, live and work, and recognises their continuing connection to land, water and community. We pay our respects to Elders past, present and emerging.</span></p>
        </div>
      </div>
    );
  }
}

export default Footer;