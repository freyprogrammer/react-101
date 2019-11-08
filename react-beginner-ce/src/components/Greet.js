import React from 'react';

const Greet = (props) => {
    const {name, weapon} = props;
    return (
        <div>
            <h1>Hello {name} weapon {weapon}</h1>
            {props.children}
        </div>
    )
}

export default Greet;