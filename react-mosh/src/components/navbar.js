import React from 'react'

const navbar = ( {totalCounters} ) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar
                    <span className="badge badge-light">
                        {totalCounters}
                    </span>
                </a>
            </nav>
        </div>
    )
}

export default navbar

