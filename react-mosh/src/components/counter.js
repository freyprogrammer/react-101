import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button className='btn btn-primary'>Increment</button>
            </React.Fragment>
        )
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? <h3>Zero</h3> : count;  
    }
}

export default Counter;
