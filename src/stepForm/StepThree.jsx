import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addStepForm } from '../state/formSlice'
import { Link, useNavigate } from 'react-router-dom'

function StepThree() {
    const navigate = useNavigate();
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

    function handleSubmit(e) {
        e.preventDefault()
        console.log(data);
        dispatch(addStepForm(data))
        alert("Data Submited Successfully")
    };

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-5">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Step Three</h3>
                                    <form>

                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">DOB</label>
                                                    <input onClick={(e) => handleChange(e)} type="date" id="dob" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">

                                                <div data-mdb-input-init className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Gender</label>
                                                    <select id='gender' onChange={(e) => handleChange(e)} value={data.gender} className="form-control form-control-lg">
                                                        <option value="">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="mt-4 pt-2">
                                            <Link to={"/steptwo"}>
                                                <button className='btn btn-primary m-1'>Previous</button>
                                            </Link>
                                            <button onClick={(e) => handleSubmit(e)} className='btn btn-primary'>Submit</button>
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

export default StepThree