import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Product = () => {

    const [data, setData] = useState([])

    function loadData() {
        axios.get("https://63c663fcd307b76967380f55.mockapi.io/footwear")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
        console.log(data);
    }

    useEffect(() => {
        axios.get("https://63c663fcd307b76967380f55.mockapi.io/footwear")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
        console.log(data);
    }, [])

    function handleDelete(e, id) {
        e.preventDefault();
        axios.delete(`https://63c663fcd307b76967380f55.mockapi.io/footwear/${id}`)
            .then((res) => {
                console.log(res.data);
                loadData()
            })
    }

    return (
        <div>
            <div>
                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="bread"><span><a href="">Admin</a></span> / <span>Product</span></p>
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
                                    {
                                        data.map((eachData, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>
                                                        <img src={eachData.image} alt="Shoes" width="100" height="100"></img>
                                                    </td>
                                                    <td>{eachData.title}</td>
                                                    <td>{eachData.brand}</td>
                                                    <td>{eachData.category}</td>
                                                    <td>{eachData.price}</td>
                                                    <td><del>{eachData.mrp}</del></td>
                                                    <td>
                                                        <Link to={"/admin/AddProduct/" + eachData.id}>

                                                            <button className='btn' style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Edit</button>
                                                        </Link>
                                                        <button className='btn'
                                                            style={{ "backgroundColor": "#88c8bc", "color": "black" }}
                                                            onClick={(e) => { handleDelete(e, eachData.id) }}
                                                        >Delete</button>
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
        </div>
    )
}

export default Product;