import React, { Component } from 'react'
import ChildComponents from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parent: "PARENT NAME"
        }
        this.alertParent = this.alertParent.bind(this)
    }
    
    alertParent(childName) {
        alert(`Hello ${this.state.parent} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponents alertHandle={this.alertParent} />
            </div>
        )
    }
}

export default ParentComponent
