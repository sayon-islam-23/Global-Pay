import React from 'react'
import workapi from '../API/Workapi'
import { useState } from 'react'

const HowItWorks = () => {

    const [workData,/*  setWorkData */] = useState(workapi);
    return (
        <>
        <section>
            <div className="work-container container" data-aos="fade-up">
                <h1 className="main-heading text-center" >How does it work</h1>
                <div className="row" data-aos="fade-up">
                    {workData.map((curElem)=>{
                        const {logo, title, info} = curElem;
                        return (
                            <>
                            <div className="col-12 col-lg-4 text-center work-container-subdiv" >
                            <i className={`font-awesome-style ${logo}`}></i>
                            <h2 className="sub-heading">{title}</h2>
                            <p className="main-hero-para w-100">{info}</p>
                            </div>
                            </>
                            )
                    })}
                </div>
            </div>
        </section>
        </>
    )
}
export default HowItWorks
