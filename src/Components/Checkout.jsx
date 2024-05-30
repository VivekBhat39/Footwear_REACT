import React, { useState } from 'react'

export default function Checkout() {

    const [data, setData] = useState({
        country: "",
        name: "",
        surname: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        mobile: ""
    })

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
        console.log(data);
    }
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
                                            <input onChange={handleChange} type="text" id="zip" class="form-control" placeholder="Zip / Postal" />
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
                                            <input onChange={handleChange} type="text" id="mobile" class="form-control" placeholder="" />
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="radio">
                                                <label><input type="radio" name="optradio" /> Create an Account? </label>
                                                <label><input type="radio" name="optradio" /> Ship to different address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="cart-detail">
                                        <h2>Cart Total</h2>
                                        <ul>
                                            <li>
                                                <span>Subtotal</span> <span>$100.00</span>
                                                <ul>
                                                    <li><span>1 x Product Name</span> <span>$99.00</span></li>
                                                    <li><span>1 x Product Name</span> <span>$78.00</span></li>
                                                </ul>
                                            </li>
                                            <li><span>Shipping</span> <span>$0.00</span></li>
                                            <li><span>Order Total</span> <span>$180.00</span></li>
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
                                                        <input type="checkbox" value="" /> I have read and accept the terms and conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <p><button href="#" class="btn btn-primary">Place an Order</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
