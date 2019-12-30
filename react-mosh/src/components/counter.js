import React, { Component } from 'react'

export class Counter extends Component {

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() {
        return (
            <div>
                <h2>Counter #{this.props.counter.id}</h2>
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button  onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary m-2'>Increment</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger m-2'>Delete</button>
            </div>
        )
    }

    getBadgeClasses() {
        let classCount = "badge m-2 badge-";
        classCount += this.props.counter.value === 0 ? "warning" : "primary";
        return classCount;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "0": value;
    }
}

export default Counter;
