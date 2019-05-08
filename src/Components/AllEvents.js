import React, { Component } from 'react'
import axios from 'axios'

class AllEvents extends Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        axios.get('/api/events').then((res) => {
            this.setState({
                events: res.data
            })
        })
    }

    render(){
        const events = this.state.events.map((event) => {
            return(
                <li key={event.id}><h3>{event.name}</h3> <p>{event.funLevel}</p></li>               
            )
        })
        return(
            <div>
                <h1>All Events</h1>
                <ul>
                    {events}
                </ul>
            </div>
        )
    }
}

export default AllEvents