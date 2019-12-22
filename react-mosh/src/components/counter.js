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
    render() {
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary m-2'>+</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        )
    }

    getBadgeClasses() {
        let classCount = "badge m-2 badge-";
        classCount += this.state.count === 0 ? "warning" : "primary";
        return classCount;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero": count;  
    }
}

export default Counter;
