import React, {Component} from 'react';

class Welcome extends Component {
    
    render() {
        const {name, weapon} = this.props
        return <h1>Welcome {name}/ {weapon}</h1>
    }
}

export default Welcome;