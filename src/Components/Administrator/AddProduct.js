import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

function AddProduct() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        category: "",
        price: "",
        mrp: "",
        image: "",
        description: ""
    })
// alert(id)
    useEffect(() => {
        if (id !== undefined) {

            axios.get("https://63c663fcd307b76967380f55.mockapi.io/footwear/" + id)
                .then((res) => {
                    setData({
                        title: res.data.title,
                        category: res.data.category,
                        price: res.data.price,
                        mrp: res.data.mrp,
                        image: res.data.image,
                        description: res.data.description
                    })
                })
        }
    }, [])

    function handleChange(e) {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (id === undefined) {
            axios.post("https://63c663fcd307b76967380f55.mockapi.io/footwear/", data)
                .then((res) => {
                    console.log(res.data);
                    navigate("/admin/productlists")
                })
            // console.log(data);
        } else {
            axios.put("https://63c663fcd307b76967380f55.mockapi.io/footwear/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    navigate("/admin/productlists")
                })
            // console.log(data);

        }

    }
    return (

        <div>
            <div>
                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="bread"><span><a href="">Admin</a></span> / <span>Add Product</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div>
                    <div className="container">
                        {/* <div className="row">
                            <div className='col-lg-12 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                                <h1 className='my-auto text-light'>Add Product</h1>
                            </div>
                        </div> */}

                        {/* Add Product */}
                        <div className="row mt-2">
                            <div className="col-lg-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Title</label>
                                    <input type="text" name='title' value={data.title} onChange={(e) => handleChange(e)} class="form-control border border-secondary" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Category</label>
                                    <select name='category' value={data.category} onChange={(e) => handleChange(e)} class="form-select form-control border border-secondary border-5" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-lg-3">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Price</label>
                                    <input type="number" name='price' value={data.price} onChange={(e) => handleChange(e)} class="form-control border border-secondary border-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">MRP</label>
                                    <input type="number" name='mrp' value={data.mrp} onChange={(e) => handleChange(e)} class="form-control border border-secondary border-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Image</label>
                                    <input type="text" name='image' value={data.image} onChange={(e) => handleChange(e)} class="form-control border border-secondary border-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Upload Image</label>
                                    <input class="form-control border border-secondary border-5" type="file" id="formFile" />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-10">
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                    <textarea name='description' value={data.description} onChange={(e) => handleChange(e)} class="form-control form-control border border-secondary border-5" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button className='btn' style={{ "backgroundColor": "#88c8bc", "color": "black" }} onClick={(e) => handleSubmit(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct