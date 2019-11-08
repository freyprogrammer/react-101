import React from 'react'
import Person from './Person'

function NameList() {
    const person = [
        {
            id: 1,
            name: 'Frey',
            age: 18,
            skills: 'Hacking'
        },
        {
            id: 2,
            name: 'Vance',
            age: 17,
            skills: 'Programming'
        },
        {
            id: 3,
            name: 'Robin',
            age: 20,
            skills: 'Photography'
        }
    ];
    const personList = person.map(x => <Person key={x.id} person={x}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
