import React from "react";
import { Link } from 'react-router-dom'

class Immunisations extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                {this.props.immunisations.map(imm => {
                    return(
                        <div key={imm.id}>
                            <h5>Vaccination: {imm.vaccination}({imm.protects_against})</h5>
                            <h5>Age: {imm.age}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Immunisations