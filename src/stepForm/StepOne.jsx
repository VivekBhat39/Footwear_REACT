import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStepForm } from '../state/formSlice'
import { Link } from 'react-router-dom'

function StepOne() {
    // const dispatch = useDispatch()
    const form = useSelector((step) => step.form)

    const [data, setData] = useState({
        name: form.name,
        surname: form.surname,
        email: form.email,
        phone: form.phone,
        dob: form.dob,
        gender: form.gender,
    });

    // console.log(data);
    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data);
    };

    return (
        <div>
            <section className=" gradient-custom">
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-5">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Step One</h3>


                                    <div className="row">
                                        <div className="col-lg-12">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label">First Name</label>
                                                <input onChange={(e) => handleChange(e)}
                                                    value={data.name}
                                                    type="text" id="name" className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label">Last Name</label>
                                                <input onChange={(e) => handleChange(e)}
                                                    value={data.surname}
                                                    type="text" id="surname" className="form-control form-control-lg" />
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-lg-12">

                                            <div data-mdb-input-init className="form-outline">
                                                <label className="form-label">Gender</label>
                                                <select onChange={(e) => handleChange(e)} value={data.surname} class="form-select" aria-label="Default select example">
                                                    <option selected>Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div> */}


                                    <div className="mt-4 pt-2">
                                        <button className='btn btn-primary m-1'>Previous</button>
                                        <Link to={"/steptwo"}>
                                            <button
                                                // onClick={() => dispatch(addStepForm(data))} 
                                                className='btn btn-primary'>Next</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StepOne