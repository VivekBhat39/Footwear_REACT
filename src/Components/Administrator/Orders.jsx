import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + "/orders")
            .then((res) => {
                // console.log(res.data);
                setOrders(res.data)
            })
    }, [])

    return (
        <>
            <div>
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="bread"><span><a href="">Admin</a></span> / <span>Order</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        {/* <div className="row">
                                       <div className='col-lg-12 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                                           <h1 className='my-auto text-light'>Orders</h1>
                                       </div>
                                   </div> */}

                        {/* Product List */}
                        <div className="mt-3">
                            <table class="table bg-white" >
                                <thead className='border rounded-pill' style={{ "backgroundColor": "#88c8bc" }}>
                                    <tr className='text-center'>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">SubTotal</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        orders.map((eachData, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{eachData.name}</td>
                                                    <td>{eachData.email}</td>
                                                    <td>{eachData.mobile}</td>
                                                    <td>{eachData.subTotal}</td>
                                                    <td>
                                                        {/* <Link to={"/admin/AddProduct/" + eachData.id}> */}
                                                        <button className='btn' style={{ "backgroundColor": "#88c8bc", "color": "black" }}>View</button>
                                                        {/* </Link> */}
                                                        <button className='btn' style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Print</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Orders