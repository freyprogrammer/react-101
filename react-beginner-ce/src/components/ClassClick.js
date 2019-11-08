import React, { Component } from 'react'

class ClassClick extends Component {
    render() {
        function clickHandler(){
            console.log('You Clicked This Class!')
        }
        return (
            <div>
                <button onClick={clickHandler}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick
