import axios from 'axios'
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

class HospitalForm extends Component{
    constructor(props){
        super(props)
        this.state={
            hospital: {
                name: "",
                address_line_1: "",
                address_line_2: "",
                address_suburb: "",
                address_state: "",
                address_postcode: 0,
                address_country: "",
                address_city: ""
            },
            errors: []
        }
    }

    handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            hospital: {
                ...this.state.hospital,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            name,
            address_line_1,
            address_line_2,
            address_suburb,
            address_city,
            address_state,
            address_postcode,
            address_country
        } = this.state.hospital

        let hospital = {
            name: name,
            address_line_1: address_line_1,
            address_line_2: address_line_2,
            address_suburb: address_suburb,
            address_city: address_city,
            address_state: address_state,
            address_postcode: address_postcode,
            address_country: address_country
        }

        axios.post('http://localhost:3001/api/v1/hospitals', {hospital}, {withCredentials: true})
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
        .catch( error => console.log('api errors: ', error))
    }
    redirect = () => {
        const navigate = useNavigate()
        navigate('/children')
    }

    render(){
        return(
            <div>
                <h2>Add a hospital</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Hospital Name: <input type="text" name="name" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <label>Address Line 1: <input type="text" name="address_line_1" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <label>Address Line 2: <input type="text" name="address_line_2" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <label>Suburb: <input type="text" name="address_suburb" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <label>City: <input type="text" name="address_city" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <label>State: <input type="text" name="address_state" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <label>Postcode: <input type="number" name="address_postcode" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <label>Country: <input type="text" name="address_country" onChange={this.handleChange.bind(this)}/></label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default HospitalForm