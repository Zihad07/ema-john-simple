import React, { useState } from "react";
import fakeData from "../../fakeData/index";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const firs10Products = fakeData.slice(0, 10);
	const [products, setProducts] = useState(firs10Products);
	const [cart, setCart] = useState([]);
	// console.log(fakeData);

	const handleAddProduct = (product) => {
		// add product to cart
		setCart([...cart, product]);
		console.log(product);
	};
	return (
		<div className="shop-container">
			<div className="products-container">
				<h1>This is shop. Products({products.length})</h1>
				<ul>
					{products.map((pd) => (
						<Product
							key={pd.key}
							product={pd}
							handleAddProduct={handleAddProduct}
						></Product>
					))}
				</ul>
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
