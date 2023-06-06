import React from 'react'
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><a href="index.html">Admin</a></span> / <span>Product Category</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-right'>
               <button type="button" class="btn btn-primary rounded-pill" style={{ backgroundColor: "#279c86" }}><Link to="/admin/form">Add Category</Link></button>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className='col-lg-12 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                        <h1 className='my-auto text-light'>Product Category</h1>
                    </div>
                </div>
            </div>

            <table className="table table-striped table-hover mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Action</th>
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                    </tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default ProductCategory;