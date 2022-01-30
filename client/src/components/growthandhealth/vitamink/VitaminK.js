import React from "react";
import { VitaminKForm } from "./VitaminKForm";
import axios from "axios";


class VitaminK extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            vitamin_k:{
                place_given: this.props.vitK.place_given,
                date: this.props.vitK.date,
                dose: this.props.vitK.dose,
                route: this.props.vitK.route,
                given_by: this.props.vitK.given_by,
                child_id: this.props.vitK.child_id,
                id: this.props.vitK.id
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

    handleSelectChange = (event) => {
        const name = event.target.name.split("-")
        const value = event.target.value
        const form = name[1]
        const input = document.getElementById(`${form}input`)
        value === "Other" ? input.removeAttribute("class", "hidden") : this.handleChange(event)
    }

    handleVitKEditSubmit = (event) => {
        event.preventDefault()
        const {
            place_given,
            date,
            dose,
            route,
            given_by,
            child_id,
            id
        } = this.state.vitamin_k

        let vitamin_k = {
            place_given: place_given,
            date: date,
            dose: dose,
            route: route,
            given_by: given_by,
            child_id: child_id,
            id: id
        }

        axios.put(`http://localhost:3001/api/v1/vitamin_ks/${id}`, {vitamin_k}, {withCredentials: true})
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

    handleClick = (event) => {
        event.target.innerHTML = event.target.innerHTML === "Edit Vitamin K Immunisation" ? "Close" : "Edit Vitamin K Immunisation"
        this.props.handleClick(event)
    }

    render(){
        const vitK = this.props.vitK
        const child = this.props.child
        let fullDate = vitK.date.split("-")
        let year = fullDate[0]
        let month = fullDate[1]
        let day = fullDate[2]
        let date = `${day}-${month}-${year}`
        return(
            <div>
                <p>
                    Clinic: {vitK.place_given}<br/>
                    Date given: {date}<br/>
                    Dose: {vitK.dose}<br/>
                    Given by: {vitK.route}<br/>
                    Nurse/Doctors name: {vitK.given_by}
                </p>
                <button className={`${child.id}vitaminKEdit pointer`} onClick={this.handleClick}>Edit Vitamin K Immunisation</button><br/>
                <div id={`${child.id}vitaminKEdit`} className = "hidden">
                    < VitaminKForm child_id={child.id} handleVitKEditSubmit = {this.handleVitKEditSubmit} handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} button="Edit"/>
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



export default VitaminK