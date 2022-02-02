import React, { Component } from 'react'
import BirthRecord from '../births/BirthRecord'
import BirthsForm from '../births/BirthsForm'


class Child extends Component{
    render(){
    return(
        <div>
            <h4>{this.props.child.first_name}</h4>
            {this.props.child.birth ? 
            <BirthRecord child={this.props.child}/> :
           <BirthsForm child={this.props.child}/>}
        </div>
    )
}
}
export default Child