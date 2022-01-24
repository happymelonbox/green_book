import React from "react";
import { Link } from 'react-router-dom'
import { ContactNumbers } from "./contactnumbers/ContactNumbers";
import { MCHSClinicsAndHours } from "./mchsclinicsandhours/MCHSClinicsAndHours";
import { Websites } from "./websites/Websites";


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
            <div>
                <Link to="/">Back to Dashboard</Link><br/>

                <h3>Useful Information</h3>
                <h4 className="contactNumbers pointer" onClick={this.handleClick}>Contact Numbers</h4>
                <div id="contactNumbers" className="hidden">
                    < ContactNumbers />
                </div>
                <h4 className="websites pointer" onClick={this.handleClick}>Websites</h4>
                <div id="websites" className="hidden">
                    < Websites />
                </div>
                <h4 className="MCHSClinics pointer" onClick={this.handleClick}>MCHS Clinics & Opening Hours</h4>
                <div id="MCHSClinics" className="hidden">
                    < MCHSClinicsAndHours />
                </div>
            
            </div>
        )
    }
}

export default UsefulInformation