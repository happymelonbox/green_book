import axios from 'axios'
import React, { Component } from 'react'
import '../../style/births.css'

class BirthRecord extends Component{
    constructor(props){
        super(props)
        this.state = {
            hospitalName: "",
            motherFirstName: "",
            motherLastName: "",
            fatherFirstName: "",
            fatherLastName: "",
        }
    }
    componentDidMount(){
        this.getHospitalName()
        this.getMotherName()
        this.getFatherName()
    }

    getHospitalName = (id) => {
        axios.get('http://localhost:3001/api/v1/hospitals.json', {withCredentials: true})
        .then(response =>
            this.setState({
            hospitalName: response.data.find(id => id = this.props.child.birth.hospital_id).name}
        ))
    }

    getMotherName = (id) => {
        axios.get('http://localhost:3001/api/v1/mothers.json', {withCredentials: true})
        .then(response => {
            this.setState({
            motherFirstName: response.data.find(id => id = this.props.child.birth.mother_id).first_name,
            motherLastName: response.data.find(id => id = this.props.child.birth.mother_id).last_name
        })})
    }

    getFatherName = (id) => {
        axios.get('http://localhost:3001/api/v1/fathers.json', {withCredentials: true})
        .then(response =>
            this.setState({
            fatherFirstName: response.data.find(id => id = this.props.child.birth.father_id).first_name,
            fatherLastName: response.data.find(id => id = this.props.child.birth.father_id).last_name
        }))
    }

    showDeliveryDetails = (event) => {
        let id = event.target.id
        let element = document.getElementById(`${id}_content`)
        if (element.hasAttribute("class", "hidden")){
            element.removeAttribute("class", "hidden")
        } else {
            element.setAttribute("class", "hidden")
        }
    }
    render(){
        const birth = this.props.child.birth
    return(
        <div>
            <div className="baby_details">
                <h5>Birthday: {birth.birth_day}/{birth.birth_month}/{birth.birth_year}</h5>
                <h5>Mother: {this.state.motherFirstName} {this.state.motherLastName}</h5>
                <h5>Father: {this.state.fatherFirstName} {this.state.fatherLastName}</h5>
            </div>
            <div className="delivery_details_container">
                <h5 className="delivery_details pointer" id={`delivery_details_${this.props.child.id}`} onClick={this.showDeliveryDetails}>Delivery Details</h5>
                <br/>
                <div className="delivery_details_content hidden" id={`delivery_details_${this.props.child.id}_content`}>
                    <h5>Home Birth: {birth.home_birth ? "Yes" : `No - Hospital: ${this.state.hospitalName}`}</h5>
                    <h5>Examined By: {birth.examiner_name}</h5>
                    <h5>Delivery Method: {birth.delivery_method ? birth.delivery_method : "Not Supplied"}</h5>
                    <h5>Delivery Time: {new Date(birth.delivery_time).toString().split(" ")[4]}</h5>
                    <h5>Severe Jaundice? {birth.severe_jaundice ? "Yes" : "No"}</h5>
                    <h5>Weight: {birth.weight ? birth.weight : "0"} kg</h5>
                    <h5>Length: {birth.length ? birth.length : "0"} cm</h5>
                    <h5>Head Circumference: {birth.head_circumference ? birth.head_circumference : "0"} cm</h5>
                    <h5>Estimated Gestation: {birth.estimated_gestation} weeks</h5>
                    <h5>{birth.severe_jaundice ? "Echange Transfusion for Jaundice: Yes" : null}</h5>
                    <h5>Newborn bloodspot screening complete? {birth.newborn_bloodspot_screening_test_completed ? "Yes" : "No"}</h5>
                    <h5>{birth.newborn_bloodspot_screening_test_completed ? new Date(birth.bloodspot_sample_date).toString().slice(0,10) : null}</h5>
                    <h5>Apgar One Minute: {birth.apgar_one_minute}</h5>
                    <h5>Apgar Five Minute: {birth.apgar_five_minute}</h5>
                    <h5>Problems Requiring Treatment: {birth.problems_requiring_treatment ? birth.problems_requiring_treatment : "None"}</h5>
                    <h5>Admission To Intensive Care Nursery in First 48 Hours? {birth.admission_to_intensive_care_nursery_48hours ? "Yes" : "No" }</h5>
                    <h5>{birth.admission_to_intensive_care_nursery_48hours ? `Intensive Care Reason: ${birth.intensive_care_reason}` : null}</h5>
                    <h5>Admission To Special Care Nursery in First 48 Hours? {birth.admission_to_special_care_nursery_48hours ? "Yes" : "No" }</h5>
                    <h5>{birth.admission_to_special_care_nursery_48hours ? `Intensive Care Reason: ${birth.special_care_reason}` : null}</h5>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    )
}
}
export default BirthRecord