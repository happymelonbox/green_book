import React from 'react'
import { Link } from 'react-router-dom'
import Child from './Child'


class Children extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div>
                    <div>
                        <h1>Children</h1>
                        {this.props.user.children.map(child =>
                            <Child child={child} key={child}/>)
                        }
                    </div>
                    <Link to='/add_a_child'>Add a new child</Link>
                
            </div>
        )
    }
}

export default Children