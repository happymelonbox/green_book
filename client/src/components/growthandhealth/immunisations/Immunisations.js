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
                <h4 className={`${this.props.child.id}Immunisation pointer`} onClick={this.props.handleClick}>Immunisations({this.props.child.immunisations.length})</h4>
                {this.props.child.immunisations.map(imm => {
                    return(
                        <div id={`${this.props.child.id}Immunisation`} className="hidden" key={imm.id}>
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