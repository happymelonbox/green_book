import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/appointments.css'

class Appointments extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.getAppointments()
        this.getChildren()
    }

    getAppointments = () => {
        axios.get('http://localhost:3001/api/v1/appointments', {withCredentials:true})
        .then(response => {
            console.log(response.data)
        })
    }
    getChildren = () => {
        axios.get('http://localhost:3001/api/v1/children', {withCredentials:true})
        .then(response => {
            console.log(response.data)
        })
    }
    render(){
        return(
            <div>
                <h4>Important Appointments</h4>
                <Link to='/add_an_appointment'>Add a new appointment</Link>
            </div>
        )
    }
}

export default Appointments