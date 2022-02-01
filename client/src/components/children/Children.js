import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Child from './Child'


class Children extends React.Component {
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

    render(){
        return(
            <div>
                <div className='children_container'>
                    <h1 className="children_title">Children</h1>
                    <Link to="/" className="dashboard_">Back to Dashboard</Link> <Link to='/add_a_child'>Add a new child</Link>
                    {this.state.children.map(child => {
                        return (<Child key={child.id} child={child}/>)
                    })}
                </div>

            </div>
        )
    }
}

export default Children