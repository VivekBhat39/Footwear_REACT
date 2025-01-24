import React from 'react'

const Order = () => {
    return (
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
                                           <h1 className='my-auto text-light'>Product</h1>
                                       </div>
                                   </div> */}

                    {/* Product List */}
                    <div className="mt-3">
                        <table class="table bg-white" >
                            <thead className='border rounded-pill' style={{ "backgroundColor": "#88c8bc" }}>
                                <tr className='text-center'>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">MRP</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <img src="" alt="Shoes" width="100" height="100"></img>
                                    </td>
                                    <td>title</td>
                                    <td>Brand</td>
                                    <td>category</td>
                                    <td>price</td>
                                    <td><del>mrp</del></td>
                                    <td>
                                        {/* <Link to={"/admin/AddProduct/" + eachData.id}> */}
                                        <button className='btn' style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Edit</button>
                                        {/* </Link> */}
                                        <button className='btn' style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Order;