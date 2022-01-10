import React, { Component } from 'react'

class BirthRecord extends Component{
    render(){
        const child = this.props.child
    return(
        <div>
            <h4>Birth Record</h4>
            <h5>{child.first_name}</h5>

        </div>
    )
}
}
export default BirthRecord