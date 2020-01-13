import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''
        }
    }
    
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form>
                    <span>User ID: </span><input type="text" name="userId" value={userId}/>
                    <br />
                    <span>Title: </span><input type="tex" name="title" value={title}/>
                    <br />
                    <span>Body: </span><input type="tex" name="body" body={body}/>
                </form>
            </div>
        )
    }
}

export default PostForm
