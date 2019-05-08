import React, {Component} from 'react'
import axios from 'axios'

class AddEvent extends Component{
    constructor(){
        super()
        this.state = {
            eventName: '',
            funLevel: null
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddEvent = (e) => {
        e.preventDefault()
        axios.post('/api/AddEvent', {
            name: this.state.eventName, 
            funLevel: this.state.funLevel
        })
        .then((res) => {
            console.log(res)
        })
    }

    render(){
        return(
            <div>
                <h1>Add Event</h1>
                <form onSubmit={this.handleAddEvent}>
                    <input 
                        placeholder="Event Name" 
                        name="eventName" 
                        onChange={this.handleUpdateInput}/>
                    <input 
                        placeholder="Fun Level" 
                        name="funLevel" 
                        onChange={this.handleUpdateInput} />
                    <button>Add Event</button>
                </form>
            </div>
        )
    }
}

export default AddEvent