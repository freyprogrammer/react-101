import React, { Component } from 'react';
import Counter from './counter';

export class Counters extends Component {
    
    render() {
        
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-info btn-lg m-2">Reset</button>
                {this.props.counters.map(counter => 
                <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete} 
                onIncrement={this.props.onIncrement} 
                counter={counter}/>
                )}
            </div>
        )
    }
}

export default Counters
