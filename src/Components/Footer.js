import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./Assets/images/favicon.png"

export default function Footer(props) {
    return (
        <>
            <div className="container-fluid position-relative bottom-0 start-0">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 my-3 border-top">
                        <p class="col-md-4 mb-0 text-body-secondary">© 2023 {props.name}, Inc</p>
                        <Link href="home" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img class="bi me-2" src={logo} width="40" height="32" alt=""/>
                        </Link>
                        <ul class="nav col-md-4 justify-content-end">
                            <li class="nav-item"><Link to="home" class="nav-link px-2 text-body-secondary">Home</Link></li>
                            <li class="nav-item"><Link to="menu" class="nav-link px-2 text-body-secondary">Menu</Link></li>
                            <li class="nav-item"><Link to="about" class="nav-link px-2 text-body-secondary">About</Link></li>
                            <li class="nav-item"><Link to="bookTable" class="nav-link px-2 text-body-secondary">Book Table</Link></li>
                        </ul>
                    </footer>
                    </div>
                </div>
            </div>
        </>
    )
}
