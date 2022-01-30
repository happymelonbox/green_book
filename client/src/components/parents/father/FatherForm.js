import axios from 'axios'
import React, { Component } from 'react'


class FatherForm extends Component{
    constructor(props){
        super(props)
        this.state={
            father: {
                first_name: "",
                middle_name: "",
                last_name: "",
                birth_day: 0,
                birth_month: 0,
                birth_year: 0,
                nationality: ""
            },
            errors: []
        }
    }

    handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            father: {
                ...this.state.father,
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            first_name,
            middle_name,
            last_name,
            birth_day,
            birth_month,
            birth_year,
            nationality
        } = this.state.father

        let father = {
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            birth_day: birth_day,
            birth_month: birth_month,
            birth_year: birth_year,
            nationality: nationality
        }

        axios.post('http://localhost:3001/api/v1/fathers', {father}, {withCredentials: true})
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
        window.location.replace('/children')
    }

    render(){
        return(
        <div>
            <h2>Add a Father</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label>First Name: <input type="text" name="first_name" onChange={this.handleChange.bind(this)}/></label>
            <br/>
            <label>Middle Name: <input type="text" name="middle_name" onChange={this.handleChange.bind(this)}/></label>
            <br/>
            <label>Last Name: <input type="text" name="last_name" onChange={this.handleChange.bind(this)}/></label>
            <br/>
            <label>Birth Day: <input type="number" name="birth_day" onChange={this.handleChange.bind(this)}/></label>
            <br/>
            <label>Birth Month: <input type="number" name="birth_month" onChange={this.handleChange.bind(this)}/></label>
            <br/>
            <label>Birth Year: <input type="number" name="birth_year" onChange={this.handleChange.bind(this)}/></label>
            <br/>
            <label>Nationality: <input type="text" name="nationality" onChange={this.handleChange.bind(this)}/></label>
            <br/>
            <button type="submit">Submit</button>
            </form>
            <div>
                {
                    this.state.errors ? this.handleErrors() : null
                }
            </div>
        </div>)
    }
}

export default FatherForm