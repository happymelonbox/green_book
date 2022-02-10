import React from "react";
import { ImmunisationForm } from "./ImmunisationForm";
import axios from "axios";

class Immunisations extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            errors: [],
            immunisation: {
                age: this.props.immunisation.age,
                vaccination_name: this.props.immunisation.vaccination_name,
                protects_against: this.props.immunisation.protects_against,
                batch_number: this.props.immunisation.batch_number,
                date_given: this.props.immunisation.date_given,
                nurse_name:this.props.immunisation.nurse_name,
                clinic: this.props.immunisation.clinic,
                date_of_next_dose: this.props.immunisation.date_of_next_dose,
                child_id: this.props.immunisation.child_id,
                id: this.props.immunisation.id
            }

        }
    }
    handleChange = (event) => {
        const name = event.target.name.split("-")
        const key = name[1]
        const value = event.target.value
        const form = name[0]
        console.log(form)
        this.setState({
            [form]:{
                ...this.state[form],
            [key]: value,
        }})
    }

    handleClick = (event) => {
        event.target.innerHTML = event.target.innerHTML === "Edit Immunisation" ? "Close" : "Edit Immunisation"
        this.props.handleClick(event)
    }

    handleImmEditSubmit = (event) => {
        event.preventDefault()
        const {
            age,
            vaccination_name,
            protects_against,
            batch_number,
            date_given,
            nurse_name,
            clinic,
            date_of_next_dose,
            child_id,
            id,
        } = this.state.immunisation

        let immunisation = {
            age: age,
            vaccination_name: vaccination_name,
            protects_against: protects_against,
            batch_number: batch_number,
            date_given: date_given,
            nurse_name: nurse_name,
            clinic: clinic,
            date_of_next_dose: date_of_next_dose,
            child_id: child_id,
        }

        axios.put(`http://localhost:3001/api/v1/immunisations/${id}`, {immunisation}, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.status === 'updated'){
                window.location.replace("http://localhost:4000/records")
            } else {
                this.setState({
                    errors: [...this.state.errors, response.data.errors]
                })
            }
        })
        .catch( error => console.log('api errors: ', error))
    }

    handleErrors = () =>{
        return (
            <div>
                <ul>{this.state.errors.map((error) => {
                    console.log({error})
                    return <li key="{error}">{error}</li>
                })}</ul>
            </div>
        )
    }

    render(){
        const imm = this.props.immunisation
        const child = this.props.child
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
                <button className={`${imm.id}ImmunisationEdit pointer`} onClick={this.handleClick}>Edit Immunisation</button><br/>
                <div id={`${imm.id}ImmunisationEdit`} className = "hidden">
                    < ImmunisationForm child_id={child.id} handleImmEditSubmit = {this.handleImmEditSubmit} handleChange={this.handleChange} button="Edit"/>
                </div>
                <div>
                    {
                        this.state.errors ? this.handleErrors() : null
                    }
                </div>
            </div>
        )
    }
}

export default Immunisations