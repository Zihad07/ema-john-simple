import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
	getDatabaseCart,
	removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
	const [cart, setCart] = useState([]);
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
	};
	return (
		<div className="review-items">
			<h1>Order Quantity : {cart.length}</h1>
			{cart.map((pd) => (
				<ReviewItem
					key={pd.key}
					product={pd}
					removeProdcuct={removeProductFromCart}
				></ReviewItem>
			))}
		</div>
	);
};

export default Review;
