import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-info position-sticky top-0 start-0 z-3 border-bottom border-1">
            <div className="container-fluid font2">
                <Link className="navbar-brand change hover1" to="home">{props.name}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 font1">
                        <li className="nav-item">
                            <Link className="nav-link change" to="home"><i className="bi bi-house mx-1"></i>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link change" to="menu"><i className="bi bi-menu-app mx-1"></i>Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link change" to="about"><i className="bi bi-shop mx-1"></i>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link change" to="bookTable"><i className="bi bi-table mx-1"></i>Book Table</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link change" to='/'><i className="bi bi-person-circle mx-1"></i>Login</Link>
                        </li>
                        <li>
                            <Link className="nav-link change" to="/"><i className="bi bi-search mx-1"></i>Search</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
