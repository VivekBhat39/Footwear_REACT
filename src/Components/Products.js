import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import axios from 'axios'
import '../css/style.css'

import { storeAddToCart } from "../state/cartSlice";
import { Link } from 'react-router-dom';

export default function Products() {

	const [spinner, setSpinner] = useState(true);
	const dispatch = useDispatch();

	const [productData, setProductData] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [category, setCategory] = useState("");

	function fetchProductData() {
		// axios.get("https://63c663fcd307b76967380f55.mockapi.io/footwear")
		axios.get(process.env.REACT_APP_BASE_URL + "/footwear")
			.then((res) => {
				console.log(res.data);
				setProductData(res.data)
				setFilteredProducts(res.data)
				setSpinner(false)
			})
		// setFilteredProduct(productData)
	};

	useEffect(() => {
		fetchProductData();
		console.log(process.env.REACT_APP_MY_NAME);
		// console.log(process.env.REACT_APP_BASE_URL);

	}, [])

	function categoryFilter(category) {
		setCategory(category)
		const filteredProduct = productData.filter((product) => product.category === category)
		setFilteredProducts(filteredProduct)
	}

	function brandFilter(brand) {
		// alert(brand)
		// axios.get("https://63c663fcd307b76967380f55.mockapi.io/footwear")
		// 	.then((res) => {
		// console.log(res.data);
		// const products = res.data
		// console.log(products);
		// const filteredProduct = products.filter((product) => product.brand === brand);
		const filteredProduct = filteredProducts.filter((product) => {
			if (category) {
				return product.brand === brand && product.category == category
			} else {
				return product.brand === brand
			}
		});
		// console.log(filteredProduct);
		// setProductData(filteredProduct)
		setFilteredProducts(filteredProduct)

		// })
	};

	function filter(filterValue) {
		// alert(filterValue)
		if (filterValue === "male" || filterValue === "female") {
			const filteredProduct = productData.filter((product) => product.category === filterValue)
			setFilteredProducts(filteredProduct)
		}
		if (filterValue === "adidas" || filterValue === "bata" || filterValue === "nike" || filterValue === "puma") {
			const filteredProduct = productData.filter((product) => product.brand === filterValue)
			setFilteredProducts(filteredProduct)
		}
	};

	function handleSearch(e) {
		const searchText = e.target.value.toLowerCase();

		if (searchText === "") {
			setFilteredProducts(productData)
		} else {
			const result = productData.filter((res) => {
				return (
					res.title.toLowerCase().includes(searchText) ||
					res.price.toLowerCase().includes(searchText) ||
					res.brand.toLowerCase().includes(searchText)
				)
			});
			setFilteredProducts(result)
		}

	}

	function sortProductsByPrice() {
		const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
		console.log(sorted)
		setFilteredProducts(sorted);
		// console.log(filteredProducts);
	};


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
			<div class="colorlib-product">
				<div class="container">
					<div className="col-12 d-flex justify-content-end">
						<div className="col-lg-9">
							<input onChange={(e) => handleSearch(e)} className='form-control' type="text" placeholder='Seacrh' />
						</div>
						<div className="d-flex align-items-center" style={{ padding: '10px' }}>
							<label htmlFor="s-result-sort-select" className="me-2 mt-2" style={{ fontWeight: 'bold' }}>
								Sort by:
							</label>
							<div className="a-dropdown-container">
								<select
									onChange={() => sortProductsByPrice()}
									name="s"
									autoComplete="off"
									id="s-result-sort-select"
									tabIndex="0"
									data-action="a-dropdown-select"
									className="a-native-dropdown a-declarative form-select"
									style={{
										borderRadius: '50px',
										padding: '5px 20px',
										backgroundColor: '#f8f9fa',
										border: '1px solid #ced4da',
										appearance: 'none', // Hides the default dropdown arrow
										WebkitAppearance: 'none', // For Safari
										MozAppearance: 'none' // For Firefox
									}}
								>
									<option value="relevanceblender" selected>Featured</option>
									<option value="price-asc-rank">Price: Low to High</option>
									<option value="price-desc-rank">Price: High to Low</option>
									<option value="review-rank">Avg. Customer Review</option>
									<option value="date-desc-rank">Newest Arrivals</option>
								</select>
							</div>
						</div>
					</div>

					{/* Sort By Design */}
					{/* <div className="col-12 d-flex justify-content-end">
						<span className="a-dropdown-container" style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#f8f9fa', border: '1px solid #ced4da' }}>
							<label htmlFor="s-result-sort-select" className="a-native-dropdown" style={{ marginRight: '10px', fontWeight: 'bold' }}>
								Sort by:
							</label>
							<select
								name="s"
								autoComplete="off"
								id="s-result-sort-select"
								tabIndex="0"
								data-action="a-dropdown-select"
								className="a-native-dropdown a-declarative form-select"
								style={{ width: '200px', borderRadius: '5px' }}
							>
								<option value="relevanceblender" selected>Featured</option>
								<option value="price-asc-rank">Price: Low to High</option>
								<option value="price-desc-rank">Price: High to Low</option>
								<option value="review-rank">Avg. Customer Review</option>
								<option value="date-desc-rank">Newest Arrivals</option>
							</select>
						</span>
					</div> */}
					{/* Sort By Design */}


					<div class="row">
						<div class="col-lg-3 col-xl-3">
							<div class="row">
								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Category</h3>
										<ul>
											<li><button className='btn p-0 text-secondary' onClick={() => filter("male")}>Male</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => filter("female")}>Female</button></li>
										</ul>
									</div>
								</div>
								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Brand</h3>
										<ul>
											<li><button className='btn p-0 text-secondary' onClick={() => filter("adidas")}>Adidas</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => filter("bata")}>Bata</button></li>
											{/* <li><button className='btn p-0 text-secondary' onClick={() => filter("gucci")}>Gucci</button></li> */}
											<li><button className='btn p-0 text-secondary' onClick={() => filter("nike")}>Nike</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => filter("puma")}>Puma</button></li>
											{/* <li><button className='btn p-0 text-secondary' onClick={() => filter("skechers")}>Skechers</button></li> */}
										</ul>
									</div>
								</div>
								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Size</h3>
										<div class="block-26 mb-2">
											<h4>Size</h4>
											<ul>
												<li><button className='btn p-0 text-secondary mx-auto my-auto'>6</button></li>
												<li><a href="#">7</a></li>
												<li><a href="#">8</a></li>
												<li><a href="#">9</a></li>
												<li><a href="#">10</a></li>
											</ul>
										</div>

										{/* Width Filter */}
										{/* <div class="block-26">
											<h4>Width</h4>
											<ul>
												<li><a href="#">M</a></li>
												<li><a href="#">W</a></li>
											</ul>
										</div> */}
										{/* Width Filter */}

									</div>
								</div>
								{/* <div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Style</h3>
										<ul>
											<li><a href="#">Slip Ons</a></li>
											<li><a href="#">Boots</a></li>
											<li><a href="#">Sandals</a></li>
											<li><a href="#">Lace Ups</a></li>
											<li><a href="#">Oxfords</a></li>
										</ul>
									</div>
								</div> */}
								<div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Colors</h3>
										<ul>
											<li><a href="#">Black</a></li>
											<li><a href="#">White</a></li>
											<li><a href="#">Blue</a></li>
											<li><a href="#">Red</a></li>
											<li><a href="#">Green</a></li>
											<li><a href="#">Grey</a></li>
											<li><a href="#">Orange</a></li>
											<li><a href="#">Cream</a></li>
											<li><a href="#">Brown</a></li>
										</ul>
									</div>
								</div>
								<div class="col-sm-12">
									<div class="side border mb-1">
										<ul>
											<div class="d-grid gap-2 col-12 mx-auto">
												<button onClick={() => fetchProductData()} class="btn btn-primary" type="button" style={{ "backgroundColor": "#88c8bc", "color": "black" }}>Clear Filter</button>
											</div>
										</ul>
									</div>
								</div>

								{/* Material Filter */}
								{/* <div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Material</h3>
										<ul>
											<li><a href="#">Leather</a></li>
											<li><a href="#">Suede</a></li>
										</ul>
									</div>
								</div> */}
								{/* Material Filter */}

								{/* Technologies Filter */}
								{/* <div class="col-sm-12">
									<div class="side border mb-1">
										<h3>Technologies</h3>
										<ul>
											<li><a href="#">BioBevel</a></li>
											<li><a href="#">Groove</a></li>
											<li><a href="#">FlexBevel</a></li>
										</ul>
									</div>
								</div> */}
								{/* Technologies Filter */}

							</div>
						</div>


						{/* -------------- Card Data ------------- */}
						<div class="col-lg-9 col-xl-9">
							<div class="row row-pb-md">
								{
									spinner
										?
										<div class="d-flex justify-content-center">
											<div class="spinner-border  text-info" role="status">
												<span class="sr-only">Loading...</span>
											</div>
										</div>

										:

										filteredProducts.map((product) => {
											return (
												<div class="col-lg-4 mb-4 text-center">
													<div class="product-entry border">
														<Link to={"/productdetail/" + product.id} href="#" class="prod-img">
															<img style={{ height: "150px" }} src={product.image} class="img-fluid" alt="Free html5 bootstrap 4 template" />
														</Link>
														<div class="desc">
															<h2><a href="#">{product.brand} <br /> {product.title}</a></h2>
															<span class="price"><h4>₹{product.price}/-</h4></span>
															<span class="price"><del><h5>₹{product.mrp}/-</h5></del></span>
															<button onClick={(e) => addToCart(e, product)} style={{ "backgroundColor": "#88c8bc", "color": "black" }} className='btn btn-primary'><i class="icon-shopping-cart"></i> Add to Cart</button>
														</div>
													</div>
												</div>
											)
										})

								}
							</div>
							<div class="row">
								<div class="col-md-12 text-center">
									<div class="block-27">
										<ul>
											<li><a href="#"><i class="ion-ios-arrow-back"></i></a></li>
											<li class="active"><span>1</span></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#"><i class="ion-ios-arrow-forward"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}




