import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0
    };
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter #{this.props.counter.id}</h2>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement("product")} className='btn btn-secondary m-2'>Increment</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger m-2'>Delete</button>
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
        return count === 0 ? "0": count;  
    }
}

export default Counter;
