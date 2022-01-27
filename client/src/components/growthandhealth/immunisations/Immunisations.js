import React from "react";

class Immunisations extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const imm = this.props.immunisation
        return(
            <div >
                <h5>{imm.protects_against} Vaccination ({imm.vaccination_name})</h5>
                <p>
                    Age: {imm.age}<br/>
                    Date given: {imm.date_given}<br/>
                    Given by: {imm.nurse_name} at {imm.clinic}<br/>
                    Batch number: {imm.batch_number}<br/>
                    Next dose due: {imm.date_of_next_dose}
                </p>
            </div>
        )
    }
}

export default Immunisations