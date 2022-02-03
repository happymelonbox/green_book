import React from "react";
import { Link } from 'react-router-dom'
import { ContactNumbers } from "./contactnumbers/ContactNumbers";
import { MCHSClinicsAndHours } from "./mchsclinicsandhours/MCHSClinicsAndHours";
import { Websites } from "./websites/Websites";
import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";


class UsefulInformation extends React.Component{

    handleClick = (event) => {
        const target = event.target.className.split(" ")[0]
        const element = document.getElementById(`${target}`)

        element.hasAttribute("class", "hidden")
        ?
        element.removeAttribute("class", "hidden")
        :
        element.setAttribute("class", "hidden")
    }
    render(){
        return(
            <div className="useful_info_container">
                < Navbar />
                <Link className="useful_info_links" to="/">Back to Dashboard</Link>
                <h3 className="useful_info_banner">Useful Information</h3>
                <div className="info_cont">
                    <div className="info_individual_containers">
                        <h4 className="contactNumbers info_banners pointer" onClick={this.handleClick}>Contact Numbers</h4>
                        <div id="contactNumbers" className="hidden">
                            < ContactNumbers />
                        </div>
                    </div>
                    <div className="info_individual_containers">
                        <h4 className="websites info_banners pointer" onClick={this.handleClick}>Websites</h4>
                        <div id="websites" className="hidden">
                            < Websites />
                        </div>
                    </div>
                    <div className="info_individual_containers">
                        <h4 className="MCHSClinics info_banners pointer" onClick={this.handleClick}>MCHS Clinics & Hours</h4>
                        <div id="MCHSClinics" className="hidden">
                            < MCHSClinicsAndHours />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default UsefulInformation