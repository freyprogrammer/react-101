import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.alertHandle('Me')}>Greet Parent</button>
        </div>
    )
}
