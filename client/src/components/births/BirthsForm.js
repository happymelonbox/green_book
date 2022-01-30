import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BirthsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            father_first_name: "",
            father_last_name: "",
            father_birth_day: 0,
            father_birth_month: 0,
            father_birth_year: 0,
            mother_first_name: "",
            mother_last_name: "",
            mother_birth_day: 0,
            mother_birth_month: 0,
            mother_birth_year: 0,
            hospitalSelectOptions : [],
            hospital_name: "",
            errors: [],
            birth: {
                child_id: this.props.child.id,
                birth_day: 0,
                birth_month: 0,
                birth_year: 0,
                home_birth: false,
                hospital_id: '',
                examiner_name: '',
                delivery_method: '',
                delivery_time: '',
                severe_jaundice: false,
                weight: 0,
                length: 0,
                head_circumference: 0,
                estimated_gestation: 0,
                exchange_transfusion_for_jaundice: false,
                newborn_bloodspot_screening_test_completed: false,
                bloodspot_sample_date: '',
                apgar_one_minute: 0,
                apgar_five_minute: 0,
                problems_requiring_treatment: '',
                admission_to_intensive_care_nursery_48hours: false,
                intensive_care_reason: '',
                admission_to_special_care_nursery_48hours: false,
                special_care_reason: '',
                father_id: 0,
                mother_id: 0
            }
        }
    }
    componentDidMount(){
        this.getHospitalOptions()
    }

    async getHospitalOptions(){
        axios.get('http://localhost:3001/api/v1/hospitals', {
            withCredentials: true,})
        .then(response => {
            const options = response.data.hospitals.map(data => ({
                "value": data.id,
                "label": data.name
            }))
            this.setState({
                hospitalSelectOptions: options
            })
        })
    }

    hospitalChange(event){
        this.setState({
            birth:{
                ...this.state.birth,
                hospital_id: event.target.value
            }
        })
    }

    booleanChange(event){
        let value = false
        let name = event.target.name
        if (event.target.value === "Yes"){
            value = true
        } else {
            value = false
        }
        this.setState({
            birth:{
                ...this.state.birth,
                [name]: value
            }
        })
    }

    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            birth: {
                ...this.state.birth,
                [name]: value
            }
        })
    }

    handleParentsChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
                [name]: value
            }
        )
    }

    findParentId = () => {
        this.findMotherId()
        this.findFatherId()
    }

    findMotherId = () => {
        axios.get('http://localhost:3001/api/v1/mothers', {withCredentials: true})
        .then(response =>
            this.setState({
                birth: {...this.state.birth,
                    mother_id: response.data.mothers.find(
                        ({first_name, last_name, birth_day, birth_month, birth_year}) =>
                        first_name === this.state.mother_first_name &&
                        last_name === this.state.mother_last_name &&
                        birth_day === this.state.mother_birth_day &&
                        birth_month === this.state.mother_birth_month &&
                        birth_year === this.state.mother_birth_year ).id
            }}))
    }

    findFatherId = () => {
        axios.get('http://localhost:3001/api/v1/fathers', {withCredentials: true})
        .then(response =>
            this.setState({
                birth: {...this.state.birth,
                    father_id: response.data.fathers.find(
                        ({first_name, last_name, birth_day, birth_month, birth_year}) =>
                        first_name === this.state.father_first_name &&
                        last_name === this.state.father_last_name &&
                        birth_day === this.state.father_birth_day &&
                        birth_month === this.state.father_birth_month &&
                        birth_year === this.state.father_birth_year 
                    ).id
                }
            })
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
                child_id,
                birth_day,
                birth_month,
                birth_year,
                home_birth,
                hospital_id,
                examiner_name,
                delivery_method,
                delivery_time,
                severe_jaundice,
                weight,
                length,
                head_circumference,
                estimated_gestation,
                exchange_transfusion_for_jaundice,
                newborn_bloodspot_screening_test_completed,
                bloodspot_sample_date,
                apgar_one_minute,
                apgar_five_minute,
                problems_requiring_treatment,
                admission_to_intensive_care_nursery_48hours,
                intensive_care_reason,
                admission_to_special_care_nursery_48hours,
                special_care_reason,
                father_id,
                mother_id
            } = this.state.birth

            let birth = {
                child_id: child_id,
                birth_day: birth_day,
                birth_month: birth_month,
                birth_year: birth_year,
                home_birth: home_birth,
                hospital_id: hospital_id,
                examiner_name: examiner_name,
                delivery_method: delivery_method,
                delivery_time: delivery_time,
                severe_jaundice: severe_jaundice,
                weight: weight,
                length: length,
                head_circumference: head_circumference,
                estimated_gestation: estimated_gestation,
                exchange_transfusion_for_jaundice: exchange_transfusion_for_jaundice,
                newborn_bloodspot_screening_test_completed: newborn_bloodspot_screening_test_completed,
                bloodspot_sample_date: bloodspot_sample_date,
                apgar_one_minute: apgar_one_minute,
                apgar_five_minute: apgar_five_minute,
                problems_requiring_treatment: problems_requiring_treatment,
                admission_to_intensive_care_nursery_48hours: admission_to_intensive_care_nursery_48hours,
                intensive_care_reason: intensive_care_reason,
                admission_to_special_care_nursery_48hours: admission_to_special_care_nursery_48hours,
                special_care_reason: special_care_reason,
                father_id: father_id,
                mother_id: mother_id
            }

            this.findParentId()

            axios.post('http://localhost:3001/api/v1/births', {birth}, {withCredentials: true})
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
            .catch( error => console.log('api errors:', error))
        };

    redirect = () => {
        window.location.replace("http://localhost:4000/children")
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
                <h4>Add Birth Details</h4>
                <form onSubmit={this.handleSubmit}>
                <label> Birth Day: <input type="number" name="birth_day" onChange={this.handleChange}/></label>
                <br/>
                <label> Birth Month: <input type="number" name="birth_month" onChange={this.handleChange}/></label>
                <br/>
                <label> Birth Year: <input type="number" name="birth_year" onChange={this.handleChange}/></label>
                <br/>
                <label> Home Birth? <select name="home_birth" onChange={this.booleanChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                </label>
                <br/>
                <label>Father's First Name: <input type="text" name="father_first_name" onChange={this.handleParentsChange}/></label>
                <br/>
                <label> Hospital: <select name="hospital" onChange={this.hospitalChange}>
                    <option>--</option>
                    {this.state.hospitalSelectOptions.map(option => {
                        return <option key={option.value} value={option.value} id={option.value}>{option.label}</option>
                    })}
                </select> If your hospital isn't available please click <Link to={'/add_a_hospital'}>here</Link> to add it
                </label>
                <br/>
                <label>Examiner Name: <input type='text' name="examiner_name" onChange={this.handleChange}/></label>
                <br/>
                <label>Delivery Method: <select name="delivery_method" onChange={this.handleChange}>
                        <option value="Natural">Natural</option>
                        <option value="Induced">Induced</option>
                        <option value="Elective Caesarian">Elective Caesarian</option>
                        <option value="Emergency Caesarian">Emergency Caesarian</option>
                    </select>
                </label>
                <br/>
                <label>Delivery Time: <input name="delivery_time" type="time" onChange={this.handleChange}/></label>
                <br/>
                <label>Severe Jaundice? <select name="severe_jaundice" onChange={this.booleanChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select> </label>
                <br/>
                <label>Weight: <input type="number" name="weight" onChange={this.handleChange}/></label>
                <br/>
                <label>Height: <input type="number" name="height" onChange={this.handleChange}/></label>
                <br/>
                <label>Head Circumference: <input type="number" name="head_circumference" onChange={this.handleChange}/></label>
                <br/>
                <label>Estimated Gestation: <input type="number" name="estimated_gestation" onChange={this.handleChange}/></label>
                <br/>
                <label>Exchange Transfusion for Jaundice: <select name="exchange_transfusion_for_jaundice" onChange={this.booleanChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select> </label>
                <br/>
                <label>Newborn Bloodspot Screening Test Completed: <select name="newborn_bloodspot_screening_test_completed" onChange={this.booleanChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select> </label>
                <br/>
                <label>Bloodspot Sample Data: <input type="date" name="bloodspot_sample_date" onChange={this.handleChange}/></label>
                <br/>
                <label>Apgar One Minute: <input type="number" name="apgar_one_minute" onChange={this.handleChange}/></label>
                <br/>
                <label>Apgar Five Minute: <input type="number" name="apgar_5_minute" onChange={this.handleChange}/></label>
                <br/>
                <label>Problems Requiring Treatment: <input type="text" name="problems_requiring_treatmeant" onChange={this.handleChange}/></label>
                <br/>
                <label>Admission to Intensive Care Nursery 48hours: <select name="admission_to_intensive_care_nursery_48hours" onChange={this.booleanChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select> </label>
                <br/>
                <label>Intensive Care Reason: <input type="text" name="intensive_care_reason" onChange={this.handleChange}/></label>
                <br/>
                <label>Admission to Special Care Nursery 48hours: <select name="admission_to_special_care_nursery_48hours" onChange={this.booleanChange}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select> </label>
                <br/>
                <label>Special Care Reason: <input type="text" name="special_care_reason" onChange={this.handleChange}/></label>
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

export default BirthsForm