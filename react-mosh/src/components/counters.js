import React, { Component } from 'react';
import Counter from './counter';

export class Counters extends Component {
    state = {
        counters: [
            {id: 1, id2: 2, value: 4},
            {id: 2, id2: 2, value: 99},
            {id: 3, id2: 2, value: 0},
            {id: 4, id2: 2, value: 0},
            {id: 5, id2: 2, value: 0}
        ]
    };
    render() {
        
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value} id={counter.id2}>
                    <h2>Counter #{counter.id}</h2>
                </Counter>
                )}
            </div>
        )
    }
}

export default Counters
