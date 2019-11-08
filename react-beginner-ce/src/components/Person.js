import React from 'react'

function Person(props) {
    return (
        <div>
            <h1>Name is {props.person.name} and skills is {props.person.skills}</h1>
        </div>
    )
}

export default Person
