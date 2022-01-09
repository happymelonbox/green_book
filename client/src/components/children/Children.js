import React from 'react'
import { Link } from 'react-router-dom'

import Child from './Child'


class Children extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <h1>Children</h1>
                    {console.log(this.props.children)}
                    {/* {this.props.children.map(child => {
                        <Child child={child}/>
                    })} */}
                </div>
                <Link to='/add_a_child'>Add a new child</Link>
            </div>
        )
    }
}

export default Children