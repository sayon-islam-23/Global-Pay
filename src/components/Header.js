import React from 'react'

const Header = () => {
    return (
    <>
    <header>
        <section className="container main-hero-container">
            <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last" data-aos="fade-up">
                    <h1 className="display-2">
                        Online Payment Made <br/>Easy For You.
                    </h1>
                    <p className="main-hero-para">An e-commerce payment system facilitates the acceptance of electronic payment for online transactions. Global-Pay is one of the best, sequre and safe online payment method in India.</p>
                    <h3>Get Early Access</h3>
                    <div className="input-group mt-3">
                        <input type="text" className="rounded-pill me-3 p-2 form-control-text" placeholder="Enter Your UPI id."/>
                        <div className="input-group-button">Get it now</div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                    {/* <img src="https://www.pngall.com/wp-content/uploads/5/Online-Payment-PNG-Free-Image.png" alt="chobi-1" className="img-fluid"/> */}
                    <img src="https://business.stayflexi.com/wp-content/uploads/2020/04/Feature-Main-Payment.png" alt="chobi-1" className="img-fluid" data-aos="fade-up"/>
                    {/* <img src="./images/logo192.png" alt="chobi-2" className="img-fluid main-hero-img2"/> */}
                </div>
            </div>
        </section>
    </header>   
    </>
    )
}

export default Header
