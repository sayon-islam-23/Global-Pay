import React, {useState} from 'react'

function Contact() {
    const [userData, setUserData] = useState(
        {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
        }
    );
        let name, value;
    const postUserData = (event)=>{
        name= event.target.name;
        value = event.target.value;

        setUserData({...userData, [name]:value})
    };
    const submitData = async (event)=>{
        event.preventDefault();
        const {firstName,lastName,phone,email,address,message} = userData;

        if (firstName && lastName && phone && email && address && message){
        const res = await fetch('https://global-pay-88b08-default-rtdb.firebaseio.com/userDataRecords.json',{method:"POST", headers:{"Content-Type" : "application/json"}, body:JSON.stringify({
            firstName,lastName,phone,email,address,message})});

            if(res){
            setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
            })
                alert("Your Response Recorded");
            }
            else{
                alert("Please fill the form correctly")
            }
        }
        else{
            alert("Please fill the form correctly")
        }
    };
    return (
        <>
            <section className="contactus-section">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">Contact With Our <br className="break"/>Customer Service</h1>
                                    <p className="main-hero-para">Contact our adminstration 24x7, for any payment issue.</p>
                                    <figure><img src="https://www.pngall.com/wp-content/uploads/5/Online-Payment-PNG-Pic.png" alt="contact-chobi" className="img-fluid"/></figure>
                                </div>
                                <div className="col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="firstName" id="" placeholder="Enter First Name" className="form-control" value={userData.firstName} onChange={postUserData}/>
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="search" name="lastName" id="" placeholder=" Enter Last Name" className="form-control" value={userData.lastName} onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="number" name="phone" id="" placeholder="Enter Phone Number" className="form-control" value={userData.phone} onChange={postUserData}/>
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="email" name="email" id="" placeholder="Enter Mail id" className="form-control" value={userData.email} onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input  name="address" id="" placeholder="Enter Your Address" className="form-control" value={userData.address} onChange={postUserData}/>
                                            </div>
                                            <div className="col-12 contact-input-field">
                                                <input type="text" name="message" id="" placeholder="Enter Your Message" className="form-control" value={userData.message} onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" className="main-hero-para">I accept all the terms & conditions</label>
                                        </div>
                                        <button type="submit" className ="btn btn-style w-100" onClick={submitData}>Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
