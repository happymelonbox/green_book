import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Immunisations from './immunisations/Immunisations'
import MCHSVisits from './visits/MCHSVisits'
import VitaminK from './vitamink/VitaminK'
import HepatitisBVaccines from './hepatitisbvaccines/HepatitisBVaccines'

class GrowthAndHealthRecords extends React.Component{
    constructor(props){
        super(props)
        this.state={
            children: []
        }
    }

    componentDidMount(){
        this.getChildren()
    }

    getChildren = () => {
        axios.get('http://localhost:3001/api/v1/children', {
          withCredentials: true,
      })
        .then(response => {
          this.handleChildren(response.data)
        })
    }

    handleChildren = (data) => {
        this.setState({
          children: data
        })
    }

    handleClick = (event) => {
        const target = event.target.className.split(" ")[0]
        const element = document.getElementById(`${target}`)
        console.log(target, element)

        element.hasAttribute("class", "hidden")
        ?
        element.removeAttribute("class", "hidden")
        :
        element.setAttribute("class", "hidden")
    }
    render(){
        return(
            <div>
                <Link to='/'>Back to Dashboard</Link><br/>
                {this.state.children.map(child =>{
                    
                    return(
                        <div key={child.id}>
                            <h4 >{child.first_name} {child.last_name}</h4>

                                <div >
                                    < Immunisations child = {child} handleClick = {this.handleClick}/>
                                </div>
                            
                                <div >
                                    < MCHSVisits child={child} handleClick = {this.handleClick}/>
                                </div>
                            <h4 className={`${child.id}VitaminK pointer`} onClick={this.handleClick}>Vitamin K</h4>
                                <div id={`${child.id}VitaminK`} className="hidden">
                                    < VitaminK child={child}/>
                                </div>
                            <h4 className={`${child.id}HepBVaccine pointer`} onClick={this.handleClick}>Hepatitis B Vaccines</h4>
                                <div id={`${child.id}HepBVaccine`} className="hidden">
                                    < HepatitisBVaccines child={child} />
                                </div>
                        </div>
                    )
    })}

            </div>

        )
    }

}

export default GrowthAndHealthRecords