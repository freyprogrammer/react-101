import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
       alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`)
       event.preventDefault()
    }
    
    render() {
        const {username, comment, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type='text' placeholder='Username' value={username} onChange={this.handleUsernameChange} />
                <br/>
                <label>Comment: </label>
                <textarea type='text' placeholder='Comment' value={comment} onChange={this.handleCommentChange} />
                <br/>
                <label>Topic: </label>
                <select value={topic}  onChange={this.handleTopicChange} >
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='Vue'>Vue</option>
                </select>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
