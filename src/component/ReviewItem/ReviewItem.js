import React from "react";
import "./ReiveiwItem.css";

const ReviewItem = ({ product, removeProdcuct }) => {
	const { key, name, img, orderQuantity } = product;
	return (
		<div className="review-item">
			<img src={img} alt="" srcset="" />
			<h2>{name}</h2>
			<p>Quantity : {orderQuantity}</p>
			<br></br>
			<button className="main-btn" onClick={() => removeProdcuct(key)}>
				Remove
			</button>
		</div>
	);
};

export default ReviewItem;
