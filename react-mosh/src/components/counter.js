import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0,
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
