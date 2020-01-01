import React, { Component } from 'react'

export class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar<span className="badge badge-light">{this.props.totalCounters}</span></a>
                </nav>
            </div>
        )
    }
}

export default navbar

