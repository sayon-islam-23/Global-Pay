import React from 'react'
import { useState } from 'react'
import aboutapi from '../API/Aboutus'
const Aboutus = () => {
    const [aboutUs, /* setAboutUs */] = useState(aboutapi)
    return (
        <>
        <section className="common-section our-services">
            <div className="container mb-5 aboutus" data-aos="fade-up">
                <div className="row">
                    <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                    <img src="./images/about.png" alt="about us"/>
                    </div>
                    <div className="col-12 col-lg-7 our-services-list">
                        <h3 className="mini-title">--Available at google play store</h3>
                        <h1  className="main-heading">About Global-Pay</h1>
                        {aboutUs.map((element)=>{
                        const{id,title,info}= element;
                        return(
                            <>
                            <div class="row our-services-info">
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-10 our-services-data">
                            <h2>{title}</h2>
                            <p className="main-hero-para">{info}</p>
                            </div>
                            </div>
                            </>
                        )
                    })};
                        <br/>
                        <button className="btn-style btn-style-border">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Aboutus
