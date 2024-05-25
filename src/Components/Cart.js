import React, { useEffect } from 'react'
import cartimg from '../images/item-6.jpg'
import cartimg2 from '../images/item-7.jpg'
import cartimg3 from '../images/item-8.jpg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeRemoveProduct, incrementQuantity, decrementQuantity } from '../state/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
	let alltotal = 10;

	let [count, setCount] = useState(1);

	let data = useSelector((state) => state.cart);
	let dispatch = useDispatch();
	// console.log(data);

	// function removeProduct(e, product) {
	// 	e.preventDefault();
	// 	dispatch(storeRemoveProduct(product.id));
	//   }

	function handleIncrement(productId) {
		// alert(productId)
		dispatch(incrementQuantity(productId));
	};

	function handleDecrement(productId) {
		dispatch(decrementQuantity(productId));
	};


	// useEffect(()=>{
	// 	let alltotal = 0;
	// 	for (let index = 0; index < data.length; index++) {
	// 		const element = data[index];
	// 		if (element[i]) {
	// 		}

	// 	}
	// },[])

	const handlePayment = () => {
		var options = {
			"key": "rzp_live_Ay9af2dQeUH8A6",
			"amount": (alltotal * 100),
			"name": "Footware",
			"description": "Footware website purchase",
			"image": "https://www.abhijitgatade.com/assets/img/favicon.png",
			"order_id": "",
			"handler": function (response) {
				console.log(response);
				if (response.status_code == 200) {
					alert("Payment successful");
				}
				else {
					alert("Payment Failed");
				}
			},
			"prefill": {
				"name": "",
				"email": "",
				"contact": ""
			},
			"notes": {
				"address": ""
			},
			"theme": {
				"color": "#3399cc"
			}
		};
		var rzp1 = new window.Razorpay(options);
		rzp1.open();
	}



	return (
		<div>
			<div className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col">
							<p className="bread"><span><a href="index.html">Home</a></span> / <span>Shopping Cart</span></p>
						</div>
					</div>
				</div>
			</div>



			<div className="container">
				<div className="row row-pb-lg">
					<div className="col-md-12">
						<div className="product-name d-flex">
							<div className="one-forth text-left px-4">
								<span>Product Details</span>
							</div>
							<div className="one-eight text-center">
								<span>Price</span>
							</div>
							<div className="one-eight text-center">
								<span>Quantity</span>
							</div>
							<div className="one-eight text-center">
								<span>Total</span>
							</div>
							<div className="one-eight text-center px-4">
								<span>Remove</span>
							</div>
						</div>

						{
							data.map((eachData) => {

								alltotal += eachData.price * count


								return (
									<div className="product-cart d-flex">
										<div className="one-forth">
											<div className="product-img" style={{ backgroundImage: `url(${eachData.image})` }}>
											</div>
											<div className="display-tc">
												<h3>{eachData.title}</h3>
											</div>
										</div>
										<div className="one-eight text-center">
											<div className="display-tc">
												<span className="price">₹ {eachData.price}</span>
											</div>
										</div>
										<div className="one-eight text-center">
											<div className="display-tc">
												<div className='d-flex'>
													<button className='btn btn-primary' onClick={() => handleDecrement(eachData.id)}>-</button>
													<input type="text" name="quantity" className="form-control input-number text-center" value={eachData.quantity} min="1" max="100" />
													<button className='btn btn-primary' onClick={() => handleIncrement(eachData.id)}>+</button>
												</div>
											</div>
										</div>
										<div className="one-eight text-center">
											<div className="display-tc">
												<span className="price">₹ {eachData.price * eachData.quantity}</span>
											</div>
										</div>
										<div className="one-eight text-center">
											<div className="display-tc">
												<button className='btn btn-secondary' onClick={() => dispatch(storeRemoveProduct(eachData.id))}>X</button>
											</div>
										</div>
									</div>
								)
							})
						}

					</div>
				</div>
				<div className="row row-pb-lg">
					<div className="col-md-12">
						<div className="total-wrap">
							<div className="row">
								<div className="col-sm-8">
									<form action="#">
										<div className="row form-group">
											<div className="col-sm-9">
												<input type="text" name="quantity" className="form-control input-number" placeholder="Your Coupon Number..." />
											</div>
											<div className="col-sm-3">
												<input type="submit" value="Apply Coupon" className="btn btn-primary" />
											</div>
										</div>
									</form>
								</div>
								<div className="col-sm-4 text-center">
									<div className="total">
										<div className="sub">
											<p><span>Subtotal:</span> <span>$200.00</span></p>
											<p><span>Delivery:</span> <span>$0.00</span></p>
											<p><span>Discount:</span> <span>$45.00</span></p>
										</div>

										<div className="grand-total">
											{/* <p><span><strong>Total:</strong></span> <span>$450.00</span></p> */}
											<p><span><strong>Total:</strong></span> <span>{alltotal}</span></p><br />
											<div class="row">
												<div class="col-md-12 text-center">
													<p><Link to={"/checkout"} href="#" class="btn btn-primary">Proceed to Chekout</Link></p>
												</div>
											</div>
											<button className='btn btn-success' onClick={(e) => { handlePayment(); }}>Pay Now</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h2>Related Products</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 col-lg-3 mb-4 text-center">
						<div className="product-entry border">
							<a href="#" className="prod-img">
								<img src="images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
							</a>
							<div className="desc">
								<h2><a href="#">Women's Boots Shoes Maca</a></h2>
								<span className="price">$139.00</span>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-lg-3 mb-4 text-center">
						<div className="product-entry border">
							<a href="#" className="prod-img">
								<img src="images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
							</a>
							<div className="desc">
								<h2><a href="#">Women's Minam Meaghan</a></h2>
								<span className="price">$139.00</span>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-lg-3 mb-4 text-center">
						<div className="product-entry border">
							<a href="#" className="prod-img">
								<img src="images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
							</a>
							<div className="desc">
								<h2><a href="#">Men's Taja Commissioner</a></h2>
								<span className="price">$139.00</span>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-lg-3 mb-4 text-center">
						<div className="product-entry border">
							<a href="#" className="prod-img">
								<img src="images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
							</a>
							<div className="desc">
								<h2><a href="#">Russ Men's Sneakers</a></h2>
								<span className="price">$139.00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
