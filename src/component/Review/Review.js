import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
	getDatabaseCart,
	processOrder,
	removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

import happyImage from "../../images/giphy.gif";

const Review = () => {
	const [cart, setCart] = useState([]);
	const [placeOrderStatus, setPlaceOrderStatus] = useState(false);
	useEffect(() => {
		const saveProduct = getDatabaseCart();
		const productKeys = Object.keys(saveProduct);

		const cartProducts = productKeys.map((pkey) => {
			const product = fakeData.find((fpd) => fpd.key === pkey);
			product.orderQuantity = saveProduct[pkey];
			return product;
		});
		// console.log(cartProducts);
		setCart(cartProducts);
	}, []);

	const removeProductFromCart = (productKey) => {
		console.log(productKey);
		removeFromDatabaseCart(productKey);
		const newCart = cart.filter((product) => product.key !== productKey);

		setCart(newCart);
	};

	const handleOrderPlace = () => {
		setCart([]);
		processOrder();
		setPlaceOrderStatus(true);
		console.log("order placement");
	};
	return (
		<div className="twin-container">
			<div className="products-container">
				<h1>Order Quantity : {cart.length}</h1>
				{cart.map((pd) => (
					<ReviewItem
						key={pd.key}
						product={pd}
						removeProdcuct={removeProductFromCart}
					></ReviewItem>
				))}
				{placeOrderStatus && <img src={happyImage} alt=""></img>}
			</div>

			<div className="products-container">
				<Cart cart={cart}>
					<button className="main-btn" onClick={handleOrderPlace}>
						Order Place
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default Review;
