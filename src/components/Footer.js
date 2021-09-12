import React from 'react'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2>Company</h2>
                                <ul>
                                    <li>
                                    <Link to="#">About Us</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Privacy Policies</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Contact</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Visit Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Support</h2>
                                <ul>
                                    <li>
                                    <Link to="#">Terms</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Conditions</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Offers</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Gift Vouchers</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Services</h2>
                                <ul>
                                    <li>
                                    <Link to="#">Download App</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Share Us</Link>
                                    </li>
                                    <li>
                                    <Link to="#">Call Us</Link>
                                    </li>
                                    <li>
                                    <Link to="/">Mail Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Social Media</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <Link to=""><i className="fab fa-instagram font-awesome-style"></i></Link>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <Link to=""><i className="fab fa-facebook font-awesome-style"></i></Link>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <Link to=""><i className="fab fa-twitter font-awesome-style"></i></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="mt-5">
                    <p className="main-hero-para text-center w-100">Copyright @2020-2021 All. right reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
