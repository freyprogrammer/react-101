import React from 'react'

const navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar
                    <span className="badge badge-light">
                        {props.totalCounters}
                    </span>
                </a>
            </nav>
        </div>
    )
}

export default navbar

