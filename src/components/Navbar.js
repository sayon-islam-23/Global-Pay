import React, { useState } from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {

    const [show, setShow] = useState(false)
    return (
        <>
        <section className="navbar-bg">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark py-3">
    <div className="container">
        <Link className="navbar-brand" to="/"><i class="fas fa-globe logo mx-3"></i>GlobalPay</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>setShow(!show)}>
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? "show": ""}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/PageServices">Services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/About_us">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/Contact_us">Contact</Link>
            </li>
        </ul>
        <form className="d-flex mx-2">
            <button className="btn btn-style" type="submit">Sign Up</button>
            <button className="btn btn-style" type="submit">Log In</button>
        </form>
        </div>
    </div>
    </nav> 
    </section> 
    </>
    )
}

export default Navbar
