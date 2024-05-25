import React from 'react'

export default function zzz() {
  return (
    <div>
        import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import axios from 'axios'
import '../css/style.css'

import { storeAddToCart } from "../state/cartSlice";

export default function Products() {

	const [spinner, setSpinner] = useState(true);
	const dispatch = useDispatch();

	const [productData, setProductData] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [category, setCategory] = useState("");
	const [sortOption, setSortOption] = useState("relevanceblender");

	function fetchProductData() {
		axios.get("https://63c663fcd307b76967380f55.mockapi.io/footwear")
			.then((res) => {
				console.log(res.data);
				setProductData(res.data)
				setFilteredProducts(res.data)
				setSpinner(false)
			});
	}

	useEffect(() => {
		fetchProductData();
	}, []);

	useEffect(() => {
		sortProductsByPrice();
	}, [sortOption, filteredProducts]);

	function categoryFilter(category) {
		setCategory(category)
		const filteredProduct = productData.filter((product) => product.category === category)
		setFilteredProducts(filteredProduct)
	}

	function brandFilter(brand) {
		const filteredProduct = productData.filter((product) => {
			if (category) {
				return product.brand === brand && product.category === category
			} else {
				return product.brand === brand
			}
		});
		setFilteredProducts(filteredProduct)
	}

	function sortProductsByPrice() {
		if (sortOption === "price-asc-rank") {
			const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
			setFilteredProducts(sorted);
		} else if (sortOption === "price-desc-rank") {
			const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
			setFilteredProducts(sorted);
		}
	}

	function handleSortChange(e) {
		setSortOption(e.target.value);
	}

	function addToCart(e, product) {
		e.preventDefault();
		let cartProduct = {
			id: product.id,
			title: product.title,
			price: product.price,
			mrp: product.mrp,
			image: product.image,
			quantity: 1,
		};

		dispatch(storeAddToCart(cartProduct));
	};

	return (
		<>
			<div className="colorlib-product">
				<div className="container">
					<div className="col-12 d-flex justify-content-end">
						<div className="d-flex align-items-center" style={{ padding: '10px' }}>
							<label htmlFor="s-result-sort-select" className="me-2 mt-2" style={{ fontWeight: 'bold' }}>
								Sort by:
							</label>
							<div className="a-dropdown-container">
								<select
									onChange={handleSortChange}
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

					<div className="row">
						<div className="col-lg-3 col-xl-3">
							<div className="row">
								<div className="col-sm-12">
									<div className="side border mb-1">
										<h3>Category</h3>
										<ul>
											<li><button className='btn p-0 text-secondary' onClick={() => categoryFilter("male")}>Male</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => categoryFilter("female")}>Female</button></li>
										</ul>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="side border mb-1">
										<h3>Brand</h3>
										<ul>
											<li><button className='btn p-0 text-secondary' onClick={() => brandFilter("adidas")}>Adidas</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => brandFilter("bata")}>Bata</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => brandFilter("gucci")}>Gucci</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => brandFilter("nike")}>Nike</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => brandFilter("puma")}>Puma</button></li>
											<li><button className='btn p-0 text-secondary' onClick={() => brandFilter("skechers")}>Skechers</button></li>
										</ul>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="side border mb-1">
										<h3>Size</h3>
										<div className="block-26 mb-2">
											<h4>Size</h4>
											<ul>
												<li><button className='btn p-0 text-secondary mx-auto my-auto'>6</button></li>
												<li><a href="#">7</a></li>
												<li><a href="#">8</a></li>
												<li><a href="#">9</a></li>
												<li><a href="#">10</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="side border mb-1">
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
								<div className="col-sm-12">
									<div className="side border mb-1">
										<ul>
											<div className="d-grid gap-2 col-12 mx-auto">
												<button onClick={() => fetchProductData()} className="btn btn-primary" type="button">Clear Filter</button>
											</div>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-9 col-xl-9">
							<div className="row row-pb-md">
								{
									spinner
										?
										<div className="d-flex justify-content-center">
											<div className="spinner-border  text-info" role="status">
												<span className="sr-only">Loading...</span>
											</div>
										</div>

										:

										filteredProducts.map((product) => {
											return (
												<div className="col-lg-4 mb-4 text-center" key={product.id}>
													<div className="product-entry border">
														<a href="#" className="prod-img">
															<img style={{ height: "200px" }} src={product.image} className="img-fluid" alt="Free html5 bootstrap 4 template" />
														</a>
														<div className="desc">
															<h2><a href="#">{product.brand} <br /> {product.title}</a></h2>
															<span className="price"><h4>₹{product.price}/-</h4></span>
															<span className="price"><del><h5>₹{product.mrp}/-</h5></del></span>
															<button onClick={(e) => addToCart(e, product)} className='btn btn-primary'>Add to Cart</button>
														</div>
													</div>
												</div>
											)
										})

								}
							</div>
							<div className="row">
								<div className="col-md-12 text-center">
									<div className="block-27">
										<ul>
											<li><a href="#"><i className="ion-ios-arrow-back"></i></a></li>
											<li className="active"><span>1</span></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#"><i className="ion-ios-arrow-forward"></i></a></li>
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

    </div>
  )
}
