import React from "react";
import "./ReiveiwItem.css";

const ReviewItem = ({ product, removeProdcuct }) => {
	const { key, name, img, price, orderQuantity } = product;
	return (
		<div className="review-item">
			<img src={img} alt="" srcset="" />
			<h6>{name}</h6>
			<p>Quantity : {orderQuantity}</p>
			<p>
				<small>$ {price}</small>
			</p>
			<br></br>
			<button className="main-btn" onClick={() => removeProdcuct(key)}>
				Remove
			</button>
		</div>
	);
};

export default ReviewItem;
