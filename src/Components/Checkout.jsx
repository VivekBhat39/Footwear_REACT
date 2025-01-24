import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

export default function Checkout() {

    //Check Terms & Conditions
    const [terms, setTerms] = useState(false)

    // console.log(terms);
    const navigate = useNavigate();
    const finalAmount = useSelector((state) => state.cart.finalAmount);
    const cartProducts = useSelector((state) => state.cart.products);
    // console.log(cartProducts);

    const [data, setData] = useState({
        country: "",
        name: "",
        surname: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        mobile: "",
        orders: cartProducts,
        subTotal: finalAmount
    })

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    };

    function handleSubmit() {

        if (data.country.trim() === "" || data.name.trim() === "" || data.surname.trim() === "" ||
            data.address.trim() === "" || data.city.trim() === "" || data.state.trim() === "" ||
            data.zip.trim() === "" || data.email.trim() === "" || data.mobile.trim() === "") {

            Swal.fire({
                icon: "warning",
                text: "All Fields are Mandatory !"
            });

        } else {

            axios.post(process.env.REACT_APP_BASE_URL + "/orders", data)
                .then((res) => {
                    console.log(res.data);
                    handlePayment();
                })
        }

    }

    function handlePayment() {

        // alert("Proceed to Payment")
        if (terms) {
            var options = {
                "key": "rzp_test_4yosHYDduPYmKN", // Enter the Key ID generated from the Dashboard
                "amount": finalAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Cool Footwear", //your business name
                "description": "Test Transaction",
                "image": "http://localhost:3001/static/media/brand.1356b354e46d75d0c876.png",
                "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "handler": function (response) {
                    console.log(response);
                    if (response.razorpay_payment_id) {
                        // alert("Payment Successful")
                        navigate("/ordercomplete")
                    } else {
                        alert("Payment Failed")
                    }
                },
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                    "name": "Gaurav Kumar", //your customer's name
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        } else {
            // alert("Accept Terms and Condition !")
            Swal.fire({
                icon: "warning",
                text: "Accept Terms and Condition !"
            });
        }

    };

    return (
        <div>
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p class="bread"><span><a href="index.html">Home</a></span> / <span>Checkout</span></p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="colorlib-product">
                <div class="container">
                    <div class="row">
                        {/* --------- Billing Details ------- */}
                        <div class="col-lg-8">
                            <form method="post" class="colorlib-form">
                                <h2>Billing Details</h2>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="country">Select Country</label>
                                            <div class="form-field">
                                                <i class="icon icon-arrow-down3"></i>
                                                <select onChange={handleChange} name="people" id="country" class="form-control">
                                                    <option>Select country</option>
                                                    <option value="india">India</option>
                                                    <option value="china">China</option>
                                                    <option value="japan">Japan</option>
                                                    <option value="korea">Korea</option>
                                                    <option value="Philippines">Philippines</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="fname">First Name</label>
                                            <input onChange={handleChange} type="text" id="name" class="form-control" placeholder="Your firstname" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="lname">Last Name</label>
                                            <input onChange={handleChange} type="text" id="surname" class="form-control" placeholder="Your lastname" />
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="fname">Address</label>
                                            <input onChange={handleChange} type="text" id="address" class="form-control" placeholder="Enter Your Address" />
                                        </div>
                                        {/* <div class="form-group">
                                            <input onChange={handleChange} type="text" id="address2" class="form-control" placeholder="Second Address"/>
                                        </div> */}
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="companyname">Town/City</label>
                                            <input onChange={handleChange} type="text" id="city" class="form-control" placeholder="Town or City" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="stateprovince">State</label>
                                            <input onChange={handleChange} type="text" id="state" class="form-control" placeholder="State Province" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="lname">Zip/Postal Code</label>
                                            <input onChange={handleChange} type="number" id="zip" class="form-control" placeholder="Zip / Postal" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="email">E-mail Address</label>
                                            <input onChange={handleChange} type="text" id="email" class="form-control" placeholder="State Province" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="Phone">Phone Number</label>
                                            <input onChange={handleChange} type="number" id="mobile" class="form-control" placeholder="" />
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="radio">
                                                {/* <label><input type="radio" name="optradio" /> Create an Account? </label>
                                                <label><input type="radio" name="optradio" /> Ship to different address</label> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* --------- Billing Details ------- */}



                        {/* --------- Cart Total ------------ */}
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="cart-detail">
                                        <h2>Cart Total</h2>
                                        <ul>
                                            <li>
                                                <span>Subtotal</span> <span>{finalAmount}/-</span>
                                                <ul>
                                                    {
                                                        cartProducts.map((product) => {
                                                            return (
                                                                <li><span>{product.quantity}  x  {product.title}</span> <span>{product.price}/-</span></li>
                                                            )
                                                        })
                                                    }
                                                    {/* <li><span>1 x Product Name</span> <span>$99.00</span></li> */}
                                                    {/* <li><span>1 x Product Name</span> <span>$78.00</span></li> */}
                                                </ul>
                                            </li>
                                            <li><span>Shipping</span> <span>50.00/-</span></li>
                                            <li><span>Order Total</span> <span>{finalAmount - 50.00}/-</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="w-100"></div>

                                <div class="col-md-12">
                                    <div class="cart-detail">
                                        <h2>Payment Method</h2>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <div class="radio">
                                                    <label><input type="radio" name="optradio" /> Direct Bank Tranfer</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <div class="radio">
                                                    <label><input type="radio" name="optradio" /> Check Payment</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" name="optradio" /> Paypal</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <div class="checkbox">
                                                    <label>
                                                        <input className='me-1' checked={terms} onChange={(e) => setTerms(e.target.checked)} type="checkbox" value="checked" />
                                                        I have read and accept the terms and conditions
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <p><button onClick={handleSubmit} class="btn btn-primary">Place an Order</button></p>
                                </div>
                            </div>
                        </div>

                        {/* --------- Cart Total ------------ */}

                    </div>
                </div>
            </div>
        </div>
    )
}
