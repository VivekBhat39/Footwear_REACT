import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Dashboard2() {
    return (
        <div>
            <div>
                {/* Breadcrumbs */}
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
                        {/* <div className="row">
                            <div className='col-lg-12 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                                <h1 className='my-auto text-light'>Dashboard</h1>
                            </div>
                        </div> */}

                        {/* Product List */}
                        <div className='container'>
                            <div className="row mt-4">
                                <div className='col-lg-4'>
                                    {/* <div className="jumbotron rounded-5">
                                        <h1 className="display-5 fw-bold text-center"><i class="fa-solid fa-users fa-2x"></i></h1><hr className="my-4" />
                                        <div className="text-center">
                                            <Button style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Users</Button>
                                        </div>
                                    </div> */}

                                    <div class="card" style={{ "width": "18rem", "borderRadius": "40px", "backgroundColor": "#88c8bc" }}>
                                        <div class="card-body">
                                            <h5 class="card-title" className="display-5 fw-bold text-center"><i class="fa-solid fa-users fa-2x"></i></h5>
                                            <hr className="my-4" />  <div className="text-center">
                                                <button className='btn border border-dark' style={{ "backgroundColor": "#88c8bc", "color": "black", "width": "100px" }} onClick={(e) => { alert("Not Available") }}>Users</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-4'>
                                    {/* <div className="jumbotron rounded-5">
                                        <h1 className="display-5 fw-bold text-center"><i class="fa-solid fa-bag-shopping fa-2x"></i></h1> <hr className="my-4" />
                                        <div className="text-center">
                                            <Button style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Products</Button>
                                        </div>
                                    </div> */}
                                    <div class="card" style={{ "width": "18rem", "borderRadius": "40px", "backgroundColor": "#88c8bc" }}>
                                        <div class="card-body">
                                            <h5 class="card-title" className="display-5 fw-bold text-center"><i class="fa-solid fa-bag-shopping fa-2x"></i></h5>
                                            <hr className="my-4" />  <div className="text-center">
                                                <Link to={"/admin/productlists"}>
                                                    <button className='btn border border-dark' style={{ "backgroundColor": "#88c8bc", "color": "black", "width": "100px" }}>Products</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-4'>
                                    {/* <div className="jumbotron rounded-5">
                                        <h1 className="display-5 fw-bold text-center"><i class="fab fa-first-order fa-2x"></i></h1><hr className="my-4" />
                                        <div className="text-center">
                                            <Button style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Order</Button>
                                        </div>
                                    </div> */}
                                    <div class="card" style={{ "width": "18rem", "borderRadius": "40px", "backgroundColor": "#88c8bc" }}>
                                        <div class="card-body">
                                            <h5 class="card-title" className="display-5 fw-bold text-center"><i class="fab fa-first-order fa-2x"></i></h5>
                                            <hr className="my-4" />  <div className="text-center">
                                                <Link to={"/admin/order"}>
                                                    <button className='btn border border-dark' style={{ "backgroundColor": "#88c8bc", "color": "black", "width": "100px" }}>Orders</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard2