import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AppointmentsForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            children: [],
            errors: [],
            options: ["Choose a reason", "MCHS Visit", "GP", "Paediatrician", "Dentist", "Other"],
            appointment: {
                reason: "",
                date_and_time: "",
                location_name: "",
                location_address_number: "",
                location_street_name: "",
                location_suburb: "",
                location_postcode: 0,
                location_city: "",
                location_state: "",
                location_country: "",
                location_contact_number: "",
                visit_age: "",
                child_id: 1
            },
            visits: [
                "Select a visit",
                "First Home",
                "Two Week",
                "Four Week",
                "Eight Week",
                "Four Month",
                "Six Month",
                "Twelve Month",
                "Eighteen Month",
                "Two Year",
                "Three and a Half Year"
            ]
        }

    }

    componentDidMount(){
        this.getChildren()
    }

    getChildren = () => {
        axios.get("http://localhost:3001/api/v1/children", {withCredentials: true})
        .then(response => {
            this.setState({
                children: response.data
            })
        })
    }

    setAppointment = (event) => {
        event.preventDefault()
        const {
            reason,
            date_and_time,
            location_name,
            location_address_number,
            location_street_name,
            location_suburb,
            location_postcode,
            location_city,
            location_state,
            location_country,
            location_contact_number,
            visit_age,
            child_id,
        } = this.state.appointment

        let appointment = {
            reason: reason,
            date_and_time: date_and_time,
            location_name: location_name,
            location_address_number: location_address_number,
            location_street_name: location_street_name,
            location_suburb: location_suburb,
            location_postcode: location_postcode,
            location_city: location_city,
            location_state: location_state,
            location_country: location_country,
            location_contact_number: location_contact_number,
            visit_age: visit_age,
            child_id: child_id
        }
        axios.post("http://localhost:3001/api/v1/appointments", {appointment}, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.status === 'created'){
                this.redirect()
            } else {
                this.setState({
                    errors: [...this.state.errors, response.data.errors]
                })
            }
        })
    }

    redirect = () => {
        window.location.replace("http://localhost:4000/appointments_to_keep")
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            appointment:{
                ...this.state.appointment,
                [name]: value
            }
        })
    }

    handleReasonChange = (event) => {
        const value = event.target.value
        let other = document.getElementById("other_reason_input")
        let mchs = document.querySelectorAll(".mchs_inputs")
        let inputs = document.getElementById("location_inputs_label")

        if (value === "Other"){
            for (let i = 0; i < mchs.length; i++){
                let eachInput = mchs[i]
                eachInput.setAttribute("class", "hidden")
            }
            other.removeAttribute("class", "hidden")
        } else if (value === "MCHS Visit"){
            for (let i = 0; i < mchs.length; i++){
                let eachInput = mchs[i]
                eachInput.removeAttribute("class", "hidden")
            }
            other.setAttribute("class", "hidden")
            this.setState({
                appointment : {
                    ...this.state.appointment,
                    reason: "MCHS Visit",
                    location_name: "MCHS Clinic Elsternwick" ,
                    location_address_number: "274" ,
                    location_street_name: "Glen Eira Road" ,
                    location_suburb: "Elsternwick",
                    location_postcode: 3185,
                    location_city: "Melbourne",
                    location_state: "VIC",
                    location_country: "Australia",
                    location_contact_number: "95281895"
                }
            },()=>{inputs.setAttribute("class", "hidden")})
        } else {
            this.handleChange(event)
        }
    }

    addAnotherReason = (event) => {
        event.preventDefault()
        let button = event.target
        const value = event.target.parentNode.children[0].value
        const name = "reason"
        this.setState({
            appointment: {
                ...this.state.appointment,
                [name]: value
            }
        })
        button.innerHTML = "Added!"
    }

    handleVisitChange = (event) => {
        const name = "visit_age"
        const value = event.target.value
        this.setState({
            appointment:{
                ...this.state.appointment,
                [name]: value
            }
        })
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
        return(
            <div>
                <h4>Add a new appointment</h4>
                <Link to="/appointments_to_keep">Back to appointments</Link>
                <form onSubmit = {this.setAppointment}>
                    <label>Select child:  <select name="child_id" onChange={this.handleChange}>
                        {this.state.children.map(child => {
                            return <option key={child.id} value={child.id}>{child.first_name} {child.last_name}</option>}
                        )}
                    </select>
                    <br/>
                    </label>
                    <label>Reason: <select name="reason" onChange={this.handleReasonChange}>
                        {this.state.options.map(option => {
                            return <option key={option} value={option}>{option}</option>}
                        )}
                    </select>
                    <br/>
                        <label className="mchs_inputs hidden" >Select which visit:
                            <select onChange={this.handleVisitChange}>
                            {this.state.visits.map(visit=>{
                                return <option key={visit} value={visit}>{visit} Visit</option>
                            })}
                            </select>
                            <br/>
                        </label>
                        <label className="hidden" id="other_reason_input">Input another option:
                            <input type="text" name="other_reason_input"/><button onClick={this.addAnotherReason}>Add</button>
                        </label>
                    </label>
                    <br/>
                    <label>Date and Time 
                        <input name="date_and_time" type="datetime-local" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label id="location_inputs_label">Location:
                        <br/>Business Name: <input className="location_inputs" name="location_name" type="text" onChange={this.handleChange}/>
                        <br/>Street Number: <input className="location_inputs" name="location_address_number" type="text" onChange={this.handleChange}/>
                        <br/>Street Name: <input className="location_inputs" name="location_street_name" type="text" onChange={this.handleChange}/>
                        <br/>Suburb: <input className="location_inputs" name="location_suburb" type="text" onChange={this.handleChange}/>
                        <br/>Postcode: <input className="location_inputs" name="location_postcode" type="text" onChange={this.handleChange}/>
                        <br/>City: <input className="location_inputs" name="location_city" type="text" onChange={this.handleChange}/>
                        <br/>State: <input className="location_inputs" name="location_state" type="text" onChange={this.handleChange}/>
                        <br/>Country: <input className="location_inputs" name="location_country" type="text" onChange={this.handleChange}/>
                        <br/>Contact Number: <input className="location_inputs" name="location_contact_number" type="text" onChange={this.handleChange}/>
                    </label>
                    <br/>

                    <button type="submit">Submit</button>
                </form>
                <div>
                    {
                        this.state.errors ? this.handleErrors() : null
                    }
                </div>
            </div>
        )
    }
}

export default AppointmentsForm