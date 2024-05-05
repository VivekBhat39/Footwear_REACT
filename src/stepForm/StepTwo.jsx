import React, { useState } from 'react'
import { addStepForm } from '../state/formSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function StepTwo() {
    const dispatch = useDispatch()
    const form = useSelector((step) => step.form)

    const [data, setData] = useState({
        name: form.name,
        surname: form.surname,
        email: form.email,
        phone: form.phone,
        dob: form.dob,
        gender: form.gender,
    });

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data);
    };

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-5">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Step Two</h3>
                                    <form>

                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Email Address</label>
                                                    <input value={data.email} onChange={(e) => handleChange(e)} type="text" id="email" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Phone Number</label>
                                                    <input value={data.phone} onChange={(e) => handleChange(e)} type="text" id="phone" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>


                                        <div className="mt-4 pt-2">
                                            <Link to={"/stepformone"}>
                                                <button className='btn btn-primary m-1'>Previous</button>
                                            </Link>
                                            <Link to={"/stepthree"}>
                                                <button onClick={() => dispatch(addStepForm(data))} className='btn btn-primary'>Next</button>
                                            </Link>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StepTwo