import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData/index";
import {
	addToDatabaseCart,
	getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const firs10Products = fakeData.slice(0, 10);
	const [products, setProducts] = useState(firs10Products);
	const [cart, setCart] = useState([]);
	// console.log(fakeData);

	useEffect(() => {
		const saveProduct = getDatabaseCart();
		const productKeys = Object.keys(saveProduct);

		const cartProducts = productKeys.map((pkey) => {
			const product = fakeData.find((fpd) => fpd.key === pkey);
			product.orderQuantity = saveProduct[pkey];
			return product;
		});

		setCart(cartProducts);
	}, []);
	const handleAddProduct = (product) => {
		// add product to cart
		// console.log(cart);

		const sameProduct = cart.find((pd) => pd.key === product.key);
		let count = 1;
		let newCart = [];
		if (sameProduct) {
			sameProduct.orderQuantity += 1;
			count = sameProduct.orderQuantity;
			const others = cart.filter((pd) => pd.key !== product.key);
			newCart = [...others, sameProduct];
		} else {
			product.orderQuantity = 1;
			newCart = [...cart, product];
		}
		addToDatabaseCart(product.key, count);
		setCart(newCart);
	};
	return (
		<div className="twin-container">
			<div className="products-container">
				<h1>This is shop. Products({products.length})</h1>
				<ul>
					{products.map((pd) => (
						<Product
							key={pd.key}
							product={pd}
							handleAddProduct={handleAddProduct}
							showAddCart={true}
						></Product>
					))}
				</ul>
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<Link to="/review">
						<button className="main-btn">Order Review</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;
