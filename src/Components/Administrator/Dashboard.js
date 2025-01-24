
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    function logout(e){
        e.preventDefault();
        localStorage.clear();
        navigate("/");
    }
    return (
        <>

        {/* Outlet */}
            <div className="div">
                <div className="row">
                    <div className="col-lg-2">
                        <div style={{"hieght":"500px", "lineHeight": "2"}}>
                            <ul className="text-warning" style={{"backgroundColor": "#e9ecef", "fontSize":"20px"}}>
                                <li className="nav-link text-warning"><Link className="text-dark" to="/admin/dashboard">Dashboard</Link></li>
                                {/* <li><Link to="/admin/productcategory">Product Category</Link></li> */}
                                <li className="nav-link link-dark"><Link className="text-dark" to="/admin/productlists">Products</Link></li>
                                <li className="nav-link link-dark"><Link className="text-dark" to="/admin/AddProduct">Add Product</Link></li>
                                <li className="nav-link link-dark"><Link className="text-dark" to="/admin/orders">Order</Link></li>
                                {/* <li className="nav-link link-dark"><Link className="text-dark" to="/admin/fixedorder">Fixed Order</Link></li> */}
                                <li className="nav-link link-dark"><Link className="text-dark" to="/admin/sidebar">Sidebar</Link></li>
                                <li className="nav-link link-light"><Button style={{"backgroundColor":"#88c8bc", "color": "black" }} onClick={(e)=> logout(e) }>Logout</Button></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-10">
                        {/* <div>
                            Breadcrumbs
                            <div className="breadcrumbs">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <p className="bread"><span><a href="">Admin</a></span> / <span>Dashboard</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="container">
                                    <div className="row">
                                        <div className='col-lg-12 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                                            <h1 className='my-auto text-light'>Dashboard</h1>
                                        </div>
                                    </div>

                                    Product List
                                    <div className='container'>
                                        <div className="row mt-4">
                                            <div className='col-lg-4'>
                                                <div className="jumbotron rounded-5">
                                                    <h1 className="display-5 fw-bold">Users</h1><hr className="my-4" /><p className="lead">
                                                        <a className="btn btn-primary btn-lg" style={{ backgroundColor: "#88c8bc" }} href="#" role="button">Learn more</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className="jumbotron rounded-5">
                                                    <h1 className="display-5 fw-bold">Products</h1> <hr className="my-4" /><p className="lead">
                                                        <a className="btn btn-primary btn-lg" style={{ backgroundColor: "#88c8bc" }} href="#" role="button">Learn more</a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='col-lg-4'>
                                                <div className="jumbotron rounded-5">
                                                    <h1 className="display-5 fw-bold">Hello</h1><hr className="my-4" /> <p className="lead">
                                                        <a className="btn btn-primary btn-lg" style={{ backgroundColor: "#88c8bc" }} href="#" role="button">Learn more</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard;