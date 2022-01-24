import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/appointments.css'
import AppointmentsByAppointment from './AppointmentsByAppointment'
import AppointmentsByChild from './AppointmentsByChild'

class Appointments extends Component{
    constructor(props){
        super(props)
        this.state = {
            appointments: [],
            children: [],
            sortBy: "Appointment"
        }
    }

    componentDidMount(){
        this.getChildren()
        this.getAppointments()
    }

    getChildren = () => {
        axios.get('http://localhost:3001/api/v1/children', {withCredentials:true})
        .then(response => {
            this.setState({
                children: response.data
            })
        })
    }

    getAppointments = () => {
        axios.get('http://localhost:3001/api/v1/appointments', {withCredentials:true})
        .then(response => {
            this.setState({
                appointments: response.data
            })
        })
    }

    handleSort = (event) => {
        console.log(event.target)
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <h3>Important Appointments</h3>
                <Link to='/'>Back to Dashboard</Link> 
                <Link to='/add_an_appointment'>Add a new appointment</Link> 
                <form>
                <label>Sort By: <select name="sortBy" onChange={this.handleSort}>
                    <option value="Appointment">Appointment Date and Time</option>
                    <option value="Children">Children Last Name</option>
                </select></label>
                </form>
                {this.state.sortBy === "Children" ?
                    <AppointmentsByChild children={this.state.children}/>
                    :
                    <AppointmentsByAppointment appointments={this.state.appointments}/>
                }
            </div>
        )
    }
}

export default Appointments