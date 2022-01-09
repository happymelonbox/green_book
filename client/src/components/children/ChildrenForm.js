import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ChildrenForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            middle_name: '',
            last_name: '',
            user_id: this.props.user.id,
            errors: []
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            first_name,
            middle_name,
            last_name,
            user_id
        } = this.state

        let child = {
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            user_id: user_id
        }

        axios.post('http://localhost:3001/api/v1/children.json', {child}, {withCredentials: true})
        .then(response => {
            if (response.data.status === 'created') {
                console.log(response.data)
                console.log("Child created")
                this.props.handleCreateChildren(response.data)
                this.redirect()
            } else {
                this.state.errors.push(response.data.errors)
                }
            })
        
        .catch(error => console.log('api errors: ', error))
    }

    redirect = () => {
        this.props.history.push('/children')
    }

    handleErrors = () => {
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
        const {
            first_name,
            middle_name,
            last_name,
            user_id
        } = this.state

        return(
            <div>
                <h1>Add a child</h1>
                <Link to="/">Home</Link>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="First Name"
                        type="text"
                        name="first_name"
                        value={first_name||""}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Middle Name"
                        type="text"
                        name="middle_name"
                        value={middle_name||""}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Last Name"
                        type="text"
                        name="last_name"
                        value={last_name||""}
                        onChange={this.handleChange}
                    />
                    <input 
                    type="hidden"
                    defaultValue={user_id}
                    />
                    <button placeholder="submit" type="submit">
                    Add Child
                    </button>
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

export default ChildrenForm