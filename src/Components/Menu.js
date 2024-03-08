import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Menu() {
    return (
        <div className='container-fluid my-2 py-1'>
            <div className="row">
                <div className="col-12">
                    <h3 className='display-3 text text-center'>Menu</h3>
                </div>
            </div>
            <div className="row mx-auto container-md font1">
                <div className="col-6 col-md-2 mx-auto my-1">
                    <Link className="btn btn-outline-warning d-block mx-auto w-100 hover1 select" to={`all`}>All</Link>
                </div>
                <div className="col-6 col-md-2 mx-auto my-1">
                    <Link className="btn btn-outline-warning d-block mx-auto w-100 hover1 select" to={`burger`}>Burger</Link>
                </div>
                <div className="col-4 col-md-2 mx-auto my-1">
                    <Link className="btn btn-outline-warning d-block mx-auto w-100 hover1 select" to={`pizza`}>Pizza</Link>
                </div>
                <div className="col-4 col-md-2 mx-auto my-1">
                    <Link className="btn btn-outline-warning d-block mx-auto w-100 hover1 select" to={`pasta`}>Pasta</Link>
                </div>
                <div className="col-4 col-md-2 mx-auto my-1">
                    <Link className="btn btn-outline-warning d-block mx-auto w-100 hover1 select" to={`fries`}>Fries</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
