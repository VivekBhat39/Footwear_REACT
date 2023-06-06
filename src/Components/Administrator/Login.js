import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import admin from "./Login"

export default function Admin() {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [isLogedIn, setLogedIn] = useState(false)



    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(data);
        let loginData = { "name": "Vivek Bhat", "username": data.username, "usertype": "admin" }
        // localStorage.setItem("username", data.username);
        // localStorage.setItem("password", data.password);
        if (data.username == "admin" || data.password == "admin") {
            localStorage.setItem("data", JSON.stringify(loginData));
            setLogedIn(true);
            navigate("/admin/dashboard")
        } else {
            alert("Invalid Credential");
        }
    }

    useEffect(() => {
        if (localStorage.getItem("data") == null) {
            setLogedIn(true);
            // alert("Hello")
        } else {
            navigate("/admin/dashboard")
            // setLogedIn(false);
        }
    }, [])

    return (
        <>
        {/* {
            isLogedIn ?  */}
            <div className="container-fluid">
                <div className="col-lg-12">
                    <div>
                        {/* <section className="vh-100" style={{backgroundColor: "#508bfc"}}> */}
                        {/* <section className="vh-100" style={{backgroundColor: "#6a11cb"}}> */}
                        {/* <section className="vh-100" style={{backgroundColor: "#88c8bc"}}> */}
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card shadow-2-strong" style={{ borderRadius: "10px" }}>
                                        <form action="">
                                            <div className="card-body p-1 text-center">

                                                {/* <h3 className="mb-3">Sign in</h3> */}
                                                <div className="form-outline mb-4">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                                    <input type="text" name='username' value={data.username} onChange={(e) => handleChange(e)} className="form-control form-control-lg" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                                    <input type="password" name='password' value={data.password} onChange={(e) => handleChange(e)} className="form-control form-control-lg" />
                                                </div>

                                                <button style={{ backgroundColor: "#88c8bc" }} className="btn  btn-md" onClick={(e) => handleSubmit(e)} type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </section> */}
                    </div>
                </div>
            </div>

            {/* : navigate("/admin")
        } */}
            
        </>

    )
}
