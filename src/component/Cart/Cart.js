import React from "react";
import "./Cart.css";

const Cart = (props) => {
	const { cart } = props;

	const totalPrice = cart.reduce((total, product) => total + product.price, 0);

	let shippingCost = 0;
	if (40 < totalPrice) {
		shippingCost = 0;
	} else if (15 < totalPrice) {
		shippingCost = 4.99;
	} else if (0 < totalPrice) {
		shippingCost = 0;
	}

	let tax = totalPrice / 10;

	// return number format 2 precession.
	const numberFormat = (num) => Number(num.toFixed(2));
	return (
		<div>
			<h2>Order Summary</h2>
			<p>Item Order: {cart.length}</p>
			<p>Product Price: {numberFormat(totalPrice)}</p>
			<p>Slhipping Cost: {numberFormat(shippingCost)}</p>
			<p>Tax + VAT: {numberFormat(tax)}</p>
			<p>Total: {numberFormat(totalPrice + shippingCost + tax)}</p>
		</div>
	);
};

export default Cart;
