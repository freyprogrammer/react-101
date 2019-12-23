import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag99"]
    };
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    renderTags() {
        if(this.state.count === 0){
            return <p>There are no Tags</p>
        }
        return (
        <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        )
    }
    render() {
        
        return (
            <div>
                {this.state.count === 0 && 'Please create a new tag!'}
                {this.renderTags()}   
            </div>
        )
    }

}

export default Counter;
