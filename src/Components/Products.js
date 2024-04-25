import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import axios from 'axios'

import { storeAddToCart } from "../state/cartSlice";

export default function Products() {

    const [spinner, setSpinner] = useState(true);
    const dispatch = useDispatch();

    const [productData, setProductData] = useState([]);
    useEffect(() => {
        axios.get("https://63c663fcd307b76967380f55.mockapi.io/footwear")
            .then((res) => {
                console.log(res.data);
                setProductData(res.data)
                setSpinner(false)
            })
    }, [])

    function addToCart(e, product) {
        e.preventDefault();
        let cartproduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            mrp: product.mrp,
            image: product.image,
            quantity: 1,
        };

        console.log(product);
        console.log(cartproduct);
        dispatch(storeAddToCart(cartproduct));
        // dispatch(storeAddToCart(product));

        console.log(cartproduct)
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 ">
                        <h2 style={{ textAlign: "center" }} className='mb-4'>All Products</h2>
                        <section>
                            <div className='row justify-content-center'>

                                {

                                    spinner
                                        ?
                                        <div class="d-flex justify-content-center">
                                            <div class="spinner-border  text-info" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                        :
                                        productData.map((eachData, index) => {
                                            return (
                                                // <Productcard key={index} img={item.image} title={item.title} text={item.text} price={item.price} />


                                                <div key={index} className="card m-1" style={{ width: "18rem" }}>
                                                    <img src={eachData.image} className="card-img-top" alt='product_Image' />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{eachData.title}</h5>
                                                        <p className="card-text m-1">{eachData.price} <del>{eachData.mrp}</del></p>
                                                        {/* <button onClick={(e) => addToCart(e, eachData)} className='btn btn-primary'>Add to Cart</button> */}
                                                        <button onClick={(e) => addToCart(e, eachData)} className='btn btn-primary'>Add to Cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })}

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}




