import React, { useState } from 'react'

function Contact() {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) =>{
        const {name, value} = event.target;

        setData((preVal) =>{
            return{
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`From submitted ${data.fullname}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div my-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} 
                                onChange={InputEvent} 
                                placeholder="Enter your name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} 
                                onChange={InputEvent} 
                                placeholder="Mobile Number"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} 
                                onChange={InputEvent} 
                                placeholder="Enter your email"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} 
                                onChange={InputEvent} ></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit" >Submit Form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
